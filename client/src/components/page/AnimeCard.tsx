'use client'

import { AnimesResponse } from '../../../../shared/definitions/anime';
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
                const { title, coverImage } = anime;
                return (
                    <Link href={`/anime/${anime.id}`} key={title.romaji} className="flex flex-col w-52 justify-between items-center mb-5">
                        <img src={coverImage.large} alt={`Cover of ${title.romaji}`} className="rounded-lg object-cover w-52 h-72" />
                        <div className="text-main font-bold w-52 flex justify-center">
                            <p className="mt-3 w-full h-12 text-sm truncate" title={title.romaji} >
                                {title.romaji}
                            </p>
                        </div>
                    </Link >
                );
            })}
        </>
    );
}

export default AnimeCard;