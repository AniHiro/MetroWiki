import React from "react";
import "../styles/GameAchievements2033.scss"

interface AchievementsSidebarProps {
    activeChapter: string;
}

const chapters = [
    {id: "spartan2033", title: "Спартанец 2033"},
    {id: "survivalist2033", title: "Выживальщик 2033"},
    {id: "blogger", title: "Блоггер"},
    {id: "nimble", title: "Шустрый"},
    {id: "tank", title: "Танк"},
    {id: "generous", title: "Щедрый"},
    {id: "burglar", title: "Взломщик"},
    {id: "stalker", title: "Сталкер"},
    {id: "liquidator", title: "Ликвидатор"},
    {id: "cleanliness", title: "Чистюля"},
    {id: "sapper", title: "Сапер"},
    {id: "demolitionist", title: "Подрывник"},
    {id: "mes", title: "МЧС"},
    {id: "invisible", title: "Невидимка"},
    {id: "stormtrooper", title: "Штурмовик"},
    {id: "sniper", title: "Снайпер"},
    {id: "sharpshooter", title: "Меткий стрелок"},
    {id: "raider", title: "Рейдер"},
    {id: "dj", title: "Диджей"},
    {id: "merciful", title: "Милосердный"},
    {id: "third", title: "Третий"},
    {id: "dealer", title: "Торговец"},
    {id: "miser", title: "Скряга"},
    {id: "tone", title: "Тонус"},
    {id: "speculator", title: "Спекулянт"},
    {id: "gunsmith", title: "Оружейник"},
    {id: "boom", title: "Бум!"},
    {id: "fire", title: "Огонь!"},
    {id: "cowboy", title: "Ковбой"},
    {id: "sieve", title: "Решето"},
    {id: "su", title: "Стендовик"},
    {id: "draft", title: "Сквозняк"},
    {id: "shock", title: "Шок"},
    {id: "pyromaniac", title: "Пироман"},
    {id: "cas", title: "Руби и Круши!"},
    {id: "ninja", title: "Ниндзя"},
    {id: "ars", title: "Оглушительный успех"},
    {id: "snake", title: "Снейк"},
    {id: "gh", title: "Охотник на Стражей."},
    {id: "gh1", title: "Охотник на упырей"},
    {id: "warrior", title: "Воин"},
    {id: "fth", title: "Огонь по норам"},
    {id: "sh", title: "Охотник на пауков"},
    {id: "hunter", title: "Охотник"},
    {id: "inquisitor", title: "Инквизитор"},
    {id: "reader", title: "Инквизитор"},
    {id: "pathologist", title: "Паталогоанатом"},
    {id: "eme", title: "Врагов надо истреблять"},
    {id: "enlightened", title: "Просвещенный"},
];

export default function AchievementsSidebar({ activeChapter }: AchievementsSidebarProps) {
    return (
        <aside className="achievements-sidebar">
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
 