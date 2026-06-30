import { CheckCircle2 } from "lucide-react";

export default function MembershipBanner() {
  const benefits = [
    "Priority booking",
    "Exclusive discounts",
    "Tournament access",
    "Free equipment rentals",
    "Personal coaching sessions"
  ];

  return (
    <section className="py-20" id="membership">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-wine-dark rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-wine-red rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-5 mix-blend-overlay"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6">
                <span className="text-cream text-xs font-bold tracking-widest uppercase">Premium Access</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Become A <br />Kevin Sports Member
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
                Unlock the ultimate sports experience. Join our exclusive membership and get premium perks across all our arenas.
              </p>
              <button className="bg-white text-wine-dark hover:bg-cream px-8 py-4 rounded-full font-bold transition-colors shadow-lg flex items-center gap-2">
                Join Membership
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Member Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 size={20} className="text-cream" />
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
