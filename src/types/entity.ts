type GameId = 'metro-2033' | 'metro-last-light' | 'metro-exodus';

export type EntityType = 'character' | 'location' | 'faction' | 'item' | 'event' | 'game' | 'person';

export interface Entity {
    id: string;
    type: EntityType;
    game: GameId[];
    title: string;
    aliases?: string[];
    shortDescription?: string;
    content?: string;
    images?: string[];
    factions?: string[];
    location?: string;
    related?: string[];
    sources?: { title: string; url?: string }[];
}