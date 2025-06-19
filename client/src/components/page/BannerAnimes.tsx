'use client'

import { AnimesResponse } from "@/lib/definitions/anime";
import AnimeCard from "./AnimeCard";

type BannerAnimesProps = {
  animes: AnimesResponse[];
  titleSection: string;
  topAnime?: boolean;
}

const BannerAnimes = ({ animes, titleSection, topAnime }: BannerAnimesProps) => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <p className="main-text text-2xl font-bold home-page-title mt-10">{titleSection}</p>
        <button className="main-text text-sm font-bold home-page-title mt-10"> View All </button>
      </div>
      {!topAnime ? (
      <div className="flex flex-row items-center justify-center gap-5">
          <AnimeCard  animes={animes} />
      </div>
      ) : (
        <div>
            <AnimeCard  animes={animes} topAnimes={true} />
        </div>
      )}
    </>
  )
}



export default BannerAnimes;