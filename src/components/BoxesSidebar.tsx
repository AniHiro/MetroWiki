import React from "react";
import "../styles/GameBoxes2033.scss"

interface BoxesSidebarProps {
    activeChapter: string;
}

const chapters = [
    {id: "safe", title: "Сейф № 1 и ключ № 1."},
    {id: "safe2", title: "Сейф № 2 и ключ № 2."},
    {id: "safe3", title: "Сейф № 3 и ключ № 3."},
    {id: "safe4", title: "Сейф № 4 и ключ № 4."},
    {id: "safe5", title: "Сейф № 5 и ключ № 5."},
    {id: "safe6", title: "Сейф № 6 и ключ № 6."},
    {id: "safe7", title: "Сейф № 7 и ключ № 7."},
    {id: "safe8", title: "Сейф № 8 и ключ № 8."},
    {id: "safe9", title: "Сейф № 9 и ключ № 9."},
    {id: "safe10", title: "Сейф № 10 и ключ № 10."},
    {id: "safe11", title: "Сейф № 11 и ключ № 11."},
    {id: "safe12", title: "Сейф № 12 и ключ № 12."},
    {id: "safe13", title: "Сейф № 13 и ключ № 13."},
    {id: "safe14", title: "Сейф № 14 и ключ № 14."},
    {id: "safe15", title: "Сейф № 15 и ключ № 15."},
    {id: "safe16", title: "Сейф № 16 и ключ № 16."},
    {id: "safe17", title: "Сейф № 17 и ключ № 17."},
    {id: "safe18", title: "Сейф № 18 и ключ № 18."},
    {id: "safe19", title: "Сейф № 19 и ключ № 19."},
    {id: "safe20", title: "Сейф № 20 и ключ № 20."},
    {id: "safe21", title: "Сейф № 21 и ключ № 21."},
    {id: "safe22", title: "Сейф № 22 и ключ № 22."},
    {id: "safe23", title: "Сейф № 23 и ключ № 23."},
    {id: "links", title: "Ссылки"},
];

export default function BoxesSidebar({ activeChapter }: BoxesSidebarProps) {
    return (
        <aside className="boxes-sidebar">
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