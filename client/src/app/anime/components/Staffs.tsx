'use client'

import Link from "next/link";
import type { Staffs } from "../../../../../shared/definitions/media";
import { useRouter } from "next/navigation";
import Card from "./Card";

type StaffsProps = {
    staffsMedia: Staffs[]
    animeId: string
}

const Staffs = ({ staffsMedia, animeId }: StaffsProps) => {
    const router = useRouter();
    const staffs = Array.isArray(staffsMedia) ? staffsMedia : [];

    return (
        <div className="flex flex-col mt-10">
            <p onClick={() => router.push(`/anime/${animeId}/staffs`)} className="text-soft-blue">Staffs</p>
            <div className="flex flex-row flex-wrap">
                {staffs.length > 0 ? (
                    staffs.map((staff, idx) => (
                        <Card
                            name={staff.staff.name.full}
                            image={staff.staff.image.medium}
                            id={idx}
                            role={staff.role}
                            
                        />
                    ))
                ) : (
                    <p className="text-soft-blue">Aucun staff trouvé.</p>
                )}
            </div>
        </div>
    );
};

export default Staffs;