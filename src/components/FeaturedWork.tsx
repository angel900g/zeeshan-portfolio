import { TrendingUp, ShoppingCart, Shield, Briefcase } from 'lucide-react';

const projects = [
  {
    icon: TrendingUp,
    role: "Chief Operating Officer",
    title: "Brand Visibility Transformation",
    description: "Led digital transformation for e-commerce client, resulting in 50% increase in brand visibility and engagement across all channels",
    achievements: ["50% visibility increase", "Multi-channel strategy", "SEO/SEM optimization"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: ShoppingCart,
    role: "E-commerce Specialist",
    title: "Amazon E-commerce Growth",
    description: "Optimized Amazon product listings and managed PPC campaigns for multiple brands, delivering significant sales growth",
    achievements: ["30% visibility boost", "15% PPC improvement", "100% positive feedback"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Shield,
    role: "Marketing & Cybersecurity Specialist",
    title: "Platform Marketing & Security",
    description: "Enhanced platform visibility through targeted digital marketing while integrating cybersecurity measures",
    achievements: ["Improved engagement", "Marketing automation", "Data protection"],
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Briefcase,
    role: "Marketing Consultant",
    title: "B2B Marketing Solutions",
    description: "Positioned cybersecurity and IT solutions through targeted B2B campaigns, establishing thought leadership",
    achievements: ["Enterprise clients", "Authority building", "Lead generation"],
    color: "from-orange-500 to-red-500"
  }
];

export default function FeaturedWork() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600">Transforming businesses through strategic marketing excellence</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <project.icon className="w-8 h-8 text-white" />
              </div>

              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{project.role}</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.achievements.map((achievement, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
