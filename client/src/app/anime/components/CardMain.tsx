'use client'

import { AnimeResponse } from "../../../../../shared/definitions/anime";
import { Staffs } from "../../../../../shared/definitions/media";
import { useRouter } from "next/navigation";
import Card from "./Card";

type CardMainProps = {
    title: string
}

const CardMain = ({ title }: CardMainProps) => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <p className="text-soft-blue">{title}</p>
            <div className="flex flex-row ">
                <Card name="John Doe" image="" role="Actor" id={1} />
            </div>
        </div>
    )
}


export default CardMain;