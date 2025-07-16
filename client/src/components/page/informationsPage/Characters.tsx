'use client'

import { charactersAndVoiceActors } from '../../../../../shared/definitions/anime';

type CharactersProps = {
    characters: charactersAndVoiceActors[]
}

export default function Characters({ characters }: CharactersProps) {
    return (
        <div className="flex flex-col mt-10">
            <p className="text-soft-blue">Characters</p>
            <div className="flex flex-row flex-wrap">
                {characters.map((characterObj, idx) => (
                    <div key={idx} className="flex flex-col mr-5 mb-5 items-center">
                        <img src={characterObj.character.image.medium} alt={characterObj.character.name.full} className="w-[85px] h-[115px] object-cover" />
                        <span className="text-soft-blue">{characterObj.character.name.full}</span>
                        <span className="text-soft-blue">{characterObj.role}</span>
                        <div className="flex flex-row items-center mt-2">
                            {characterObj.voiceActors.map((va, vaIdx) => (
                                <div key={vaIdx} className="flex flex-col items-center mx-1">
                                    <img src={va.image.medium} alt={va.name.full} className=" object-cover" />
                                    <span className="text-xs text-gray-400">{va.name.full}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}