"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const anilist_1 = require("../api/anilist"); // Adjust path if necessary
const router = express_1.default.Router();
// Route de test doit être tout en haut
router.get('/test', (req, res) => {
    res.send('✅ Route /api/animes/test fonctionne');
});
router.get('/trending', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animes = yield (0, anilist_1.fetchTrendingAnime)();
        res.json(animes);
    }
    catch (error) {
        console.error('Error fetching AniList data:', error);
        res.status(500).json({ error: 'Failed to fetch trending anime' });
    }
}));
router.get('/popular', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animes = yield (0, anilist_1.fetchPopularAnime)();
        res.json(animes);
    }
    catch (error) {
        console.error('Error fetching AniList data:', error);
        res.status(500).json({ error: 'Failed to fetch popular anime' });
    }
}));
router.get('/current-season', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animes = yield (0, anilist_1.fetchCurrentSeasonAnime)();
        res.json(animes);
    }
    catch (error) {
        console.error('Error fetching AniList data:', error);
        res.status(500).json({ error: 'Failed to fetch current season anime' });
    }
}));
router.get('/next-season', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animes = yield (0, anilist_1.fetchNextSeasonAnime)();
        res.json(animes);
    }
    catch (error) {
        console.error('Error fetching AniList data:', error);
        res.status(500).json({ error: 'Failed to fetch next season anime' });
    }
}));
router.get('/top-animes', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animes = yield (0, anilist_1.fetchTopAnime)();
        res.json(animes);
    }
    catch (error) {
        console.error('Error fetching AniList data:', error);
        res.status(500).json({ error: 'Failed to fetch top anime' });
    }
}));
// The dynamic route MUST be the very last one AND UNIQUE.
// This is the improved version with better error handling.
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Ensure req.params.id is correctly typed as string by Express's Request type
        const id = parseInt(req.params.id);
        // Validate if the ID is a valid number
        if (isNaN(id)) {
            console.warn(`Attempted to fetch anime with invalid ID: ${req.params.id}`);
            return res.status(400).json({ error: 'Invalid anime ID provided. Please provide a numeric ID.' });
        }
        const anime = yield (0, anilist_1.fetchAnimeById)(id);
        // Check if anime was found
        if (!anime) {
            console.warn(`Anime with ID ${id} not found.`);
            return res.status(404).json({ error: `Anime with ID ${id} not found.` });
        }
        res.json(anime);
    }
    catch (error) {
        // Log the full error for debugging purposes
        console.error('Error fetching AniList data for ID:', req.params.id, error);
        // Provide a generic error message to the client for security
        res.status(500).json({ error: 'Failed to retrieve anime details due to a server error.' });
    }
}));
exports.default = router;
