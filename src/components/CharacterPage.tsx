import React from "react";
import { useParams, Link } from "react-router-dom";
import { characters } from "../data/characters2033";
import "../styles/Characters.scss"

export default function CharacterPage() {
    const { id } = useParams();
    const character = characters.find((c) => c.id === id);

    if (!character) {
        return <p>Персонаж не найден</p>;
    }

    return (
        <div className="character-page">
            <Link to="/game/metro-2033/characters" className="back-link">← Назад</Link>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>{character.bio}</p>
        </div>
    );
}