const stats = [
  { value: "50%", label: "Brand Visibility Increase" },
  { value: "30%", label: "Product Growth Achieved" },
  { value: "15%", label: "PPC Performance Boost" },
  { value: "100%", label: "Client Satisfaction Rate" }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Proven Results</h2>
          <p className="text-xl text-blue-100">Numbers that speak for themselves</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-blue-100 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
