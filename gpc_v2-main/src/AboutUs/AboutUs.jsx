import AlertBar from "../LandingPage/AlertBar/Alert";
import FloatingActionsButtons from "../LandingPage/FloatingActionButtons/FloatingActionButtons";
import Footer from "../LandingPage/Footer/Footer";
import Navbar from "../LandingPage/Navbar/Navbar";
import HeroSection from "./AboutHero/AboutHero";
import CoreValues from "./CoreValues/CoreValues";
import CTASection from "./CTA/CTA";
import MissionVision from "./MissionandVision/MissionandVision";
import HistorySection from "./OurHistory/OurHistory";
import TeamSection from "./TeamSection/TeamSection";


const AboutPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <AlertBar />
      <Navbar />
      <main>
        <HeroSection />
        <div className="bg-blue-50">
          <MissionVision />
        </div>
        
        <HistorySection />
        <CoreValues />
        {/* <TeamSection /> */}
        <CTASection />
      </main>
      <FloatingActionsButtons />
      <Footer />
    </div>
  );
};

export default AboutPage;