import fetch from 'node-fetch';
import { getCurrentAnimeSeason,getNextAnimeSeason } from '../utils/date';
import * as queryUtils from '../utils/query';

const ANILIST_URL = 'https://graphql.anilist.co';

export async function fetchTrendingAnime(perPage = 5) {
  const query = `
    query {
      Page(perPage: ${perPage}) {
        media(sort: TRENDING_DESC, type: ANIME) {
          ${queryUtils.queryHomePageAnimes}
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
          ${queryUtils.queryHomePageAnimes}
        }
      }
    }
  `;
  return fetchFromAnilist(query);
}

export async function fetchNextSeasonAnime(perPage = 5) {
  const { season, seasonYear } = getNextAnimeSeason();
  const query = `
    query {
      Page(perPage: ${perPage}) {
        media(sort: POPULARITY_DESC, type: ANIME, season: ${season}, seasonYear: ${seasonYear}) {
          ${queryUtils.queryHomePageAnimes}
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
              ${queryUtils.queryInfoAnimes}
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

export async function fetchAnimeById(id: number) {
  const query = `
  query {
    Media(id: ${id}) {
      ${queryUtils.queryInfoAnimes}
      ${queryUtils.queryRelationAnimes}
      ${queryUtils.querySideBarAnimeInfos}
    }
  }
  `;
  return fetchFromAnilistItem(query);
}

async function fetchFromAnilistItem(query: string) {
  const response = await fetch(ANILIST_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const data = (await response.json()) as { data?: { Media?: any }, errors?: any };

  if (!data.data || !data.data.Media) {
    console.error('AniList API response:', JSON.stringify(data, null, 2));
    throw new Error('No Media found in AniList response');
  }

  return data.data.Media;
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
