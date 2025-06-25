export type AnimesResponse = {
    id: number;
    title: { romaji: string }
    coverImage: { large: string }
    genres: string[]
    studios: {nodes: {
        [x: string]: any;name: string
}}
    averageScore : number
    popularity : number
    seasonYear : number
    season : string
    status : string
    format : string
    episodes : number
    duration : number
}