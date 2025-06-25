import express from 'express';
import { fetchTrendingAnime, fetchPopularAnime, fetchNextSeasonAnime, fetchCurrentSeasonAnime, fetchTopAnime, fetchAnimeById } from '../api/anilist'; // Adjust path if necessary
const router = express.Router();

// Route de test doit être tout en haut
router.get('/test', (req, res) => {
  res.send('✅ Route /api/animes/test fonctionne');
});

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

// The dynamic route MUST be the very last one AND UNIQUE.
// This is the improved version with better error handling.
router.get('/:id', async (req, res) => {
  try {
    // Ensure req.params.id is correctly typed as string by Express's Request type
    const id = parseInt(req.params.id);

    // Validate if the ID is a valid number
    if (isNaN(id)) {
      console.warn(`Attempted to fetch anime with invalid ID: ${req.params.id}`);
      return res.status(400).json({ error: 'Invalid anime ID provided. Please provide a numeric ID.' });
    }

    const anime = await fetchAnimeById(id);

    // Check if anime was found
    if (!anime) {
      console.warn(`Anime with ID ${id} not found.`);
      return res.status(404).json({ error: `Anime with ID ${id} not found.` });
    }

    res.json(anime);
  } catch (error) {
    // Log the full error for debugging purposes
    console.error('Error fetching AniList data for ID:', req.params.id, error);
    // Provide a generic error message to the client for security
    res.status(500).json({ error: 'Failed to retrieve anime details due to a server error.' });
  }
});

export default router;
