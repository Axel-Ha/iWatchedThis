export type AnimesResponse = {
    id: number;
    title: { romaji: string }
    coverImage: { large: string }
    genres: string[]
    studios: {nodes: {name: string}}
    averageScore : number
    popularity : number
    seasonYear : number
    season : string
    status : string
    format : string
}