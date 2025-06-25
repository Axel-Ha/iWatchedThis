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
      <div className="flex items-center justify-between w-full mb-3">
        <p className=" text-2xl font-bold main-color">{titleSection}</p>
        <button className=" text-sm font-bold main-color "> View All </button>
      </div>
      {!topAnime ? (
      <div className="flex flex-row items-center justify-center gap-5">
          <AnimeCard  animes={animes} />
      </div>
      ) : (
        <div>
            <AnimeCard animes={animes} topAnimes={true} />
        </div>
      )}
    </>
  )
}



export default BannerAnimes;