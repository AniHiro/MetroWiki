import React from "react";
import "../styles/GameWeapon.scss"

interface WeaponSidebarProps {
    activeChapter: string;
}

const chapters = [
    {id: "revolver", title: "Револьвер"},
    {id: "Doublet", title: "Дуплет"},
    {id: "TheKiller", title: "Убойник"},
    {id: "Bastard", title: "Ублюдок"},
    {id: "ak", title: "АК-74М (Калаш)"},
    {id: "ak2012", title: "Калаш 2012"},
    {id: "VSV", title: "ВСВ"},
    {id: "Tihar", title: "Тихарь"},
    {id: "Helsing", title: "Хельсинг"},
    {id: "Paragraph", title: "Абзац"},
    {id: "Rails", title: "Рельса"},
    {id: "Knife", title: "Нож"},
    {id: "Throwingknife", title: "Метательный нож"},
    {id: "Grenade", title: "Граната"},
    {id: "Machinemountedflamethrower", title: "Станковый огнемёт"},
    {id: "DShK", title: "ДШК"},
];

export default function WeaponSidebar({ activeChapter }: WeaponSidebarProps) {
    return (
        <aside className="weapon-sidebar">
            <nav className="sidebar-nav">
                <ul>
                    {chapters.map((c) => (
                        <li key={c.id}>
                            <a 
                              href={`#${c.id}`} 
                              className={activeChapter === c.id ? "active" : ""}
                              >
                                {c.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
 