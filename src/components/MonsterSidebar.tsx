import React from "react";

type Monster = { id: string; name: string };

const monsters: Monster[] = [
    {id: "upyr", name: "Упырь"},
    {id: "nosach", name: "Носач"},
    {id: "Guardian", name: "Страж"},
    {id: "demon", name: "Демон"},
    {id: "librarian", name: "Библиотекарь"},
    {id: "dark", name: "Черный"},
    {id: "kikimora", name: "Кикимора"},
    {id: "Amoeba", name: "Амёба"},
    {id: "biomass", name: "Биомасса"},
];

export default function MonsterSidebar({ activeMonster }: { activeMonster: string}) {
    return (
        <aside className="monster-sidebar">
        <nav className="sidebar-nav">
            <ul>
                {monsters.map((m) => (
                    <li key={m.id}>
                        <a
                          href={`#${m.id}`}
                          className={activeMonster === m.id ? "active" : ""}
                          >
                            {m.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        </aside>
    );
}