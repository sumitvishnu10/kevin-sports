import { Smartphone, CheckCircle, Lightbulb, Car, Coffee, Dumbbell, Users, Trophy } from "lucide-react";

export default function TurfFeatures() {
  const features = [
    { icon: <Smartphone size={24} />, title: "Online Booking", desc: "Seamless app & web booking experience." },
    { icon: <CheckCircle size={24} />, title: "Live Availability", desc: "Real-time slot tracking and instant confirmation." },
    { icon: <Lightbulb size={24} />, title: "Flood Lights", desc: "Premium LED lighting for night matches." },
    { icon: <Car size={24} />, title: "Parking", desc: "Spacious and secure parking facilities." },
    { icon: <Coffee size={24} />, title: "Refreshments", desc: "On-site cafeteria and sports drinks." },
    { icon: <Dumbbell size={24} />, title: "Equipment Rental", desc: "Rent premium gear right at the venue." },
    { icon: <Users size={24} />, title: "Coaching Available", desc: "Learn from professional certified coaches." },
    { icon: <Trophy size={24} />, title: "Tournament Hosting", desc: "Complete support for organizing events." }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-wine-dark mb-4">World-Class Facilities</h2>
          <div className="w-24 h-1 bg-wine-red mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience the ultimate sports environment equipped with everything a modern athlete needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white/80 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 cursor-default"
            >
              <div className="w-14 h-14 bg-wine-red/5 rounded-xl flex items-center justify-center text-wine-red mb-6 group-hover:bg-wine-red group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-wine-dark mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
