import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TurfHero from "../components/turf/TurfHero";
import TurfCategories from "../components/turf/TurfCategories";
import FeaturedTurfs from "../components/turf/FeaturedTurfs";
import TurfFeatures from "../components/turf/TurfFeatures";
import BookingSteps from "../components/turf/BookingSteps";
import MembershipBanner from "../components/turf/MembershipBanner";
import TurfTestimonials from "../components/turf/TurfTestimonials";
import { useEffect } from "react";

export default function Turf() {
  // Ensure we start at the top of the page when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      {/* 
        The main content wrappers start here. We use padding-top to account for the fixed navbar.
        Each component manages its own internal padding/spacing for consistent rhythm.
      */}
      <main className="pt-24 pb-16">
        <TurfHero />
        <TurfCategories />
        <FeaturedTurfs />
        <BookingSteps />
        <TurfFeatures />
        <MembershipBanner />
        <TurfTestimonials />
      </main>

      <Footer />
    </div>
  );
}
