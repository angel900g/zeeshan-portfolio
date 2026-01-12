import { TrendingUp, ShoppingCart, Shield, Briefcase, Search, Lock, AlertTriangle, BarChart } from 'lucide-react';

const projects = [
  {
    icon: TrendingUp,
    role: "Digital Marketing Strategist",
    title: "WolfGuider - Digital Growth Platform",
    description: "Developed comprehensive digital marketing strategies using WolfGuider tools to boost online visibility and drive targeted traffic to client websites.",
    achievements: ["150% traffic growth", "70% conversion uplift", "360° analytics dashboard"],
    color: "from-blue-500 to-cyan-500",
    imageUrl: "/images/wolfguider.png",
    tools: ["WolfGuider Analytics", "SEO Optimizer", "Competitive Intelligence"]
  },
  {
    icon: ShoppingCart,
    role: "E-commerce Growth Expert",
    title: "ZAK Solutions - Sales Amplifier",
    description: "Leveraged ZAK's AI-powered tools to optimize e-commerce funnels, automate sales processes, and maximize revenue for online businesses.",
    achievements: ["45% sales increase", "Automated workflows", "Real-time inventory tracking"],
    color: "from-emerald-500 to-teal-500",
    imageUrl: "/images/zak.png",
    tools: ["ZAK Automation", "Sales Predictor", "Inventory Manager"]
  },
  {
    icon: Shield,
    role: "Cybersecurity Consultant",
    title: "Data Breach Checker Pro",
    description: "Implemented advanced data leak detection systems that monitor dark web and public sources for compromised credentials and sensitive information.",
    achievements: ["1000+ breaches detected", "Real-time alerts", "Automated protection"],
    color: "from-violet-500 to-purple-500",
    imageUrl: "/images/cyber.png",
    tools: ["Dark Web Scanner", "Credential Monitor", "Compliance Dashboard"]
  },
  {
    icon: BarChart,
    role: "Business Intelligence Specialist THE JIN",
    title: "Market Insights & Strategy",
    description: "Provided data-driven business intelligence using advanced analytics tools to uncover market opportunities and optimize business strategies.",
    achievements: ["Market trend analysis", "Competitor benchmarking", "ROI optimization"],
    color: "from-orange-500 to-red-500",
    imageUrl: "/images/jin.png",
    tools: ["Predictive Analytics", "Market Scanner", "Performance Tracker"]
  }
];

export default function FeaturedWork() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackColor: string, title: string) => {
    const target = e.target as HTMLImageElement;
    const parent = target.parentElement;
    
    if (parent) {
      target.style.display = 'none';
      parent.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-br ${fallbackColor} flex items-center justify-center">
          <div class="text-white text-center p-6">
            <div class="text-3xl mb-4">📊</div>
            <h3 class="text-2xl font-bold">${title.split(' ')[0]}</h3>
            <p class="text-sm opacity-75">Digital Solution</p>
          </div>
        </div>
      `;
    }
  };

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement, Event>, IconComponent: React.ComponentType<any>) => {
    const target = e.target as HTMLImageElement;
    const parent = target.parentElement;
    
    if (parent) {
      parent.innerHTML = '';
      // Create a temporary div to render the icon
      const iconDiv = document.createElement('div');
      parent.appendChild(iconDiv);
      // In a real React app, you'd use React.createElement or render differently
      // This is a simplified fallback
      parent.innerHTML = `<div class="flex items-center justify-center w-full h-full">
        ${IconComponent.toString().includes('TrendingUp') ? '📈' : 
          IconComponent.toString().includes('ShoppingCart') ? '🛒' : 
          IconComponent.toString().includes('Shield') ? '🛡️' : '📊'}
      </div>`;
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600">Driving business growth with cutting-edge digital tools and strategies</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => handleImageError(e, project.color, project.title)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide bg-gray-100 px-3 py-1 rounded-full">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Tools Used */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Core Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Key Results:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.achievements.map((achievement, i) => (
                      <span key={i} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Highlight Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Digital Arsenal</h3>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Specialized tools designed to solve specific business challenges - from digital marketing growth to cybersecurity protection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">WolfGuider</h4>
              <p className="text-gray-600">AI-powered digital marketing growth platform for traffic, SEO, and analytics.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">ZAK Solutions</h4>
              <p className="text-gray-600">E-commerce automation and sales optimization tools for online businesses.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Data Breach Checker</h4>
              <p className="text-gray-600">Advanced system to detect compromised data and prevent security breaches.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}