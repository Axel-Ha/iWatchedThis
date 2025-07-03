import { AnimeResponse } from '../../../shared/definitions/anime';

export function mapAniListToAnimeResponse(anime: any): AnimeResponse {
  return {
    animeHeader: {
      title: anime.title,
      description: anime.description,
      bannerImage: anime.bannerImage,
      coverImage: anime.coverImage,
    },
    animeSideBar: {
      startDate: anime.startDate,
      endDate: anime.endDate,
      episodes: anime.episodes,
      duration: anime.duration,
      source: anime.source,
      type: anime.type,
      genres: anime.genres,
      averageScore: anime.averageScore,
      meanScore: anime.meanScore,
      popularity: anime.popularity,
      favourites: anime.favourites,
      season: anime.season,
      seasonYear: anime.seasonYear,
      status: anime.status,
      format: anime.format,
      studios: anime.studios,
      synonyms: anime.synonyms,
    },
    relations: Array.isArray(anime.relations?.edges)
      ? anime.relations.edges.map((edge: any) => ({
        relationType: edge.relationType,
        node: edge.node,
        coverImage: edge.node.coverImage,
      }))
      : [],
  };
} 