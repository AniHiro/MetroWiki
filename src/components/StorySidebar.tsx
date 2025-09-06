import React from "react";

interface StorySidebarProps {
    activeChapter: string;
}

const chapters = [
    {id: "prologue", title: "Пролог"},
    {id: "chapter1", title: "ГЛАВА 1: В ПУТЬ"},
    {id: "chapter2-1", title: "ГЛАВА 2: БУРБОН ЧАСТЬ 1"},
    {id: "chapter2-2", title: "ГЛАВА 2: БУРБОН ЧАСТЬ 2"},
    {id: "chapter3", title: "ГЛАВА 3: ХАН"},
    {id: "chapter4-1", title: "ГЛАВА 4: ВОЙНА ЧАСТЬ 1"},
    {id: "chapter4-2", title: "ГЛАВА 4: ВОЙНА ЧАСТЬ 2"},
    {id: "chapter4-3", title: "ГЛАВА 4: ВОЙНА ЧАСТЬ 3"},
    {id: "chapter5", title: "ГЛАВА 5: НАДЕЖДА"},
    {id: "chapter6", title: "ГЛАВА 6: Д-6"},
    {id: "chapter7", title: "ГЛАВА 7: БАШНЯ"},
];

export default function StorySidebar({ activeChapter }: StorySidebarProps) {
    return (
        <aside className="story-sidebar">
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