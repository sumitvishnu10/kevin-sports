import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CollectionsComponent from "../components/Collections";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Collections() {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".page-header-text > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-cream min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-wine-red/5 to-cream relative overflow-hidden border-b border-wine-red/5">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-wine-red/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-8 page-header-text">
          <h1 className="text-5xl md:text-6xl font-semibold text-wine-red font-['Cormorant_Garamond'] mb-4">
            Curated Collections
          </h1>
          <p className="text-gray text-lg font-light max-w-xl">
            Explore our expertly categorized gear. Find exactly what moves you, built with premium materials for peak performance.
          </p>
        </div>
      </div>

      <div className="pb-16 bg-cream min-h-[50vh]">
        <CollectionsComponent />
      </div>
      <Footer />
    </div>
  );
}