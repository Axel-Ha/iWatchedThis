'use client'

import { AnimesResponse } from "@/lib/definitions/anime"


type BannerCardInformationsProps = {
    anime: AnimesResponse
}
export default function BannerCardInformations({ anime }: BannerCardInformationsProps) {
    const { title, coverImage, description } = anime;

    return (
        <div className="bg-banner">
            <div className="flex flex-row align-start max-w-3/4">
                <div className="flex flex-col align-start mr-6">
                    <img src={coverImage.large} alt={`Cover of ${title.romaji}`} className="img-banner-card" />
                    <button>Completed</button>
                </div>
                <div className="flex flex-col gap-5 ">
                    <span className="text-soft-blue"> {title.romaji} </span>
                    <span className="text-subtle hover:text-soft-blue">{description}</span>
                    <div className="flex flex-row justify-between">
                        <button>Overview</button>
                        <button>Characters</button>
                        <button>Staff</button>
                        <button>Reviews</button>
                        <button>Stats</button>
                        <button>Social</button>
                    </div>
                </div>
            </div>
        </div>
    )

}