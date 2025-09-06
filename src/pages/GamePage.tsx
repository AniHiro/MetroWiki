import { useParams } from "react-router-dom";
import { entities } from "../data/entities";
import type { GameId } from "../data/games"; 
import EntityCard from "../components/EntityCard";
import React from "react";
import GameMetro2033 from "./GameMetro2033";



export default function GamePage() {
    const { id } = useParams();
    const gameId = id as GameId;

    const filteredEntities = entities.filter((e) => e.game?.includes(gameId));

    if (gameId === "metro-2033") {
        return <GameMetro2033/>
    }

    return (
        <div>
            <h1>Информация по {id}</h1>
            {filteredEntities.length === 0 ? (
                <p>Нет данных для этой игры.</p>
            ) : (
                <div className="entity-list">
                    {filteredEntities.map((e) => (
                        <EntityCard key={e.id} entity={e} />
                    ))}
                </div>
            )}
        </div>
    );
}

