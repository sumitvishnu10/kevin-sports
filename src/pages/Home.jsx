import { Link } from "react-router-dom";
import { ArrowRight, Award, Truck, Lock, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Navbar from "../components/Navbar";
import Collections from "../components/Collections";
import FeaturedProducts from "../components/FeaturedProducts";
import PromoBanner from "../components/PromoBanner";
import Statistics from "../components/Statistics";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import TurfPromo from "../components/TurfPromo";
import heroImg from "../assets/transparent_shoe.png";

gsap.registerPlugin(ScrollTrigger);

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4 flex-1 w-full md:w-auto px-4">
    {icon}
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
);

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Hero Entrance Animations
    gsap.from(".hero-text > *", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.1
    });

    gsap.from(".hero-image", {
      x: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.4,
      onComplete: () => {
        // Continuous smooth floating effect after entrance
        gsap.to(".hero-image img", {
          y: -15,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });
        // Shadow pulsing sync
        gsap.to(".floor-shadow", {
          scale: 0.85,
          opacity: 0.5,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });
      }
    });

    gsap.from(".features-bar", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.6
    });

    // 2. Scroll Animations for all other sections (smoother entrance)
    const sections = gsap.utils.toArray("section, footer");
    sections.forEach((sec, i) => {
      if (i === 0) return; // Skip Hero section as it animates on load
      
      gsap.from(sec, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sec,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
    });

    // 3. Ultra Smooth GSAP Snap Scrolling
    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: {
        snapTo: "section, footer",
        duration: { min: 0.6, max: 1.5 },
        delay: 0.1,
        ease: "power3.inOut"
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <Navbar />

      <section className="min-h-[85vh] bg-transparent pt-32 pb-16 flex flex-col justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 w-full relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left Column - Text Content */}
            <div className="flex flex-col items-start z-10 hero-text">
              <div className="inline-flex items-center gap-2 border border-wine-red/20 rounded-full px-4 py-1.5 mb-8 bg-white/30 backdrop-blur-sm">
                <span className="text-wine-red text-xs">✦</span>
                <span className="text-[11px] font-semibold tracking-widest text-text">PREMIUM QUALITY</span>
              </div>

              <h1 className="text-6xl md:text-[6.5rem] text-wine-red font-semibold leading-[1.05] tracking-tight mb-8 hero-title">
                Elevate Your<br />Game
              </h1>
              
              <div className="w-16 h-[2px] bg-wine-red/40 mb-6"></div>

              <p className="text-lg text-gray-600 max-w-md mb-10 font-light leading-relaxed">
                Premium Sports Equipment & Athlete Essentials<br/>For Champions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/collections" className="bg-wine-dark hover:bg-wine-red text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg flex items-center gap-2 group">
                  Explore Collection
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link to="/products" className="border border-wine-dark hover:bg-wine-dark hover:text-white text-wine-dark px-8 py-3.5 rounded-full font-medium transition-all">
                  View Products
                </Link>
              </div>
            </div>

            {/* Right Column - Images and Shapes */}
            <div className="relative z-10 hidden md:flex justify-center items-center h-full hero-image mt-8 md:mt-0">
              
              {/* Background Shapes */}
              <div className="absolute inset-0 flex justify-center items-center -z-10">
                {/* Large Pill Shape */}
                <div className="w-[280px] h-[500px] bg-wine-dark rounded-[140px] absolute right-4 top-0 -z-10"></div>
                
                {/* Small Dark Circle */}
                <div className="w-24 h-24 bg-wine-dark rounded-full absolute left-4 top-[30%] -z-10 shadow-lg relative overflow-hidden">
                   {/* Geometric lines inside circle */}
                   <div className="absolute w-[1px] h-full bg-white/10 left-1/2"></div>
                   <div className="absolute h-[1px] w-full bg-white/10 top-1/2"></div>
                   <div className="absolute w-[1px] h-full bg-white/10 left-1/2 rotate-45"></div>
                   <div className="absolute h-[1px] w-full bg-white/10 top-1/2 rotate-45"></div>
                </div>

                {/* Horizontal Lines Texture */}
                <div className="absolute left-[-20px] top-[50%] w-[120px] h-[60px] opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, var(--color-gray) 2px, var(--color-gray) 4px)' }}></div>
                
                {/* Vertical Dots Texture */}
                <div className="absolute right-[-30px] top-4 w-[20px] h-[100px] opacity-15" style={{ backgroundImage: 'radial-gradient(circle, var(--color-gray) 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
              </div>

              <div className="relative z-10">
                <img
                  src={heroImg}
                  alt="Premium Running Shoe"
                  className="w-full max-w-[650px] transform object-contain relative z-20 rotate-[-10deg] scale-110 drop-shadow-2xl"
                />
                {/* Floor Shadow */}
                <div className="w-[400px] h-[40px] bg-black/20 blur-2xl rounded-[100%] mx-auto mt-[-20px] z-10 relative floor-shadow"></div>
              </div>

              {/* Premium Circular Badge */}
              <div className="absolute bottom-10 right-0 w-32 h-32 rounded-full border border-wine-red/30 z-20 flex flex-col items-center justify-center bg-cream/30 backdrop-blur-sm">
                <div className="w-28 h-28 rounded-full border border-wine-red/20 flex flex-col items-center justify-center text-wine-dark">
                  <Award size={24} strokeWidth={1} className="mb-1" />
                  <span className="text-[10px] font-bold tracking-widest text-center leading-tight">PREMIUM<br/>QUALITY</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Bar */}
          <div className="mt-20 bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-white/50 relative z-20 features-bar w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray/10">
              <FeatureItem icon={<Award className="text-wine-red" size={28} strokeWidth={1.5} />} title="Premium Quality" desc="Top grade materials" />
              <FeatureItem icon={<Truck className="text-wine-red" size={28} strokeWidth={1.5} />} title="Fast Delivery" desc="Quick & reliable" />
              <FeatureItem icon={<Lock className="text-wine-red" size={28} strokeWidth={1.5} />} title="Secure Payments" desc="100% safe checkout" />
              <FeatureItem icon={<ShieldCheck className="text-wine-red" size={28} strokeWidth={1.5} />} title="Trusted by Athletes" desc="Performance you trust" />
            </div>
          </div>
        </div>
      </section>

      <Collections />
      <FeaturedProducts />
      <TurfPromo />
      <PromoBanner />
      <Statistics />
      <Newsletter />
      <Footer />
    </div>
  );
}