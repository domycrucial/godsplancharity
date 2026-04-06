import About from "./AboutUs/About";
import AlertBar from "./AlertBar/Alert";
import Events from "./Events/EventsData";
import FAQ from "./FAQ/FAQ";
import FloatingActionsButtons from "./FloatingActionButtons/FloatingActionButtons";
import Footer from "./Footer/Footer";
import GalleryHero from "./Gallery/Gallery";
import Hero from "./Hero/Hero";
import JoinCommunity from "./JoinCommunity/JoinCommunity";
import Navbar from "./Navbar/Navbar";
import NeedCard from "./Needs/NeedsCard";
import NeedsData from "./Needs/NeedsData";
import SuccessStories from "./Stories/Story";
import Testimonials from "./Testimonial/Testimonial";


export default function HomePage(){
    return(
        <>
            <AlertBar />
            <Navbar />
            <Hero />
            <About />
            <Events />
            <NeedsData />
            {/* <SuccessStories /> */}
            <GalleryHero />
            <Testimonials />
            <FAQ />
            <JoinCommunity />
            <Footer />
            <FloatingActionsButtons />
        </>
    );
}