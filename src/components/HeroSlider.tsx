import React, { useState, useEffect, useRef } from "react";

import "../styles/HeroSlider.scss"





interface Slide { type: "video" | "image"; src: string; }
const slides: Slide[] = [
    { type: "video", src: "../../public/trailer/Metro Redux - Announce Trailer US [get-save.com].mp4"},
    { type: "image", src: "../../public/Screenshot_of_Metro_2033/image.jpg"},
    { type: "image", src: "../../public/Screenshot_of_Metro_2033/image_5b80b1e56a7ac8.11496995.jpg"},
    { type: "image", src: "../../public/Screenshot_of_Metro_2033/image_5b80b1e616a982.63890268.jpg"},
    { type: "image", src: "../../public/Screenshot_of_Metro_2033/metro_2033_redux-1.jpg"},
    { type: "image", src: "../../public/Screenshot_of_Metro_2033/screenshot.metro-2033-redux.1920x1080.2014-08-27.15.jpg"},
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const next = () => setCurrent((current + 1) % slides.length);
    const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

    useEffect(() => {
        if (slides[current].type === "video" && videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => {});
        }
    }, [current]);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (slides[current].type === "image") {
            timer = setTimeout(next, 5000);
        }

        return () => clearTimeout(timer);
    }, [current]);

    return (
        <div className="hero-slider">
            <button onClick={prev} className="slider__control prev">‹</button>
            <div className="slider__slide">
                {slides[current].type == "video" ? (
                    <video
                      ref={videoRef}
                      className="slider_media"
                      src={slides[current].src}
                      autoPlay
                      controls
                      onEnded={next}
                    />
                ) : (
                    <img
                      src={slides[current].src}
                      alt={`Slide ${current}`}
                      className="slider_media"
                    />
                )}
            </div>
            <button onClick={next} className="slider__control next">›</button>
            <div className="slider_dots">
                {slides.map((_, i) => (
                    <button
                       key={i}
                       className={`dot ${i === current ? "active" : ""}`}
                       onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
        </div>
    )
}