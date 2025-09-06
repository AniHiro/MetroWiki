import type { Entity } from "../types/entity"; 


export const entities: Entity[] = [
    {
        id: "artem",
        type: "character",
        title: "Артём",
        shortDescription: "Главный герой серии Metro.",
        content: "Артём - житель станции ВДНХ, главный герой книг и игр серии Metro...",
        images: [""],
        factions: ["sparta"],
        game: ["metro-2033", "metro-last-light", "metro-exodus"],
        sources: [
            { title: "Metro Wiki", url: "https://metrovideogame.fandom.com/wiki/Artyom" }
        ]
    },
];

