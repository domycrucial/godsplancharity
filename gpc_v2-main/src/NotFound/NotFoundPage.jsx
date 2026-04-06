import Footer from "../LandingPage/Footer/Footer";
import ErrorContent from "./ErrorContent/ErrorContent";

const NotFound = () => {
  return (
    <div className="bg-background-light font-display text-slate-900">
      <div className="bg-blue-100 relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-24 text-center">
            <ErrorContent />
          </main>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;