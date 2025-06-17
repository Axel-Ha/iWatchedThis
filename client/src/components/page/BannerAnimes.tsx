'use client'

import { AnimesResponse } from "@/lib/definitions/anime";
import AnimeCard from "./AnimeCard";

type BannerAnimesProps = {
  animes: AnimesResponse[];
}

const BannerAnimes = ({ animes }: BannerAnimesProps) => {
  return (
    <div className="flex flex-row items-center justify-center gap-5">
      {animes.map((anime: AnimesResponse) => (
        <AnimeCard key={anime.id} title={anime.title.romaji} coverImage={anime.coverImage.large} />
      ))}
    </div>
  )
}



export default BannerAnimes;