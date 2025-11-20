"use client";

import Image from "next/image";

export default function HotelBlock({ id, name, capacity }) {
    const imageLoader = ({src}) => {
        return `./hotels/${src}.webp`;
    }

    return (
        <div>
            <h2>{name}</h2>
            <h2>{capacity}</h2>
            <Image src={id} width={300} height={300} loader={imageLoader} alt="hotel!!!"></Image>
        </div>
    )
}