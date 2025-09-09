import React from "react";
import { Link } from "react-router-dom";
import { characters } from "../data/characters2033";
import "../styles/Characters.scss";

export default function CharactersPage() {
    return (
        <div className="characters-page">
            <h1>Персонажи</h1>
            <div className="characters-grid">
                {characters.map((c) => (
                    <Link to={`/game/metro-2033/characters/${c.id}`} key={c.id} className="characters-card">
                        <img src={c.image} alt={c.name} />
                        <p>{c.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}