'use client'

import { AnimesResponse } from "../../../../shared/definitions/anime"
import AnimeCard from "./AnimeCard";
import TopLeaderBordInfo from "./TopLeaderBordInfo";

type BannerAnimesProps = {
  animes: AnimesResponse[];
  titleSection: string;
  topAnime?: boolean;
}

const BannerAnimes = ({ animes, titleSection }: BannerAnimesProps) => {
  return (
    <>
      <div className="flex items-center justify-between w-full mb-3">
        <p className=" text-2xl font-bold text-soft-blue">{titleSection}</p>
        <button className=" text-sm font-bold text-soft-blue "> View All </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
          <AnimeCard  animes={animes} />
      </div>
    </>
  )
}



export default BannerAnimes;