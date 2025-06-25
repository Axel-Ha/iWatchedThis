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
exports.fetchTrendingAnime = fetchTrendingAnime;
exports.fetchPopularAnime = fetchPopularAnime;
exports.fetchNextSeasonAnime = fetchNextSeasonAnime;
exports.fetchTopAnime = fetchTopAnime;
exports.fetchCurrentSeasonAnime = fetchCurrentSeasonAnime;
exports.fetchAnimeById = fetchAnimeById;
const node_fetch_1 = __importDefault(require("node-fetch"));
const date_1 = require("../utils/date");
const ANILIST_URL = 'https://graphql.anilist.co';
function fetchTrendingAnime() {
    return __awaiter(this, arguments, void 0, function* (perPage = 5) {
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
    });
}
function fetchPopularAnime() {
    return __awaiter(this, arguments, void 0, function* (perPage = 5) {
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
    });
}
function fetchNextSeasonAnime() {
    return __awaiter(this, arguments, void 0, function* (perPage = 5) {
        const { season, seasonYear } = (0, date_1.getCurrentAnimeSeason)();
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
    });
}
function fetchTopAnime() {
    return __awaiter(this, arguments, void 0, function* (perPage = 10) {
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
    });
}
function fetchCurrentSeasonAnime() {
    return __awaiter(this, arguments, void 0, function* (perPage = 5) {
        const { season, seasonYear } = (0, date_1.getCurrentAnimeSeason)();
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
    });
}
function fetchAnimeById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `
  query {
    Media(id: ${id}) {
        id
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
  `;
        return fetchFromAnilistItem(query);
    });
}
function fetchFromAnilistItem(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, node_fetch_1.default)(ANILIST_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ query }),
        });
        const data = (yield response.json());
        return data.data.Media;
    });
}
function fetchFromAnilist(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, node_fetch_1.default)(ANILIST_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ query }),
        });
        const data = (yield response.json());
        return data.data.Page.media;
    });
}
