import BannerCardInformations from "@/components/page/informationsPage/BannerCardInformations";
import Relations from "@/components/page/informationsPage/Relations";
import SideBarCardInformationsProps from "@/components/page/informationsPage/SideBarCardInformations";
import { getAnimeById } from "@/services/animesService";


export default async function Anime({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const anime = await getAnimeById(resolvedParams.id);
    const {animeHeader, relations } = anime
    const { title, bannerImage } = animeHeader
    return (
        <>
            <div>
                <img src={bannerImage} className="" />
            </div>
            <div className="pl-50">
                <BannerCardInformations anime={anime} />
                <Relations relations={relations} />
                <SideBarCardInformationsProps anime={anime} />
            </div>
        </>
    )
}