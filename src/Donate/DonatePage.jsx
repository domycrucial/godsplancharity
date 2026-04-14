import AlertBar from "../LandingPage/AlertBar/Alert";
import Footer from "../LandingPage/Footer/Footer";
import Navbar from "../LandingPage/Navbar/Navbar";
import HeroSection from "./DonateHero/DonateHero";
import DonationSection from "./DonateSection/DonateSection";
import ContactSection from "./DonationContact/DonationContact";

const DonationPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="relative flex min-h-screen flex-col">
        <AlertBar />
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <DonationSection />
          <ContactSection />
        </main>
        
      </div>
      <Footer />
    </div>
  );
};

export default DonationPage;