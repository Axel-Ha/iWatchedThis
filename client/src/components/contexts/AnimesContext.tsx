'use client'
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { AnimesResponse } from "../../../../shared/definitions/anime";
import { getAnimeById, getCurrentSeasonAnimes, getPopularAnimes, getTrendingAnimes, getUpcomingAnimes, getTopAnimes } from "@/services/animesService";
import { AnimeResponse } from "../../../../shared/definitions/anime";

interface AnimesContextType {
  isLoading: boolean;
  error: string | null;
  fetchAnimes: () => Promise<void>;
  trendingAnimes: AnimesResponse[];
  popularAnimes: AnimesResponse[];
  upcomingAnimes: AnimesResponse[];
  currentSeasonAnimes: AnimesResponse[];
  topAnimes: AnimesResponse[];
  addAnime: (anime: AnimesResponse) => Promise<void>;
  removeAnime: (id: string) => Promise<void>;
  updateAnime: (anime: AnimesResponse) => Promise<void>;
  getAnimeById: (id: string) => Promise<AnimeResponse>;
}

const AnimesContext = createContext<AnimesContextType | undefined>(undefined);

export function AnimesProvider({ children }: { children: ReactNode }) {
  const [trendingAnimes, setTrendingAnimes] = useState<AnimesResponse[]>([]);
  const [popularAnimes, setPopularAnimes] = useState<AnimesResponse[]>([]);
  const [upcomingAnimes, setUpcomingAnimes] = useState<AnimesResponse[]>([]);
  const [currentSeasonAnimes, setCurrentSeasonAnimes] = useState<AnimesResponse[]>([]);
  const [topAnimes, setTopAnimes] = useState<AnimesResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAnimes = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [trending, popular, upcoming, current, top] = await Promise.all([
        getTrendingAnimes(),
        getPopularAnimes(),
        getUpcomingAnimes(),
        getCurrentSeasonAnimes(),
        getTopAnimes(),
      ]);
      setTrendingAnimes(trending);
      setPopularAnimes(popular);
      setUpcomingAnimes(upcoming);
      setCurrentSeasonAnimes(current);
      setTopAnimes(top);
    } catch (err) {
      setError("Erreur lors du chargement des animes.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addAnime = useCallback(async (anime: AnimesResponse) => {
    setIsLoading(true);
    setError(null);
    try {
      // await addAnimeService(anime); // Décommente si tu as cette fonction
      // await fetchAnimes();
    } catch (err) {
      setError("Erreur lors de l'ajout de l'anime.");
    } finally {
      setIsLoading(false);
    }
  }, [/*fetchAnimes*/]);

  const removeAnime = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // await removeAnimeService(id); // Décommente si tu as cette fonction
      // await fetchAnimes();
    } catch (err) {
      setError("Erreur lors de la suppression de l'anime.");
    } finally {
      setIsLoading(false);
    }
  }, [/*fetchAnimes*/]);

  const updateAnime = useCallback(async (anime: AnimesResponse) => {
    setIsLoading(true);
    setError(null);
    try {
      // await updateAnimeService(anime); // Décommente si tu as cette fonction
      // await fetchAnimes();
    } catch (err) {
      setError("Erreur lors de la mise à jour de l'anime.");
    } finally {
      setIsLoading(false);
    }
  }, [/*fetchAnimes*/]);

  const getAnimeByIdFromContext = useCallback(async (id: string): Promise<AnimeResponse> =>{
    setIsLoading(true);
    setError(null);
    try {
      const anime = await getAnimeById(id);
      return anime;
    } catch (err) {
      setError("Erreur lors du chargement de l'anime.");
      return {} as AnimeResponse;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAnimes();
  }, [fetchAnimes]);

  return (
    <AnimesContext.Provider
      value={{
        trendingAnimes,
        popularAnimes,
        upcomingAnimes,
        currentSeasonAnimes,
        topAnimes,
        isLoading,
        error,
        fetchAnimes,
        addAnime,
        removeAnime,
        updateAnime,
        getAnimeById: getAnimeByIdFromContext,
      }}>
      {children}
    </AnimesContext.Provider>
  );
}

export function useAnimes() {
  const context = useContext(AnimesContext);
  if (!context) throw new Error("useAnimes must be used within a AnimesProvider");
  return context;
}