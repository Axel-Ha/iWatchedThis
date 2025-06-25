import { getAnimeById } from "@/services/animesService";


export default async function Anime({params} : {params: Promise<{id: string}>}) {
    const resolvedParams = await params;
    const anime = await getAnimeById(resolvedParams.id);

    return (
        <div>
            <h1>Anime Page {JSON.stringify(anime)}</h1>
        </div>
    )
}