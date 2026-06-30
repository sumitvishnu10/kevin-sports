import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import turfFootball from "../assets/indoor_turf.png";

export default function TurfPromo() {
  return (
    <section className="py-20 bg-cream-dark/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row items-center relative">
          
          {/* Left Text Content */}
          <div className="p-12 md:p-16 flex-1 z-10 relative">
            <div className="inline-flex items-center gap-2 border border-wine-red/20 rounded-full px-3 py-1 mb-6 bg-cream/50">
              <span className="text-wine-red text-xs">⚽</span>
              <span className="text-[10px] font-bold tracking-widest text-wine-dark uppercase">New Feature</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-wine-dark mb-6 leading-tight">
              Premium Sports <br />
              <span className="text-wine-red">Turf Booking</span>
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Elevate your game at world-class facilities. Discover and book top-rated football, cricket, and badminton arenas instantly.
            </p>
            
            <Link to="/turf" className="bg-wine-dark hover:bg-wine-red text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg flex items-center gap-2 inline-flex group">
              Explore Turfs
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 relative w-full h-64 md:h-full min-h-[400px]">
            {/* Soft gradient overlay to blend the image edge with the white container if needed */}
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent z-10 hidden md:block"></div>
            
            <img 
              src={turfFootball} 
              alt="Premium Sports Turf"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
