import express from 'express';
import fetch from 'node-fetch';
import { getNextAnimeSeason, getCurrentAnimeSeason} from '../utils/date';
const router = express.Router();

router.get('/trending', async (_req, res) => {
  const query = `
      query {
        Page(perPage: 5) {
          media(sort: TRENDING_DESC, type: ANIME) {
            id
            title {
              romaji
            }
            coverImage {
              large
            }
            episodes
          }
        }
      }
    `;

  try {
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json() as { data: { Page: { media: any[] } } };
    res.json(data.data.Page.media);
  } catch (error) {
    console.error('Error fetching AniList data:', error);
    res.status(500).json({ error: 'Failed to fetch trending anime' });
  }
});

router.get('/popular', async (_req, res) => {
  const query = `
      query {
        Page(perPage: 5) {
          media(sort: POPULARITY_DESC, type: ANIME) {
            id
            title {
              romaji
            }
            coverImage {
              large
            }
            episodes
          }
        }
      }
    `;


  try {
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json() as { data: { Page: { media: any[] } } };
    res.json(data.data.Page.media);
  } catch (error) {
    console.error('Error fetching AniList data:', error);
    res.status(500).json({ error: 'Failed to fetch trending anime' });
  }
});

router.get('/current-season', async (_req, res) => {
  const { season, seasonYear } = getCurrentAnimeSeason();
  console.log(season, seasonYear);
  const query = `
      query {
        Page(perPage: 5) {
          media(sort: POPULARITY_DESC, type: ANIME, season: ${season}, seasonYear: ${seasonYear}) {
            id
            title {
              romaji
            }
            coverImage {
              large
            }
            episodes
          }
        }
      }
    `;


  try {
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json() as { data: { Page: { media: any[] } } };
    res.json(data.data.Page.media);
  } catch (error) {
    console.error('Error fetching AniList data:', error);
    res.status(500).json({ error: 'Failed to fetch trending anime' });
  }
});

router.get('/next-season', async (_req, res) => {
  const { season, seasonYear } = getNextAnimeSeason();
  console.log(season, seasonYear);
  const query = `
      query {
        Page(perPage: 5) {
          media(sort: POPULARITY_DESC, type: ANIME, season: ${season}, seasonYear: ${seasonYear}) {
            id
            title {
              romaji
            }
            coverImage {
              large
            }
            episodes
          }
        }
      }
    `;


  try {
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json() as { data: { Page: { media: any[] } } };
    res.json(data.data.Page.media);
  } catch (error) {
    console.error('Error fetching AniList data:', error);
    res.status(500).json({ error: 'Failed to fetch trending anime' });
  }
});
export default router;