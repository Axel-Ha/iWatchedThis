'use client'
import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";
import { Staffs } from "../../../../shared/definitions/media";
import { getStaffsByMediaId } from "@/services/mediaService";

interface MediaContextType {
  isLoading: boolean;
  error: string | null;
  staffs: Staffs[];
  fetchStaffs: (mediaId: string) => Promise<void>;
  getStaffByMediaId: (mediaId: string) => Promise<Staffs[]>;
  
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export function MediaProvider({ children, mediaId }: { children: ReactNode, mediaId: string }) {
  const [staffsList, setStaffsList] = useState<Staffs[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStaffs = useCallback(async (mediaId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const [staffsMedia] = await Promise.all([
        getStaffsByMediaId(mediaId)
    ]);
      setStaffsList(staffsMedia);
    } catch (err) {
      setError("Erreur lors du chargement des staffs.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getStaffsByMediaIdFromContext = useCallback(async (mediaId: string) : Promise<Staffs[]> => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getStaffsByMediaId(mediaId);
      return data;
    } catch (err) {
      setError("Erreur lors du chargement des staffs.");
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (mediaId) {
      fetchStaffs(mediaId);
    }
  }, [fetchStaffs, mediaId]);

  return (
    <MediaContext.Provider 
    value={{ 
        isLoading,
        error,
        staffs: staffsList,
        fetchStaffs,
        getStaffByMediaId: getStaffsByMediaIdFromContext,
      }}>
      {children}
    </MediaContext.Provider>
  );
}

export function useMedia() {
  const context = useContext(MediaContext);
  if (!context) throw new Error("useMedia must be used within a MediaProvider");
  return context;
}
