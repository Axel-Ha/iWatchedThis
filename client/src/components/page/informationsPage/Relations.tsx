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
        <div className="flex flex-row">
            {formattedRelations.map(({ type, titleEnglish, titleRomaji, mediaFormat, coverImage }, idx) => (
                <div  key={idx}>
                    <div className="flex flex-col">
                        <img src={coverImage} alt={titleRomaji} className="w-[85px] h-[115px] object-cover" />
                        <span>{titleRomaji}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Relations;