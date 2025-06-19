'use client'
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { AnimesResponse } from "@/lib/definitions/anime";
import { getCurrentSeasonAnimes, getPopularAnimes, getTrendingAnimes, getUpcomingAnimes, getTopAnimes } from "@/services/animesService";

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