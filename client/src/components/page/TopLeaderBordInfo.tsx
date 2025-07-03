'use client'

import { AnimesResponse } from "../../../../shared/definitions/anime"
import { convertTime } from "@/hooks/date";
import Link from "next/link";

type TopLeaderBordInfoProps = {
    animes: AnimesResponse[];
    titleSection : string;
}

const TopLeaderBordInfo = ({ animes, titleSection }: TopLeaderBordInfoProps) => {
    return (
        <div>
            <div className="flex items-center justify-between w-full mb-3">
                <p className=" text-2xl font-bold text-soft-blue">{titleSection}</p>
                <button className=" text-sm font-bold text-soft-blue "> View All </button>
            </div>
            {animes.map((anime: AnimesResponse) => {
                const { title, coverImage, genres, studios, averageScore, popularity, seasonYear, season, status, format, episodes, duration } = anime;
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
                                <span className=" text-lg font-bold text-soft-blue">{averageScore}%</span>
                                <span className="text-xs text-secondary ">{popularity} users</span>
                            </div>
                            <div className="flex flex-col items-center min-w-[80px]">
                                <span className="text-sm text-soft-blue">{format}</span>
                                {format === 'MOVIE' ? (
                                    <span className="text-xs text-secondary">{convertTime(duration)}</span>
                                ) : (
                                    <span className="text-xs text-secondary">{episodes} episode{episodes > 1 ? 's' : ''}</span>
                                )}
                            </div>
                            <div className="flex flex-col items-center min-w-[80px]">
                                <span className="text-sm text-soft-blue">{season} {seasonYear}</span>
                                <span className="text-xs text-secondary">{status}</span>
                            </div>
                            <div className="flex flex-col items-center min-w-[80px]">
                                {studios.nodes.map((studio: { name: string }) => (
                                    <span key={studio.name} className="text-sm text-soft-blue">{studio.name}</span>
                                ))}
                            </div>
                        </div>
                    </Link>
                )
            })
            }
        </div>
    );
}

export default TopLeaderBordInfo;