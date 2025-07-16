import BannerCardInformations from "@/components/page/informationsPage/BannerCardInformations";
import Characters from "@/components/page/informationsPage/Characters";
import Relations from "@/components/page/informationsPage/Relations";
import SideBarCardInformationsProps from "@/components/page/informationsPage/SideBarCardInformations";
import Staffs from "@/components/page/informationsPage/Staffs";
import { getAnimeById } from "@/services/animesService";


export default async function Anime({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const anime = await getAnimeById(resolvedParams.id);
    const {animeHeader, relations, characters, staffs } = anime
    const { bannerImage } = animeHeader
    return (
        <>
            <div>
                <img src={bannerImage} className="" />
            </div>
            <div className="pl-50">
                <BannerCardInformations anime={anime} />
                <Relations relations={relations} />
                <SideBarCardInformationsProps anime={anime} />
                <Characters characters={characters} />
                <Staffs staffs={staffs} />
            </div>
        </>
    )
}