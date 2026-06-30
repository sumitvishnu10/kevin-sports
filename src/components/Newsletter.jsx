import { useState } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-cream-dark/10 p-12 rounded-3xl border border-white shadow-sm">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-text font-['Cormorant_Garamond'] mb-3">Stay In The Game</h2>
            <p className="text-gray text-sm leading-relaxed">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
          </div>
          
          <div className="w-full max-w-md">
            <form className="relative flex items-center" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white rounded-full py-4 pl-6 pr-36 outline-none border border-gray/20 focus:border-wine-red/40 transition-colors shadow-sm text-sm"
                required
              />
              <button 
                type="submit"
                className={`absolute right-1.5 ${submitted ? 'bg-green-600 hover:bg-green-700' : 'bg-wine-red hover:bg-wine-dark'} text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors`}
              >
                {submitted ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
