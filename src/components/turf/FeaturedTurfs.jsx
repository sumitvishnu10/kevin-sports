import { MapPin, Star, Clock } from "lucide-react";
import turfFootball from "../../assets/turf_football.png";
import turfCricket from "../../assets/turf_cricket.png";
import turfBadminton from "../../assets/turf_badminton.png";
import turfBasketball from "../../assets/turf_basketball.png";

export default function FeaturedTurfs() {
  const turfs = [
    {
      id: 1,
      name: "Kevin Football Arena",
      location: "Anna Nagar, Chennai",
      rating: 4.9,
      reviews: 128,
      timings: "6:00 AM - 12:00 AM",
      price: "₹1500",
      image: turfFootball
    },
    {
      id: 2,
      name: "Elite Cricket Turf",
      location: "OMR, Chennai",
      rating: 4.8,
      reviews: 95,
      timings: "5:00 AM - 11:00 PM",
      price: "₹1200",
      image: turfCricket
    },
    {
      id: 3,
      name: "Royal Badminton Club",
      location: "Velachery, Chennai",
      rating: 4.7,
      reviews: 210,
      timings: "6:00 AM - 10:00 PM",
      price: "₹400",
      image: turfBadminton
    },
    {
      id: 4,
      name: "Urban Basketball Hub",
      location: "Adyar, Chennai",
      rating: 4.9,
      reviews: 76,
      timings: "6:00 AM - 11:00 PM",
      price: "₹800",
      image: turfBasketball
    }
  ];

  return (
    <section className="py-20 bg-cream-dark/30" id="turfs">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-wine-dark mb-4">Popular Sports Arenas</h2>
            <p className="text-gray-600">Discover top-rated sports facilities in your city.</p>
          </div>
          <button className="hidden md:block text-wine-red font-medium hover:text-wine-dark transition-colors border-b-2 border-wine-red pb-1">
            View All Arenas
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {turfs.map(turf => (
            <div key={turf.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={turf.image} 
                  alt={turf.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold text-wine-dark">{turf.rating}</span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg text-wine-dark mb-2 truncate">{turf.name}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500 gap-2">
                    <MapPin size={16} className="text-wine-red/70" />
                    <span className="truncate">{turf.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 gap-2">
                    <Clock size={16} className="text-wine-red/70" />
                    <span>{turf.timings}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-500 block">Starting from</span>
                    <span className="font-bold text-wine-dark text-lg">{turf.price}<span className="text-sm font-normal text-gray-400">/hr</span></span>
                  </div>
                  <button className="bg-wine-dark hover:bg-wine-red text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <button className="text-wine-red font-medium hover:text-wine-dark transition-colors border-b-2 border-wine-red pb-1">
            View All Arenas
          </button>
        </div>
      </div>
    </section>
  );
}
