import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    period: "Jan 2022 – Feb 2024",
    role: "Chief Operating Officer",
    company: "Ideal Solutions",
    achievements: [
      "Led company's digital transformation driving 50% brand visibility increase",
      "Managed SEO, SEM, and PPC campaigns generating qualified leads",
      "Coordinated multi-channel digital marketing strategies across platforms"
    ]
  },
  {
    period: "Jul 2024 – Feb 2025",
    role: "Digital Marketing & Cybersecurity Specialist",
    company: "D3vl.com",
    achievements: [
      "Enhanced platform visibility through targeted digital strategies",
      "Developed marketing automation tools for improved efficiency",
      "Integrated cybersecurity measures into marketing infrastructure"
    ]
  },
  {
    period: "Jul 2021 – Sep 2024",
    role: "Amazon Virtual Assistant & Marketing Specialist",
    company: "Freelance",
    achievements: [
      "Improved product visibility by 30% through keyword optimization",
      "Managed PPC campaigns achieving 15% performance boost",
      "Maintained 100% positive client feedback"
    ]
  },
  {
    period: "Jan 2022 – May 2025",
    role: "Cybersecurity & IT Marketing Consultant",
    company: "Multiple Clients",
    achievements: [
      "Positioned cybersecurity solutions through B2B marketing campaigns",
      "Enhanced brand authority through thought leadership content",
      "Managed IT projects aligning technical capabilities with marketing"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600">Building success stories across industries</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
