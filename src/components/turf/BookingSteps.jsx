import { Check } from "lucide-react";

export default function BookingSteps() {
  const steps = [
    { num: "01", title: "Choose Sport", desc: "Select your preferred sport from our diverse categories." },
    { num: "02", title: "Select Turf", desc: "Browse and pick the best arena that fits your needs." },
    { num: "03", title: "Pick Date & Time", desc: "Find an available slot that works for your team." },
    { num: "04", title: "Confirm Booking", desc: "Pay securely and get instant confirmation." }
  ];

  return (
    <section className="py-24 bg-cream-dark/20 relative">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-wine-dark mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-wine-red mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-wine-red/20 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-cream flex items-center justify-center shadow-lg mb-6 group hover:border-wine-red transition-colors duration-300">
                  <span className="text-2xl font-bold text-wine-red">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-wine-dark mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm max-w-[200px]">{step.desc}</p>
                
                {/* Arrow for mobile/tablet */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-6 mb-2 text-wine-red/40">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
