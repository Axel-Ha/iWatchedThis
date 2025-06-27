export interface AnimesResponse {
    id: number;
    title: { romaji: string }
    coverImage: { large: string }
    genres: string[]
    studios: {
        nodes: {
            [x: string]: any; 
            name: string
        }
    }
    averageScore: number
    popularity: number
    seasonYear: number
    season: string
    status: string
    format: string
    episodes: number
    duration: number
    bannerImage: string
    relations: AnimeRelations[];
    description: string
}

export interface AnimeRelations {
    relationType : string;
    node : { 
        title : { romaji : string }
        format: string
    }
    coverImage : { medium : string }
}