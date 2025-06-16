'use client'

import React, { useEffect, useState } from "react";

type Anime = {
  id: number;
  title: { english: string }
  coverImage: { large: string }
  episodes: number
}

export default function Home() {

  const [animes, setAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/anilist/trending')
      .then((res) => res.json())
      .then((data) => setAnimes(data))
      .catch((err) => console.error('Failed to load trending animes', err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <main className="">
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-4xl font-bold text-white">The next-generation anime, serie and movie platform</h1>
          <p className="text-xl home-page-text ">
            Track, share and discover your favorite animes, manga, series and movies with I Watched This.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold home-page-title">
            Discover your obsessions
          </h3>
          <p className="text-base home-page-text">
            What are your highest rated genres or most watched voice actors ? Follow your watching habits over time with in-depth statistics.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold home-page-title">
            Bring I Watch This anywhere
          </h3>
          <p className="text-base home-page-text">
            Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold home-page-title">
            Join the conversation
          </h3>
          <p className="text-base home-page-text">
            Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold home-page-title">
            Tweak it to your liking
          </h3>
          <p className="text-base home-page-text">
            Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.
          </p>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Join Now
          </button>
        </div>
        <p className="main-text text-2xl font-bold home-page-title mt-10">Trending Animes</p>
        <div className="flex flex-row items-center justify-center gap-5">
          {animes.map((anime) => (
            <div key={anime.id} className="flex flex-col w-52 h-[350px] justify-between">
              <img
                src={anime.coverImage.large}
                alt={anime.title.english}
                className="rounded-lg object-cover w-52 h-72"
              />
              <div className="main-text font-bold w-52 ">
                <p className="mt-2">{anime.title.english}</p>
                <p className="mt-2">{anime.episodes} Episodes in total</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
