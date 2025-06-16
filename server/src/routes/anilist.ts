import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/trending', async (_req, res) => {
    const query = `
      query {
        Page(perPage: 5) {
          media(sort: TRENDING_DESC, type: ANIME) {
            id
            title {
              english
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
        res.json(data.data.Page.media); // on retourne seulement les animes
      } catch (error) {
        console.error('Error fetching AniList data:', error);
        res.status(500).json({ error: 'Failed to fetch trending anime' });
      }
    });
    
    export default router;