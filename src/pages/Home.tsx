import { Link } from "react-router-dom";
import React from "react";

import { games } from "../data/games";

import "../styles/Home.scss";

export default function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Добро пожаловать в Metro Wiki</h1>
      <p className="home__subtitle">Выберите игру!</p>

      <div className="home__games">
        {games.map((game) =>(
          <Link key={game.id} to={`/game/${game.id}`} className="home__game">
              <img src={game.poster} alt={game.title} />
              <h2>{game.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}