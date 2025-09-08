import React from "react";
import "../styles/GameNotes2033.scss"

interface NotesSidebarProps {
    activeChapter: string;
}

const chapters = [
    {id: "tower", title: "Башня (Начало)"},
    {id: "hunter", title: "Хантер"},
    {id: "vdnk", title: "ВДНХ"},
    {id: "riga", title: "Рижская"},
    {id: "at", title: "Заброшенные туннели"},
    {id: "bazaar", title: "Базар"},
    {id: "dc", title: "Мёртвый город"},
    {id: "sukharevskaya", title: "Сухаревская"},
    {id: "ghosts", title: "Призраки"},
    {id: "turgenevskaya", title: "Тургеневская"},
    {id: "km", title: "Кузнецкий мост"},
    {id: "fl", title: "Линия фронта"},
    {id: "br", title: "Битва на дрезинах"},
    {id: "depot", title: "Депо"},
    {id: "paveletskaya", title: "Павелецкая"},
    {id: "outpost", title: "Форпост"},
    {id: "bs", title: "Чёрная станция"},
    {id: "policy", title: "Полис"},
    {id: "alley", title: "Аллея"},
    {id: "bd", title: "Книгохранилище"},
    {id: "temple", title: "Храм"},
    {id: "tk", title: "Тоннель на Киевскую"},
    {id: "cave", title: "Пещера"},
    {id: "d6", title: "Д6"},
    {id: "tower2", title: "Башня (Концовка)"},
    {id: "links", title: "Ссылки"},
];

export default function AchievementsSidebar({ activeChapter }: NotesSidebarProps) {
    return (
        <aside className="notes-sidebar">
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
 