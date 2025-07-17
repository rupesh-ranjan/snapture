export interface Photo {
    id: string;
    src: string;
    title?: string;
    category?: string;
}

export interface GalleryGridProps {
    photos: Photo[];
}
