import express from 'express';
import { fetchTrendingAnime, fetchPopularAnime, fetchNextSeasonAnime, fetchCurrentSeasonAnime, fetchTopAnime } from '../api/anilist';
const router = express.Router();

router.get('/trending', async (_req, res) => {
  try {
    const animes = await fetchTrendingAnime();
    res.json(animes);
  } catch (error) {
    console.error('Error fetching AniList data:', error);
    res.status(500).json({ error: 'Failed to fetch trending anime' });
  }
});

router.get('/popular', async (_req, res) => {
  try {
    const animes = await fetchPopularAnime();
    res.json(animes);
  } catch (error) {
    console.error('Error fetching AniList data:', error);
    res.status(500).json({ error: 'Failed to fetch popular anime' });
  }
});

router.get('/current-season', async (_req, res) => {
  try {
    const animes = await fetchCurrentSeasonAnime();
    res.json(animes);
  } catch (error) {
    console.error('Error fetching AniList data:', error);
    res.status(500).json({ error: 'Failed to fetch current season anime' });
  }
});

router.get('/next-season', async (_req, res) => {
  try {
    const animes = await fetchNextSeasonAnime();
    res.json(animes);
  } catch (error) {
    console.error('Error fetching AniList data:', error);
    res.status(500).json({ error: 'Failed to fetch next season anime' });
  }
});

router.get('/top-animes', async (_req, res) => {
  try {
    const animes = await fetchTopAnime();
    res.json(animes);
  } catch (error) {
    console.error('Error fetching AniList data:', error);
    res.status(500).json({ error: 'Failed to fetch top anime' });
  }
});


export default router;