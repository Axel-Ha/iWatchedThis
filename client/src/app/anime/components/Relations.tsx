'use client'

import { AnimeRelations } from "../../../../../shared/definitions/anime"

type RelationsProps = {
    relations: AnimeRelations[];
}


const Relations = ({ relations }: RelationsProps) => {
    const formattedRelations = relations.map(relation => ({
        type: relation.relationType,
        titleRomaji: relation.node.title.romaji,
        titleEnglish: relation.node.title.english,
        mediaFormat: relation.node.format,
        coverImage: relation.coverImage.medium
    }));

    return (
        <div className="flex flex-col">
            <p className="text-soft-blue">Relations</p>
            <div className="flex flex-row mt-5 mb-5">
                {formattedRelations.map(({ type, titleEnglish, titleRomaji, mediaFormat, coverImage }, idx) => (
                    <div className="flex flex-col mr-5" key={idx}>
                        <img src={coverImage} alt={titleRomaji} className="w-[60px] h-[80px] object-cover" />
                        <span className="text-soft-blue">{titleRomaji}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Relations;