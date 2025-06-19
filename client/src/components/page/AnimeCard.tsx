'use client'

import { AnimesResponse } from "@/lib/definitions/anime";

type AnimeCardProps = {
    animes: AnimesResponse[];
    topAnimes?: boolean;
}

const AnimeCard = ({ animes, topAnimes }: AnimeCardProps) => {
    return (
        <>
            {animes.map((anime: AnimesResponse) => {
                const { title, coverImage, genres, averageScore, popularity, seasonYear, season, status, format } = anime;
                if (!topAnimes) {
                    return (
                        <div key={title.romaji} className="flex flex-col items-center bg-banner rounded-lg p-4 w-fit">
                            <img src={coverImage.large} alt={`Cover of ${title.romaji}`} className="rounded-lg w-32 h-40 object-cover mb-4" />
                            <p className="font-bold text-sm text-center truncate w-32" title={title.romaji}>
                                {title.romaji}
                            </p>
                        </div>
                    );
                } else {
                    return (
                        <div key={title.romaji} className="flex items-center gap-3 w-full bg-banner rounded-lg px-4 py-2">
                            <img src={coverImage.large} alt={`Cover of ${title.romaji}`} className="rounded-lg w-32 h-40 object-cover mb-4" />
                            <div className="main-text font-bold flex-1 flex flex-col justify-center">
                                <p className="w-full text-sm truncate" title={title.romaji}>
                                    {title.romaji}
                                </p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {genres.map((genre: string) => (
                                        <span key={genre} className="text-xs">{genre}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
}

export default AnimeCard;