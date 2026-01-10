import { Search, TrendingUp, Palette, Share2, ShoppingBag, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "SEO, SEM & PPC Management",
    description: "Advanced campaign optimization, keyword research, and performance tracking for maximum ROI"
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy & Growth",
    description: "Data-driven strategies delivering sustainable growth and market dominance"
  },
  {
    icon: Palette,
    title: "Brand Development",
    description: "Building memorable, impactful brands that resonate with target audiences"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engagement-focused campaigns across all platforms for maximum reach"
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Optimization",
    description: "Amazon optimization, product research, and sales growth strategies"
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Real-time performance tracking and data visualization for optimization"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services & Expertise</h2>
          <p className="text-xl text-gray-600">Comprehensive digital marketing solutions for modern businesses</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
