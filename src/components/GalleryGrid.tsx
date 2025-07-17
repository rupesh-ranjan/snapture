import PhotoCard from "./PhotoCard";
import React from "react";

interface Photo {
    id: string;
    src: string;
    title?: string;
    category?: string;
}

interface GalleryGridProps {
    photos: Photo[];
}

export default function GalleryGrid({ photos }: GalleryGridProps) {
    return (
        <div className="py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo) => (
                    <PhotoCard
                        key={photo.id}
                        src={photo.src}
                        title={photo.title}
                        category={photo.category}
                    />
                ))}
            </div>
        </div>
    );
}
