import AlertBar from "../LandingPage/AlertBar/Alert";
import FloatingActionsButtons from "../LandingPage/FloatingActionButtons/FloatingActionButtons";
import Footer from "../LandingPage/Footer/Footer";
import Navbar from "../LandingPage/Navbar/Navbar";
import PrivacyContent from "./PrivacyContent/PrivacyContent";
import PrivacyHero from "./PrivacyHero/PrivacyHero";

const PrivacyPolicy = () => {
  return (
    <div className="bg-background-light font-display text-slate-900 transition-colors duration-300">
      <div className="relative flex min-h-screen flex-col">
        <AlertBar />
        <Navbar />
        <main className="flex-grow">
          <PrivacyHero />
          <PrivacyContent />
          <FloatingActionsButtons />
        </main>
        
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;