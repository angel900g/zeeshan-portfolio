import { ArrowRight, Mail, Sparkles, TrendingUp, Target, Globe, ChevronDown, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: "50%+", label: "Visibility Increase", icon: TrendingUp },
    { value: "30%", label: "Product Growth", icon: Target },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "24/7", label: "Global Support", icon: Globe }
  ];

  // Animation styles as inline objects
  const floatAnimation = {
    animation: 'float 5s ease-in-out infinite'
  };

  const floatSlowAnimation = {
    animation: 'float-slow 8s ease-in-out infinite'
  };

  const gradientAnimation = {
    backgroundSize: '200% auto',
    animation: 'gradient 3s ease infinite'
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 pt-20">
      {/* Add CSS animations in style tag */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(2deg); }
            66% { transform: translateY(5px) rotate(-1deg); }
          }
          
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 3s ease infinite;
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out;
          }
        `}
      </style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e51a_1px,transparent_1px),linear-gradient(to_bottom,#4f46e51a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/15 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-[1px] bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="lg:w-1/2 text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20 backdrop-blur-lg">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Trusted by Fortune 500 Companies
              </span>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-2 border-gray-900"></div>
                ))}
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]">
              <span className="block">Elevate Your</span>
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                  Digital Presence
                </span>
                <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full"></div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              Transform your brand into an industry leader with data-driven marketing strategies that deliver measurable results and sustainable growth.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a href="#contact" className="group relative px-10 py-5 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span className="text-lg">Start Your Growth Journey</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </a>
              
              <a href="#portfolio" className="group px-10 py-5 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <span>View Success Stories</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-400">4.9/5 Rating</span>
              </div>
              <div className="h-4 w-px bg-white/20"></div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-semibold">100+</span> Successful Campaigns
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:w-1/2 relative">
            {/* Main Visual Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/50 rounded-2xl p-8 backdrop-blur-xl border border-white/10 overflow-hidden">
                {/* Dashboard Mockup */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl"></div>
                      <div>
                        <div className="h-3 w-24 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 rounded"></div>
                        <div className="h-2 w-16 bg-gray-700 rounded mt-1"></div>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg"></div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {[
                      { value: "↑ 150%", label: "Traffic Growth", color: "from-emerald-400 to-teal-400" },
                      { value: "↑ 70%", label: "Conversion Rate", color: "from-blue-400 to-cyan-400" },
                      { value: "↓ 40%", label: "Cost Reduction", color: "from-purple-400 to-pink-400" }
                    ].map((metric, i) => (
                      <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-400 mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-3 w-32 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded"></div>
                      <div className="h-2 w-20 bg-gray-700 rounded"></div>
                    </div>
                    <div className="h-32 bg-gradient-to-b from-gray-800/50 to-gray-900/30 rounded-xl border border-white/5 p-4">
                      <div className="flex items-end justify-between h-full">
                        {[30, 50, 70, 90, 100, 85, 70].map((height, i) => (
                          <div key={i} className="relative w-8">
                            <div 
                              className={`w-full rounded-t-lg ${
                                i === 4 
                                  ? 'bg-gradient-to-t from-blue-500 to-cyan-500' 
                                  : 'bg-gradient-to-t from-blue-500/40 to-cyan-500/40'
                              }`}
                              style={{ height: `${height}%` }}
                            >
                              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                {i === 4 ? 'Now' : ''}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Floating Badges */}
            <div 
              className="absolute -top-6 -left-6"
              style={floatSlowAnimation}
            >
              <div className="p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">↑ 245%</div>
                    <div className="text-xs text-gray-400">ROI Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          {/* Progress Ring */}
          <div className="w-16 h-16">
            {isClient && (
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray="301.6"
                  strokeDashoffset={301.6 * (1 - scrollProgress)}
                  className="transition-all duration-300"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}