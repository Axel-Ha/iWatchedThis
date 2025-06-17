'use client'

type AnimeCardProps = {
    title: string;
    coverImage: string;

}
const AnimeCard = ({ title, coverImage }: AnimeCardProps) => {
    return (
        <div className="flex flex-col w-52 justify-between items-center">
            <img src={coverImage} alt={`Cover of ${title}`} className="rounded-lg object-cover w-52 h-72" />
            <div className="main-text font-bold w-52 flex justify-center">
                <p className="mt-3 w-full h-12 text-sm truncate " title={title} >
                    {title}
                </p>
            </div>
        </div>
    )
}

export default AnimeCard;