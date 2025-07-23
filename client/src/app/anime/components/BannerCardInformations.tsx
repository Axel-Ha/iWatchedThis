'use client'

import { AnimeResponse } from '../../../../../shared/definitions/anime';

type BannerCardInformationsProps = {
    anime: AnimeResponse
}
const BannerCardInformations = ({ anime }: BannerCardInformationsProps) => {
    const { animeHeader } = anime;
    const { title, coverImage, description, bannerImage } = animeHeader;

    return (
        <div className="w-full  bg-banner bg-cover bg-center ">
            <div className="relative z-10 flex flex-row gap-8 max-w-[1320px] mx-auto py-8 items-start">
                <div className="flex flex-col items-center min-w-[220px]">
                    <img
                        src={coverImage.large}
                        alt={`Cover of ${title.romaji}`}
                        className="object-cover shadow-lg mt-[-10rem]"
                    />
                    <div className="flex flex-row gap-2 mt-4 w-full justify-center">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded font-semibold flex-1">Completed</button>
                        <button className="bg-pink-600 text-white px-4 py-2 rounded flex items-center justify-center"><span className="text-xl">❤</span></button>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-white mb-2">{title.romaji}</h1>
                    <p className="text-gray-300 mb-4">{description}</p>
                    <nav className="flex flex-row gap-8 ">
                        <a href="#" className="text-white hover:text-soft-blue">Overview</a>
                        <a href="#" className="text-white hover:text-soft-blue">Watch</a>
                        <a href="#" className="text-white hover:text-soft-blue">Characters</a>
                        <a href="#" className="text-white hover:text-soft-blue">Staff</a>
                        <a href="#" className="text-white hover:text-soft-blue">Reviews</a>
                        <a href="#" className="text-white hover:text-soft-blue">Stats</a>
                        <a href="#" className="text-white hover:text-soft-blue">Social</a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default BannerCardInformations;
