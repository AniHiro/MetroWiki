import React from "react";
import "../styles/GameEquipment.scss"

interface EquipmentSidebarProps {
    activeChapter: string;
}

const chapters = [
    {id: "flashlight", title: "Фонарь"},
    {id: "nvg", title: "ПНВ"},
    {id: "uc", title: "Универсальное зарядное устройство"},
    {id: "mask", title: "Противогаз"},
    {id: "filter", title: "Фильтр"},
    {id: "Watch", title: "Часы"},
    {id: "fak", title: "Аптечка"},
];

export default function EquipmentSidebar({ activeChapter }: EquipmentSidebarProps) {
    return (
        <aside className="equipment-sidebar">
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
 