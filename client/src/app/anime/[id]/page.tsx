'use client'



export default function Anime({params} : {params: {id: string}}) {
    return (
        <div>
            <h1>Anime Page {params.id}</h1>
        </div>
    )
}