import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import shoeImg from "../assets/transparent_shoe.png";
import footballImg from "../assets/football.png";
import dumbbellImg from "../assets/dumbbell.png";
import duffleImg from "../assets/duffle_bag.png";
import watchImg from "../assets/smart_watch.png";

const products = [
  { id: 1, name: "Nike Air Zoom Pegasus 40", category: "Running Shoes", price: "₹8,995", image: shoeImg },
  { id: 2, name: "Adidas Predator Accuracy", category: "Football Shoes", price: "₹7,499", image: footballImg },
  { id: 3, name: "Nike Training Bottle 24oz", category: "Accessories", price: "₹1,299", image: dumbbellImg },
  { id: 4, name: "Nike Brasilia Duffel Bag", category: "Gym Bag", price: "₹2,499", image: duffleImg },
  { id: 5, name: "Garmin Forerunner 55", category: "Smart Watch", price: "₹19,990", image: watchImg },
  { id: 6, name: "Puma Ultra Match", category: "Football Shoes", price: "₹6,999", image: footballImg },
  { id: 7, name: "Nike ZoomX Vaporfly", category: "Running Shoes", price: "₹19,995", image: shoeImg },
  { id: 8, name: "Under Armour Gym Bag", category: "Gym Bag", price: "₹3,299", image: duffleImg },
  { id: 9, name: "Pro Grip Dumbbell 10kg", category: "Gym Equipment", price: "₹2,199", image: dumbbellImg },
  { id: 10, name: "Apple Watch Ultra 2", category: "Smart Watch", price: "₹89,900", image: watchImg },
];

export default function FeaturedProducts() {
  const [wishlist, setWishlist] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;

    const progress = scrollLeft / maxScroll;
    const totalDots = 4;
    const active = Math.round(progress * (totalDots - 1));
    setActiveSlide(active);
  };

  const scrollToSlide = (index) => {
    if (!scrollContainerRef.current) return;
    const { scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const totalDots = 4;
    
    const targetScroll = (index / (totalDots - 1)) * maxScroll;
    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-wine-red text-xs font-semibold tracking-widest uppercase mb-2 block">Featured Products</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-wine-red font-['Cormorant_Garamond']">Best Picks For You</h2>
          </div>
          <Link to="/products" className="hidden md:flex items-center gap-2 text-sm text-text hover:text-wine-red transition-colors group">
            View all products <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {products.map((prod) => {
            const isWished = wishlist.includes(prod.id);
            return (
              <div key={prod.id} className="group cursor-pointer min-w-[260px] md:min-w-[280px] snap-start">
                <div className="bg-cream-dark/30 rounded-2xl p-6 h-[260px] flex items-center justify-center relative mb-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
                  <button 
                    onClick={(e) => { e.preventDefault(); toggleWishlist(prod.id); }}
                    className={`absolute top-4 right-4 transition-colors z-10 ${isWished ? 'text-wine-red' : 'text-gray-400 hover:text-wine-red'}`}
                  >
                    <Heart size={18} strokeWidth={isWished ? 0 : 1.5} fill={isWished ? "currentColor" : "none"} />
                  </button>
                  <Link to={`/products`} className="w-full h-full flex items-center justify-center">
                    <img src={prod.image} alt={prod.name} className="max-h-[160px] max-w-[160px] object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />
                  </Link>
                </div>
                <div>
                  <h4 className="text-text font-medium text-sm mb-1 truncate">{prod.name}</h4>
                  <p className="text-gray text-xs mb-2">{prod.category}</p>
                  <p className="text-wine-red font-semibold">{prod.price}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[0, 1, 2, 3].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => scrollToSlide(dotIndex)}
              className={`w-2 h-2 rounded-full transition-colors ${activeSlide === dotIndex ? 'bg-wine-red' : 'bg-gray/20'}`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
