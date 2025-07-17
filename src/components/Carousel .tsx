import Image from "next/image";
import { GalleryGridProps } from "../types/photo";
import { useEffect, useState } from "react";

export default function Carousel({ photos }: GalleryGridProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % photos.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [photos.length]);

    function handlePrevious() {
        if (currentIndex === 0) setCurrentIndex(photos.length - 1);
        else setCurrentIndex((cur) => cur - 1);
    }

    function handleNext() {
        setCurrentIndex((cur) => (cur + 1) % photos.length);
    }

    return (
        <div className="relative overflow-hidden max-w-3xl">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {photos.map((photo) => (
                    <div key={photo.id} className="flex-shrink-0 w-full">
                        <Image
                            src={photo.src}
                            width={600}
                            height={400}
                            alt={photo.title || "Photo"}
                            className="mt-5 w-200 h-100 hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-4 bg-gray-800 text-white px-3 py-1 rounded"
                onClick={handlePrevious}
            >
                Previous
            </button>
            <button
                className="absolute top-1/2 right-4 bg-gray-800 text-white px-3 py-1 rounded"
                onClick={handleNext}
            >
                Next
            </button>
        </div>
    );
}
