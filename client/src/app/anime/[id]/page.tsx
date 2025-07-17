import Relations from "@/app/anime/components/Relations";
import Characters from "@/app/anime/components/Characters";
import Staffs from "@/app/anime/components/Staffs";
import { getAnimeById } from "@/services/animesService";

export default async function OverviewPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const anime = await getAnimeById(resolvedParams.id);
    const { relations, characters, staffs } = anime;
    return (
        <>
            <div className="pl-50">
                <Relations relations={relations} />
                <Characters characters={characters} />
                <Staffs staffs={staffs} animeId={resolvedParams.id} />
            </div>
        </>
    );
}