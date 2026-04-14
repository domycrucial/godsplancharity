import AlertBar from "../LandingPage/AlertBar/Alert";
import FloatingActionsButtons from "../LandingPage/FloatingActionButtons/FloatingActionButtons";
import Footer from "../LandingPage/Footer/Footer";
import Navbar from "../LandingPage/Navbar/Navbar";
import GalleryHero from "./GalleryHero/GalleryHero";
import GalleryMasonry from "./GallerySection/GalleryMasonry";

const Gallery = () => {
  return (
    <div className="bg-background-light font-display text-slate-900">
      <div className="relative flex min-h-screen flex-col">
        <AlertBar />
        <Navbar />
        <main className="flex-grow">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <GalleryHero />
            <GalleryMasonry />
          </section>
        </main>
        <FloatingActionsButtons />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;