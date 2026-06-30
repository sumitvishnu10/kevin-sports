import { ArrowRight } from "lucide-react";
import shoeImg from "../assets/transparent_shoe.png";
import footballImg from "../assets/football.png";
import dumbbellImg from "../assets/dumbbell.png";
import duffleImg from "../assets/duffle_bag.png";
import { Link } from "react-router-dom";

const collections = [
  { name: "Running", image: shoeImg, link: "/collections/running" },
  { name: "Football", image: footballImg, link: "/collections/football" },
  { name: "Gym & Fitness", image: dumbbellImg, link: "/collections/gym" },
  { name: "Accessories", image: duffleImg, link: "/collections/accessories" },
];

export default function Collections() {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-wine-red text-xs font-semibold tracking-widest uppercase mb-2 block">Shop By Collection</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-wine-red font-['Cormorant_Garamond']">Find What Moves You</h2>
          </div>
          <Link to="/collections" className="hidden md:flex items-center gap-2 text-sm text-text hover:text-wine-red transition-colors group">
            View all collections <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col, idx) => (
            <Link to={col.link} key={idx} className="group cursor-pointer rounded-2xl overflow-hidden bg-cream-dark/30 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.06)] transition-all duration-300 relative h-[380px] p-6 flex flex-col">
              <div className="z-10">
                <h3 className="text-xl font-medium text-text mb-2">{col.name}</h3>
                <span className="flex items-center gap-1 text-sm text-wine-red font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Shop Now <ArrowRight size={14} />
                </span>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center p-8 mt-12">
                <img 
                  src={col.image} 
                  alt={col.name} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
