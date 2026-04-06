import { useEffect } from 'react'
import './App.css'
import HomePage from './LandingPage/HomePage';
import UpcomingEvent from './UpComingEventPage/UpcomingEventPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SupportTeam from './SupportTeam/SupportPage';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPage';
import CommunityFamily from './Community/CommunityPage';
import TermsConditions from './Terms&Condition/TermsPage';
import NotFound from './NotFound/NotFoundPage';
import Gallery from './Gallery/GalleryPage';
import DonationPage from './Donate/DonatePage';
import AboutPage from './AboutUs/AboutUs';
import EventAttendees from './admin/AdminPage';

function App() {
  useEffect(() => {
    // Check for dark mode preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/upcomingevent' element={<UpcomingEvent />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path='/support' element={<SupportTeam />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/community" element={<CommunityFamily />} />
        <Route path="/terms" element={<TermsConditions />} />
         <Route path="/ads4" element={<EventAttendees />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default App