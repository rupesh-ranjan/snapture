import Image from "next/image";
import React from "react";

interface PhotoCardProps {
    src: string;
    title?: string;
    category?: string;
}

export default function PhotoCard({ src, title, category }: PhotoCardProps) {
    console.log(src);
    return (
        <div className="rounded shadow-md hover:scale-105 transition-transform duration-300 flex flex-wrap">
            <Image
                width={100}
                height={150}
                src={src}
                alt={title || `Photo of ${category}`}
            />
        </div>
    );
}
