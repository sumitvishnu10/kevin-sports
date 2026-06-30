import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";
import { Filter, ChevronDown } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Products() {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".page-header-text > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
    gsap.from(".filter-bar", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-cream min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-wine-red/5 to-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 page-header-text text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-wine-red font-['Cormorant_Garamond'] mb-4">
            All Products
          </h1>
          <p className="text-gray text-lg font-light max-w-xl mx-auto">
            Discover our complete lineup of premium athletic gear and accessories.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="border-y border-gray/10 bg-cream-dark/5 filter-bar">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <button className="flex items-center gap-2 text-sm font-medium text-text hover:text-wine-red transition-colors">
            <Filter size={16} /> Filters
          </button>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-sm text-gray">
              <span className="cursor-pointer hover:text-wine-red transition-colors text-wine-red font-medium">All</span>
              <span className="cursor-pointer hover:text-wine-red transition-colors">Running</span>
              <span className="cursor-pointer hover:text-wine-red transition-colors">Football</span>
              <span className="cursor-pointer hover:text-wine-red transition-colors">Accessories</span>
            </div>
            
            <button className="flex items-center gap-2 text-sm font-medium text-text border-l border-gray/20 pl-6 hover:text-wine-red transition-colors">
              Sort By <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="pb-16 bg-cream min-h-[50vh]">
        {/* We use FeaturedProducts as our main product grid for now */}
        <FeaturedProducts />
      </div>
      <Footer />
    </div>
  );
}