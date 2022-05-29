import React, {useEffect, useState} from "react";
import {NewAdEntity} from "types";

interface Props {
    id: string;
}


export const SingleAd = (props: Props) => {
    const [ad, setAd] = useState<NewAdEntity | null>(null)
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/${props.id}`);
            const data = await res.json();
            setAd(data)
        })()
    }, [])

    if (ad === null) {
        return <p>Loading...</p>
    }
    return (
        <>
            <h2>{ad.name}</h2>
            <p>{ad.description}</p>
            {ad.price ? <p>Price: {ad.price}</p> : null}
            <a target='_blank' rel="noreferrer" href={ad.url}>Website</a>
        </>
    )
}
