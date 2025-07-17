import BannerCardInformations from '../components/BannerCardInformations';
import SideBarCardInformations from '../components/SideBarCardInformations';
import { getAnimeById } from '@/services/animesService';
import React from 'react';

export default async function Layout({ children, params }: { children: React.ReactNode, params: { id: string } }) {
  const anime = await getAnimeById(params.id);
  const { animeHeader } = anime;
  const { bannerImage } = animeHeader;

  return (
    <div className="relative w-full min-h-screen bg-dark">
      {/* Bannière en haut */}
      {bannerImage && (
        <div className="w-full h-80 md:h-96 overflow-hidden">
          <img src={bannerImage} className="w-full h-full object-cover opacity-60" alt="Banner" />
        </div>
      )}

      {/* Bloc principal SOUS la bannière, seule la cover dépasse */}
      <div className="relative z-10 mx-auto">
        <BannerCardInformations anime={anime} />
      </div>

      {/* Grille principale sous le bloc principal */}
      <div className="relative z-10 max-w-6xl mx-auto mt-8 flex flex-row gap-8">
        <aside className="w-1/4">
          <SideBarCardInformations anime={anime} />
        </aside>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
} 