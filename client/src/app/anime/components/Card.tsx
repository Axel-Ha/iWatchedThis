'use client'

type CardProps = {
    id: number
    name: string
    image: string
    role: string
    isSelected?: boolean
}


const Card = ({ name, image, role, id, isSelected = false }: CardProps) => {
    return (
        <div key={id} className={`flex flex-row mr-5 bg-banner-card ${isSelected ? 'w-full h-full' : 'w-[300px] h-[90px]'}`}>
            <img src={image} alt={name} className="object-cover rounded-l-sm w-[60px] h-full" />
            <div className="flex flex-col justify-center gap-10 ml-4">
                <span className="text-soft-blue text-sm">{name}</span>
                <span className="text-soft-blue text-xs">{role}</span>
            </div>
        </div>
    )
}

export default Card;