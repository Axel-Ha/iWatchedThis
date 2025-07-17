'use client'

import Link from "next/link";
import { staffs } from "../../../../../shared/definitions/anime";
import { useRouter } from "next/navigation";

type StaffsProps = {
    staffs: staffs[]
    animeId: string
}

const Staffs = ({ staffs, animeId }: StaffsProps) => {
    const router = useRouter()
    return (
        <div className="flex flex-col mt-10">
            <p onClick={() => router.push(`/anime/${animeId}/staffs`)} className="text-soft-blue">Staffs</p>
            <div className="flex flex-row">
                {staffs.map((staff, idx) => (
                    <div key={idx} className="flex flex-col mr-5">
                        <img src={staff.staff.image.medium} alt={staff.staff.name.full} className="w-[85px] h-[115px] object-cover" />
                        <span className="text-soft-blue">{staff.staff.name.full}</span>
                        <span className="text-soft-blue">{staff.role}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Staffs;