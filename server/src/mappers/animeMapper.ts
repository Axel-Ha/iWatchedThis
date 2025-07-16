import { format } from 'path';
import { AnimeResponse } from '../../../shared/definitions/anime';

export function mapAniListToAnimeResponse(anime: any): AnimeResponse {
  return {
    animeHeader: {
      title: anime.title,
      description: anime.description,
      bannerImage: anime.bannerImage,
      coverImage: anime.coverImage,
      format: anime.format,
      status: anime.status,
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
      tags: anime.tags.map((tag: any) => ({
        name: tag.name,
        isMediaSpoiler: tag.isMediaSpoiler,
        rank: tag.rank,
      })),
    },
    relations: Array.isArray(anime.relations?.edges)
      ? anime.relations.edges.map((edge: any) => ({
        relationType: edge.relationType,
        node: edge.node,
        coverImage: edge.node.coverImage,
        format: edge.node.format,
        status: edge.node.status,

      }))
      : [],
    characters: Array.isArray(anime.characters?.edges)
      ? anime.characters.edges.map((edge: any) => ({
        role: edge.role,
        character: edge.node,
        voiceActors: Array.isArray(edge.voiceActorRoles)
          ? edge.voiceActorRoles
              .map((role: any) => role.voiceActor)
              .filter((va: any) => !!va)
          : [],
      }))
      : [],
    staffs: Array.isArray(anime.staff?.edges)
      ? anime.staff.edges.map((edge: any) => ({
        role: edge.role,
        staff: edge.node,
      }))
      : [],
  };
} 