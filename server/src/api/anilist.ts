import fetch from 'node-fetch';
import { getCurrentAnimeSeason } from '../utils/date';

const ANILIST_URL = 'https://graphql.anilist.co';

export async function fetchTrendingAnime(perPage = 5) {
    const query = `
    query {
      Page(perPage: ${perPage}) {
        media(sort: TRENDING_DESC, type: ANIME) {
          id
          title { romaji }
          coverImage { large }
          episodes
        }
      }
    }
  `;
    return fetchFromAnilist(query);
}

export async function fetchPopularAnime(perPage = 5) {
    const query = `
    query {
      Page(perPage: ${perPage}) {
        media(sort: POPULARITY_DESC, type: ANIME) {
          id
          title { romaji }
          coverImage { large }
          episodes
        }
      }
    }
  `;
    return fetchFromAnilist(query);
}

export async function fetchNextSeasonAnime(perPage = 5) {
    const { season, seasonYear } = getCurrentAnimeSeason();
    const query = `
    query {
      Page(perPage: ${perPage}) {
        media(sort: POPULARITY_DESC, type: ANIME, season: ${season}, seasonYear: ${seasonYear}) {
          id
          title { romaji }
          coverImage { large }
          episodes
        }
      }
    }
  `;
    return fetchFromAnilist(query);
}

export async function fetchTopAnime(perPage = 10) {
    const query = `
    query {
        Page(perPage: ${perPage}) {
            media(sort: SCORE_DESC, type: ANIME) {
            title {
                romaji
            }
            coverImage { large }
            genres
            studios(isMain: true) {
                nodes {
                name
                }
            }
            averageScore
            popularity
            seasonYear
            season
            status
            format
            episodes
            duration
            }
        }
    }
  `;
    return fetchFromAnilist(query);
}

export async function fetchCurrentSeasonAnime(perPage = 5) {
    const { season, seasonYear } = getCurrentAnimeSeason();
    const query = `
    query {
      Page(perPage: ${perPage}) {
        media(sort: POPULARITY_DESC, type: ANIME, season: ${season}, seasonYear: ${seasonYear}) {
          id
          title { romaji }
          coverImage { large }
          episodes
        }
      }
    }
  `;
    return fetchFromAnilist(query);
}

async function fetchFromAnilist(query: string) {
    const response = await fetch(ANILIST_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ query }),
    });
    const data = (await response.json()) as { data: { Page: { media: any[] } } };
    return data.data.Page.media;
} 