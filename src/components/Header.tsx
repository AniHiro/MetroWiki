import { Link, useLocation } from "react-router-dom";
import React from 'react'
import "../styles/Header.scss"
import path from "path";



export default function Header() {
  const location = useLocation();

  let logo = "";
  let links: { path: string; label: string; sublinks?: { path: string; label: string }[] }[] = [];
  let headerClass = "header";

  // Главнае
  if (location.pathname == "/") {
    logo = "/Logo/Homelogo.png";
    headerClass += " header--home";
    links = [
      
    ];
  }

  // Metro 2033
  if (location.pathname.startsWith("/game/metro-2033")){
    logo = "/Logo/logometro2033.png";
    headerClass += " header--metro2033";
    links = [
      {path: "/game/metro-2033/main2033", label: "Главное"},
      {path: "/game/metro-2033/story", label: "Сюжет"},
      {path: "#", label: "Персонажи"},
      {path: "/game/metro-2033/monsters", label: "Монстры"},
      {
        path: "/game/metro-2033/equipment", 
        label: "Снаряжение",
        sublinks: [
          {path: "/game/metro-2033/weapon", label: "Оружие"}
        ]
      },    
      {path: "#", label: "Пасхалки"},
      {
        path: "#",
        label: "Гайды",
        sublinks: [
          {path: "/game/metro-2033/achievements", label: "Достижения"},
          {path: "#", label: "Заметки"},
          {path: "#", label: "Сейфы"},
        ],
      }
    ];
  }

  // Metro Last Light
  if (location.pathname.startsWith("/game/metro-last-light")) {
    logo = "/Logo/logometrolastlight.png";
    headerClass += " header--lastlight";
    links = [
      {path: "#", label: "Сюжет"},
      {path: "#", label: "Персонажи"},
      {path: "#", label: "Монстры"},
      {path: "#", label: "Снаряжение"},
      {path: "#", label: "Музыка"},
      {path: "#", label: "Пасхалки"},
      {
        path: "#",
        label: "Гайды",
        sublinks: [
          {path: "#", label: "Правила выживания"},
          {path: "#", label: "Достижения"},
          {path: "#", label: "Заметки"},
          {path: "#", label: "Сейфы"},
          {path: "#", label: "Концовки игры"},
        ],
      }
    ];
  }

  // Metro Exodus
  if (location.pathname.startsWith("/game/metro-exodus")){
    logo = "/Logo/logometroexodus.png";
    headerClass += " header--exodus"
    links = [
      {path: "#", label: "Сюжет"},
      {path: "#", label: "Персонажи"},
      {path: "#", label: "Монстры"},
      {path: "#", label: "Снаряжение"},
      {path: "#", label: "Музыка"},
      {path: "#", label: "Пасхалки"},
      {
        path: "#",
        label: "Гайды",
        sublinks: [
          {path: "#", label: "Правила выживания"},
          {path: "#", label: "Достижения"},
          {path: "#", label: "Заметки"},
          {path: "#", label: "Сейфы"},
          {path: "#", label: "Концовки игры"},
        ],
      }

    ];
  }
  return (
    <header className={headerClass}>
      <div className="header__logo">
        <img src={logo} alt="logo"/>
      </div>
      <nav className="header__nav">
        {links.map((link) => (
          <div key={link.label} className="header__item">
             <Link key={link.label} to={link.path} className="header__link">
                {link.label}
             </Link>
             {link.sublinks && (
              <div className="header__submenu">
                {link.sublinks.map((sub) => (
                  <Link key={sub.label} to={sub.path} className="header__sublink">
                    {sub.label}
                  </Link>
                ))}
              </div>
             )}
          </div>
        ))}
      </nav>  
    </header>
  );
}
