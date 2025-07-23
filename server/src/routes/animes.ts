import express from 'express';
import { fetchTrendingAnime, fetchPopularAnime, fetchNextSeasonAnime, fetchCurrentSeasonAnime, fetchTopAnime, fetchAnimeById, fetchStaffsByMediaId } from '../api/anilist'; // Adjust path if necessary
import { mapAniListToAnimeResponse } from '../mappers/animeMapper';
import { mapAniListStaffs } from '../mappers/mediaMapper';
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

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      console.warn(`Attempted to fetch anime with invalid ID: ${req.params.id}`);
      return res.status(400).json({ error: 'Invalid anime ID provided. Please provide a numeric ID.' });
    }

    const anime = await fetchAnimeById(id);

    if (!anime) {
      console.warn(`Anime with ID ${id} not found.`);
      return res.status(404).json({ error: `Anime with ID ${id} not found.` });
    }

    const response = mapAniListToAnimeResponse(anime);

    res.json(response);
  } catch (error) {
    console.error('Error fetching AniList data for ID:', req.params.id, error);
    res.status(500).json({ error: 'Failed to retrieve anime details due to a server error.' });
  }
});

router.get('/:id/staffs', async (req, res) => {
  const id = parseInt(req.params.id);
  const page = parseInt(req.query.page as string) || 1;
  const anilistMedia = await fetchStaffsByMediaId(id, page);
  const staffs = anilistMedia && anilistMedia.staff ? mapAniListStaffs(anilistMedia.staff) : [];
  res.json(staffs);
});

export default router;
