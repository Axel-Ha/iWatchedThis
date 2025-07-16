'use client'

import { staffs } from "../../../../../shared/definitions/anime";

type StaffsProps = {
    staffs: staffs[]
}

const Staffs = ({ staffs }: StaffsProps) => {
    return (
        <div className="flex flex-col mt-10">
            <p className="text-soft-blue">Staffs</p>
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