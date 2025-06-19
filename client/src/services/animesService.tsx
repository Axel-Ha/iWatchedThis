'use server'

import { AnimesResponse } from "@/lib/definitions/anime";

const BASE_URL = 'http://localhost:5000/api/animes'

export async function getTrendingAnimes() : Promise<AnimesResponse[]> {
    try {
        const response = await fetch(`${BASE_URL}/trending`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to load trending animes', error);
        return [];
    }
}

export async function getPopularAnimes() : Promise<AnimesResponse[]> {
    try {
        const response = await fetch(`${BASE_URL}/popular`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to load all time popular animes', error);
        return [];
    }
}

export async function getCurrentSeasonAnimes() : Promise<AnimesResponse[]> {
    try {
        const response = await fetch(`${BASE_URL}/current-season`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to load current animes', error);
        return [];
    }
}

export async function getUpcomingAnimes() : Promise<AnimesResponse[]> {
    try {
        const response = await fetch(`${BASE_URL}/next-season`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to load upcoming animes', error);
        return [];
    }
}

export async function getTopAnimes() : Promise<AnimesResponse[]> {
    try {
        const response = await fetch(`${BASE_URL}/top-animes`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to load upcoming animes', error);
        return [];
    }
}