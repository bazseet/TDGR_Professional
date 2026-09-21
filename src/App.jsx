import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import MobileActionBar from './components/MobileActionBar';
import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import Curriculum from './pages/Curriculum';
import Corporate from './pages/Corporate';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Booking from './pages/Booking';
import Gallery from './pages/Gallery';
import FAQs from './pages/Faqs';
import Contact from './pages/Contact';
import LocalBusinessSchema from './components/LocalBusinessSchema';

export default function App() {
  return (
    <BrowserRouter>
      <LocalBusinessSchema />

      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-1 pb-14 lg:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/training" element={<Training />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
        <WhatsAppFloat />
        <MobileActionBar />
      </div>
    </BrowserRouter>
  );
}