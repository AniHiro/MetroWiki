export type GameId = 'metro-2033' | 'metro-last-light' | 'metro-exodus';

export interface Game {
    id: GameId;
    title: string;
    poster: string;
    description: string;
}

export const games: Game[] = [
    {
        id: 'metro-2033',
        title: 'Metro 2033',
        poster: "/poster/MV5BMmQwYThjMjgtN2Q4Ny00MmZjLWEzYWUtNjUyNjE3NWViMWM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: 'Первая игра серии Metro, повествующая о путешествии Артёма к Полису.'
    },
    {
        id: 'metro-last-light',
        title: 'Metro: Last Light',
        poster: '/poster/metro_last_light_redux-720x1080.jpg',
        description: 'Продолжения истории Артёма и борьба за будущее метро.'
    },
    {
        id: 'metro-exodus',
        title: 'Metro Exodus',
        poster: '/poster/71khmtnH8fL._UF1000,1000_QL80_.jpg',
        description: 'Третья часть, в которой Артём покидает метро и отправляется на поверхность.'
    }
];
