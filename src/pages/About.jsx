import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import aboutImg from "../assets/promo_athlete_male.png";

export default function About() {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".about-content > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
    gsap.from(".about-image", {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-cream min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="about-content">
            <span className="text-wine-red text-xs font-semibold tracking-widest uppercase mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-semibold text-wine-red font-['Cormorant_Garamond'] mb-8 leading-tight">
              Crafted For <br/> Champions
            </h1>
            
            <p className="text-gray text-lg leading-relaxed mb-6 font-light">
              Founded on the belief that every athlete deserves gear that pushes their limits, Kevin Sports has been at the forefront of athletic innovation. We merge cutting-edge technology with premium design.
            </p>
            <p className="text-gray text-lg leading-relaxed font-light mb-8">
              Our mission is simple: to provide you with the tools you need to elevate your game, whether you're on the track, on the field, or in the gym.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-wine-red/10 pt-8 mt-8">
              <div>
                <h4 className="text-3xl font-bold font-['Cormorant_Garamond'] text-text mb-1">2015</h4>
                <span className="text-xs text-gray font-medium tracking-wider uppercase">Year Founded</span>
              </div>
              <div>
                <h4 className="text-3xl font-bold font-['Cormorant_Garamond'] text-text mb-1">50+</h4>
                <span className="text-xs text-gray font-medium tracking-wider uppercase">Global Partners</span>
              </div>
            </div>
          </div>

          <div className="relative about-image hidden md:block">
            <div className="absolute inset-0 bg-wine-red/5 rounded-3xl translate-x-6 translate-y-6 -z-10"></div>
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-wine-dark">
              <img 
                src={aboutImg} 
                alt="Our Story" 
                className="w-full h-[600px] object-cover mix-blend-luminosity opacity-90 hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
