import AlertBar from "../LandingPage/AlertBar/Alert";
import FloatingActionsButtons from "../LandingPage/FloatingActionButtons/FloatingActionButtons";
import Footer from "../LandingPage/Footer/Footer";
import Navbar from "../LandingPage/Navbar/Navbar";
import HeroSection from "./CommunityHero/CommunityHero";
import CommunityJoin from "./CommunityJoin/CommunityJoin";
import StatsSection from "./StatsSection/StatsSection";
import WaysToBelong from "./WayToBelong/WayToBelong";


const CommunityFamily = () => {
  return (
    <div className="bg-background-light font-display text-slate-900 transition-colors duration-300">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <AlertBar />
          <Navbar />
          <main className="flex-1">
            <div className="max-w-[1200px] mx-auto px-6 py-8">
              <HeroSection />
              <StatsSection />
              <WaysToBelong />
              <CommunityJoin />
            </div>
          </main>
          <FloatingActionsButtons />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityFamily;