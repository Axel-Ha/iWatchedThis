'use client'

import { AnimesResponse } from "@/lib/definitions/anime";
import { convertTime } from "@/hooks/date";
import Link from "next/link";

type AnimeCardProps = {
    animes: AnimesResponse[];
    topAnimes?: boolean;
}
const AnimeCard = ({ animes, topAnimes }: AnimeCardProps) => {
    return (
        <>
            {animes.map((anime: AnimesResponse) => {
                const { title, coverImage, genres, studios, averageScore, popularity, seasonYear, season, status, format, episodes, duration } = anime;
                if (!topAnimes) {
                    return (
                        <Link href={`/anime/${anime.id}`} key={title.romaji} className="flex flex-col w-52 justify-between items-center mb-5">
                            <img src={coverImage.large} alt={`Cover of ${title.romaji}`} className="rounded-lg object-cover w-52 h-72" />
                            <div className="main-text font-bold w-52 flex justify-center">
                                <p className="mt-3 w-full h-12 text-sm truncate" title={title.romaji} >
                                    {title.romaji}
                                </p>
                            </div>
                        </Link >
                    );
                } else {
                    return (
                        <Link href={`/anime/${anime.id}`} key={title.romaji} className="flex items-center w-full bg-banner rounded-lg px-4 py-2">
                            <img src={coverImage.large} alt={`Cover of ${title.romaji}`} className="rounded-lg w-18 h-24 object-cover" />
                            <div className="flex flex-row items-center justify-between w-full ml-4 gap-6">
                                <div className="flex flex-col min-w-[180px]">
                                    <p className="text-base font-bold" title={title.romaji}>{title.romaji}</p>
                                    <div className="flex flex-row gap-2 mt-2">
                                        {genres.map((genre: string) => (
                                            <span key={genre} className="text-sm rounded-full ">{genre}</span>
                                            // <span key={genre} className="text-sm bg-green-300/80 rounded-full px-3 py-1">{genre}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col items-center min-w-[80px]">
                                    <span className=" text-lg font-bold main-color">{averageScore}%</span>
                                    <span className="text-xs text-secondary-color ">{popularity} users</span>
                                </div>
                                <div className="flex flex-col items-center min-w-[80px]">
                                    <span className="text-sm main-color">{format}</span>
                                    {format === 'MOVIE' ? (
                                        <span className="text-xs text-secondary-color">{convertTime(duration)}</span>
                                    ) : (
                                        <span className="text-xs text-secondary-color">{episodes} episode{episodes > 1 ? 's' : ''}</span>
                                    )}
                                </div>
                                <div className="flex flex-col items-center min-w-[80px]">
                                    <span className="text-sm main-color">{season} {seasonYear}</span>
                                    <span className="text-xs text-secondary-color">{status}</span>
                                </div>
                                <div className="flex flex-col items-center min-w-[80px]">
                                    {studios.nodes.map((studio: { name: string }) => (
                                        <span key={studio.name} className="text-sm main-color">{studio.name}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    );
                }
            })}
        </>
    );
}

export default AnimeCard;