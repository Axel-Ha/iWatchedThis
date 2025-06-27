import BannerCardInformations from "@/components/page/BannerCardInformations";
import SideBarCardInformationsProps from "@/components/page/SideBarCardInformations";
import { getAnimeById } from "@/services/animesService";


export default async function Anime({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const anime = await getAnimeById(resolvedParams.id);

    return (
        <>
            <div>
                <img src={anime.bannerImage} alt={`Cover of ${anime.title.romaji}`} className="" />
            </div>
            <div className="pl-50">
                <BannerCardInformations anime={anime} />
                <SideBarCardInformationsProps anime={anime} />
            </div>
        </>
    )
}