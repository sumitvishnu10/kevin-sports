export default function Statistics() {
  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "500+", label: "Premium Products" },
    { value: "50+", label: "Top Brands" },
    { value: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-cream-dark/20 rounded-2xl p-10 flex flex-wrap justify-between items-center gap-8 border border-white">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex-1 min-w-[150px] text-center relative group">
              {idx !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-wine-red/10"></div>
              )}
              <h3 className="text-4xl font-semibold text-wine-red font-['Cormorant_Garamond'] mb-2 group-hover:scale-105 transition-transform">{stat.value}</h3>
              <p className="text-gray text-xs font-medium uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
