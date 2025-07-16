'use client'

import { useEffect, useState } from 'react';
import { AnimeResponse } from '../../../../../shared/definitions/anime';


type SideBarCardInformationsProps = {
    anime: AnimeResponse
}

export default function SideBarCardInformationsProps({ anime }: SideBarCardInformationsProps) {
    const { animeHeader, animeSideBar } = anime
    const { title } = animeHeader;
    const { startDate, status, studios, source, genres, averageScore, popularity, favourites, episodes, seasonYear, season, duration, format, synonyms, tags } = animeSideBar

    const animeStatus = status !== 'NOT_YET_RELEASED';
    const durationStatus = duration !== null
    return (
        <div>
            <ul>
                <li>Format : {format}</li>
                <li>Episodes : {episodes}</li>
                <li>{durationStatus && (
                    <p>Durée : {duration} minutes</p>
                )}
                </li>
                <p>Status : {status} ({animeStatus ? 'Sorti' : 'À venir'})</p>
                {/* <li>Start date : {season} {seasonYear}</li> */}
                {/* <li>End Date : {season} {seasonYear}</li> */}
                <li>Season : {season} {seasonYear}</li>
                <li>Mean Score : {averageScore}</li>
                <li>Popularity : {popularity}</li>
                <li>Favorites : {favourites}</li>
                <li>Studios : {studios.nodes.map((studio: { name: string }) => (
                    <span key={studio.name} className="">{studio.name}</span>
                ))}</li>
                {/* <li>Producers : {studios.nodes.map((studio: { name: string }) => (
                    <span key={studio.name} className="text-sm text-soft-blue">{studio.name}</span>
                ))}</li> */}
                <li>Sources : {source}</li>
                <li>Genres : {genres?.join(', ')}</li>
                <li>Romaji : {title.romaji} </li>
                <li>English : {title.english} </li>
                <li>Native : {title.native} </li>
                <li>Synonyms : {synonyms.map((synonym: string) => (
                    <span key={synonym} className=" ">{synonym}</span>
                ))}</li>
            </ul>
            <p className="text-soft-blue mt-5">Tags</p>
            <div className="flex flex-col">
                {tags.map((tag: { name: string, isMediaSpoiler: boolean, rank: number }) => (
                    <span key={tag.name} className={`${tag.isMediaSpoiler ? 'text-soft-blue font-bold'  : ''}`}>{tag.name} {tag.isMediaSpoiler && 'Spoiler'} {tag.rank}</span>
                ))}
            </div>
        </div>
    );
}