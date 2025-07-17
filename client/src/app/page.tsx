'use client'

import React from "react";
import BannerAnimes from "@/app/anime/components/BannerAnimes";
import { useAnimes } from "@/components/contexts/AnimesContext";
import TopLeaderBordInfo from "@/components/page/TopLeaderBordInfo";

export default function Home() {

  const { trendingAnimes, popularAnimes, upcomingAnimes, currentSeasonAnimes, topAnimes } = useAnimes();
  return (
    <div className="flex flex-col items-center justify-center">
      <main>
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-4xl font-bold text-white">The next-generation anime, serie and movie platform</h1>
          <p className="text-xl text-home ">
            Track, share and discover your favorite animes, manga, series and movies with I Watched This.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold text-home-title">
            Discover your obsessions
          </h3>
          <p className="text-base text-home">
            What are your highest rated genres or most watched voice actors ? Follow your watching habits over time with in-depth statistics.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold text-home-title">
            Bring I Watch This anywhere
          </h3>
          <p className="text-base text-home">
            Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold text-home-title">
            Join the conversation
          </h3>
          <p className="text-base text-home">
            Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold text-home-title">
            Tweak it to your liking
          </h3>
          <p className="text-base text-home">
            Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.
          </p>
        </div>

        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Join Now
          </button>
        </div>
        
        <BannerAnimes animes={trendingAnimes} titleSection="Trending Animes" />
        <BannerAnimes animes={currentSeasonAnimes} titleSection="Popular this Animes" />
        <BannerAnimes animes={upcomingAnimes} titleSection="Upcoming Next Season" />
        <BannerAnimes animes={popularAnimes} titleSection="All time popular animes" />
        <TopLeaderBordInfo animes={topAnimes} titleSection="Top 100 Animes" />
      </main>
    </div>
  );
}
