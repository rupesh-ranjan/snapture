"use client";

import React, { useState } from "react";
import GalleryGrid from "./GalleryGrid";
import MenuSidebar from "./MenuSidebar";
import { photos } from "../data/photos";
import Category from "./Category";
import Carousel from "./Carousel ";

export default function Main() {
    const [filteredPhotos, setFIlteredPhotos] = useState(photos);
    const categories = [
        "All",
        ...new Set(photos.map((photo) => photo.category)),
    ];
    function handleClick(event: React.MouseEvent<HTMLUListElement>) {
        const target = event.target as HTMLElement;
        if (target.tagName === "LI") {
            console.log(target.dataset.category);
            setFIlteredPhotos(
                target.dataset.category === "all"
                    ? photos
                    : photos.filter(
                          (photo) =>
                              photo.category.toLowerCase() ===
                              target.dataset.category
                      )
            );
        }
    }
    return (
        <div className="flex min-w-7xl">
            <MenuSidebar />
            <main className="flex-1 flex flex-col items-center min-h-screen m-2">
                <Category type={categories} onClick={handleClick} />
                <Carousel photos={photos} />
                <GalleryGrid photos={filteredPhotos} />
            </main>
        </div>
    );
}
