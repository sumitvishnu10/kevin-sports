import promoImg from "../assets/promo_athlete_male.png";
import { Link } from "react-router-dom";

export default function PromoBanner() {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-wine-dark via-wine-red to-wine-dark text-white min-h-[300px] flex items-center shadow-2xl">
          
          {/* Subtle Geometric Shapes for background */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
             <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] border-[1px] border-white/10 rounded-full"></div>
             <div className="absolute bottom-[-20%] right-[10%] w-[250px] h-[250px] border-[1px] border-white/5 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr_1fr] w-full items-center relative z-10">
            {/* Left: Athlete Image */}
            <div className="h-full hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-wine-dark/80 z-10"></div>
              <img 
                src={promoImg} 
                alt="Athlete Training" 
                className="w-[120%] max-w-none h-[320px] object-cover object-left opacity-90 mix-blend-luminosity" 
              />
            </div>

            {/* Center: Text Content */}
            <div className="p-12 md:pl-0 z-20">
              <h2 className="text-4xl md:text-5xl font-semibold font-['Cormorant_Garamond'] mb-4 leading-tight">
                Push Your Limits
              </h2>
              <p className="text-white/80 text-sm md:text-base mb-8 max-w-sm font-light">
                High performance gear for high performance you. Upgrade your game today.
              </p>
              <Link to="/products" className="bg-white text-wine-red hover:bg-cream px-8 py-3 rounded-full font-medium transition-colors shadow-lg shadow-black/20 inline-block">
                Shop Now
              </Link>
            </div>

            {/* Right: Discount typography */}
            <div className="hidden md:flex flex-col items-center justify-center p-12 border-l border-white/10">
              <span className="text-sm font-semibold tracking-widest text-white/80 mb-2">UP TO</span>
              <div className="flex items-start leading-none">
                <span className="text-7xl font-bold font-['Cormorant_Garamond']">30</span>
                <div className="flex flex-col ml-1">
                  <span className="text-4xl font-light">%</span>
                  <span className="text-sm tracking-widest font-semibold mt-1 text-white/80">OFF</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
