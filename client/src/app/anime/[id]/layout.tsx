import BannerCardInformations from '../components/BannerCardInformations';
import SideBarCardInformations from '../components/SideBarCardInformations';
import { getAnimeById } from '@/services/animesService';
import React from 'react';
import { MediaProvider } from "@/components/contexts/MediaContext";

export default async function Layout({ children, params }: { children: React.ReactNode, params: { id: string } }) {
  const anime = await getAnimeById(params.id);
  const { animeHeader } = anime;
  const { bannerImage } = animeHeader;
  const mediaId = params.id;

  return (
    <div className="relative w-full min-h-screen">
      {bannerImage && (
        <div className="w-full md:h-90 overflow-hidden">
          <img src={bannerImage} className="w-full h-full object-cover opacity-60" alt="Banner" />
        </div>
      )}

      <div className="max-w-[1320px] mx-auto">
        <BannerCardInformations anime={anime} />
        <div>
          <div className="flex flex-row ">
            <aside className="w-1/4">
              <SideBarCardInformations anime={anime} />
            </aside>
            <main className="">
              <MediaProvider mediaId={mediaId}>
                {children}
              </MediaProvider>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
} 