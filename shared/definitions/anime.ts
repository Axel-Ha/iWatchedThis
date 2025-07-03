export interface AnimesResponse {
    id: number;
    title: { romaji: string, english: string, native: string }
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
}

export interface AnimeRelations {
    relationType : string;
    node : { 
        title : { romaji : string }
        format: string
    }
    coverImage : { medium : string }
}

export interface AnimeResponse { 
    animeHeader: AnimeHeader;
    animeSideBar: AnimeSideBarInfos;
    relations: AnimeRelations[];
}

export interface AnimeHeader {
    title: { romaji: string, english: string, native: string }
    description: string
    bannerImage: string
    coverImage: { large: string }
}

export interface AnimeSideBarInfos {
    startDate: { year: number, month: number, day: number }
    endDate: { year: number, month: number, day: number }
    episodes: number
    duration: number
    source: string
    type: string
    genres: string[]
    averageScore: number
    meanScore: number
    popularity: number
    favourites: number
    season: string
    seasonYear: number
    status: string
    format: string
    studios: {
        nodes: {
            [x: string]: any; 
            name: string
        }
    }
    synonyms: string[]
}