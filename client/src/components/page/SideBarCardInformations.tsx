'use client'

import { useEffect, useState } from 'react';
import { AnimeResponse } from '../../../../shared/definitions/anime';


type SideBarCardInformationsProps = {
    anime: AnimeResponse
}

export default function SideBarCardInformationsProps({ anime }: SideBarCardInformationsProps) {
    const { animeHeader, animeSideBar } = anime
    const { title } = animeHeader;
    const { startDate, status, studios, genres, averageScore, popularity, episodes, seasonYear, season, duration, format } = animeSideBar

    const animeStatus = status !== 'NOT_YET_RELEASED';

    return (
        <div>
            {JSON.stringify(animeSideBar)}
            <p>Status : {status} ({animeStatus ? 'Sorti' : 'À venir'})</p>
            <ul>
                <li>Episodes : {episodes}</li>
                <li>Score moyen : {averageScore}</li>
                <li>Popularité : {popularity}</li>
                <li>Durée : {duration} minutes</li>
                <li>Format : {format}</li>
                <li>Saison : {season} {seasonYear}</li>
                <li>Studios : {studios.nodes.map((studio: { name: string }) => (
                    <span key={studio.name} className="text-sm text-soft-blue">{studio.name}</span>
                ))}</li>
                <li>Genres : {genres?.join(', ')}</li>
            </ul>
        </div>
    );
}