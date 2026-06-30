import turfFootball from "../../assets/turf_football.png";
import turfCricket from "../../assets/turf_cricket.png";
import turfBadminton from "../../assets/turf_badminton.png";
import turfBasketball from "../../assets/turf_basketball.png";
import turfMulti from "../../assets/turf_multi.png";

export default function TurfCategories() {
  const categories = [
    {
      id: "football",
      title: "Football Turf",
      image: turfFootball,
      capacity: "5v5 to 11v11",
      badge: "Outdoor/Indoor",
      price: "From ₹1200/hr"
    },
    {
      id: "cricket",
      title: "Cricket Turf",
      image: turfCricket,
      capacity: "Box Cricket",
      badge: "Premium Pitch",
      price: "From ₹1000/hr"
    },
    {
      id: "badminton",
      title: "Badminton Court",
      image: turfBadminton,
      capacity: "Singles/Doubles",
      badge: "Wooden Floor",
      price: "From ₹400/hr"
    },
    {
      id: "basketball",
      title: "Basketball Court",
      image: turfBasketball,
      capacity: "Full/Half Court",
      badge: "Modern Arena",
      price: "From ₹800/hr"
    },
    {
      id: "multi",
      title: "Multi-Sports Arena",
      image: turfMulti,
      capacity: "Any Sport",
      badge: "Hybrid Complex",
      price: "Custom Pricing"
    }
  ];

  return (
    <section className="py-20 bg-transparent" id="categories">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-wine-dark mb-4">Choose Your Sport</h2>
          <div className="w-24 h-1 bg-wine-red mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div 
              key={cat.id}
              className={`group relative rounded-3xl overflow-hidden shadow-lg bg-white cursor-pointer transform hover:-translate-y-2 transition-all duration-300 ${i === 3 ? 'lg:col-span-2' : ''} ${i === 4 ? 'lg:col-span-1' : ''}`}
            >
              {/* Image background */}
              <div className="absolute inset-0 z-0 h-full w-full">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/90 via-wine-dark/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-80 flex flex-col justify-end">
                <div className="mb-2">
                  <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                    {cat.badge}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cream transition-colors">{cat.title}</h3>
                <div className="flex justify-between items-center text-white/80 text-sm border-t border-white/20 pt-4 mt-2">
                  <span>{cat.capacity}</span>
                  <span className="font-semibold text-white">{cat.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
