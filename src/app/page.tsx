import GalleryGrid from "../components/GalleryGrid";
import MenuSidebar from "../components/MenuSidebar";
import { photos } from "../data/photos";
export default function Home() {
    return (
        <div className="flex min-w-7xl">
            <MenuSidebar />
            <main className="flex-1">
                {/* <button className="contained">Hello world</button> */}
                <GalleryGrid photos={photos} />
            </main>
        </div>
    );
}
