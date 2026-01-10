import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwUzAgNC45NTQgMCAxNnM4Ljk1NCAyMCAyMCAyMCAyMC04Ljk1NCAyMC0yMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
          <span className="text-blue-300 text-sm font-medium">Let's Work Together</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Transform Your Marketing?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's discuss how data-driven marketing strategies can drive growth for your business.
        </p>

        <a href="mailto:contact@zeeshanhassan.com" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
          <Mail className="w-5 h-5" />
          Get in Touch
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
