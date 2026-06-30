import { ArrowRight } from "lucide-react";
import turfFootball from "../../assets/indoor_turf.png";

export default function TurfHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text content */}
          <div className="flex flex-col items-start z-10">
            <div className="inline-flex items-center gap-2 border border-wine-red/20 rounded-full px-4 py-1.5 mb-8 bg-white/50 backdrop-blur-sm shadow-sm">
              <span className="text-wine-red text-xs">⚽</span>
              <span className="text-[11px] font-semibold tracking-widest text-wine-dark">PREMIUM SPORTS EXPERIENCE</span>
            </div>

            <h1 className="text-5xl md:text-6xl text-wine-dark font-bold leading-[1.1] tracking-tight mb-6">
              Book Your Perfect <br />
              <span className="text-wine-red">Sports Turf</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg mb-10 font-normal leading-relaxed">
              Discover and reserve premium football, cricket, badminton, basketball, and multi-sports turfs near you.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#turfs" className="bg-wine-red hover:bg-wine-dark text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_8px_20px_rgba(123,0,28,0.2)] hover:shadow-[0_8px_25px_rgba(123,0,28,0.3)] flex items-center gap-2 group">
                Find Turfs
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a href="#membership" className="border border-wine-red/20 bg-white/50 hover:bg-white text-wine-dark px-8 py-4 rounded-full font-medium transition-all backdrop-blur-sm shadow-sm">
                Explore Membership
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative z-10 flex justify-center lg:justify-end h-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={turfFootball}
                alt="Premium Football Turf under floodlights"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Abstract glassmorphism accent */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] -z-10 rotate-12"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
