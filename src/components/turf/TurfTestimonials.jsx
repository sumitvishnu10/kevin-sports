import { Star } from "lucide-react";

export default function TurfTestimonials() {
  const testimonials = [
    {
      name: "Rahul M.",
      role: "Amateur Footballer",
      review: "Best turf experience in Chennai. The floodlights are perfectly positioned and the turf quality is top-notch.",
      rating: 5
    },
    {
      name: "Priya S.",
      role: "Badminton Enthusiast",
      review: "Easy booking and premium facilities. Love the wooden flooring at the Royal Badminton Club.",
      rating: 5
    },
    {
      name: "Karthik V.",
      role: "Corporate Team Captain",
      review: "Perfect for weekend matches. The online booking system saves so much hassle. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-cream-dark/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-wine-dark mb-4">What Athletes Say</h2>
          <div className="w-24 h-1 bg-wine-red mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-6xl text-wine-red/10 font-serif leading-none">"</div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(test.rating)].map((_, j) => (
                  <Star key={j} size={16} className="text-wine-red fill-wine-red" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 relative z-10 leading-relaxed italic">
                "{test.review}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-wine-dark/10 flex items-center justify-center text-wine-dark font-bold">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-wine-dark text-sm">{test.name}</h4>
                  <span className="text-xs text-gray-500">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
