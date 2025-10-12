export default function Footer() {
  return (
    <footer className="bg-black/70 text-gray-300 text-center py-14 mt-24 border-t border-gray-800 relative overflow-hidden">
      {/* 🔹 Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-wide">
          DEELLAS FASHION
        </h2>

        <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-gray-400 mb-6">
          DEELLAS is more than fashion — it’s an attitude, a story, a way to express who
          you are. Every stitch, every design, and every fabric is carefully crafted to
          celebrate individuality, confidence, and beauty that never fades.
        </p>

        <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-gray-400 mb-6">
          From runway-ready pieces to timeless everyday wear, we create styles that
          empower you to step out boldly. Whether it’s elegance, comfort, or statement
          fashion, DEELLAS ensures you shine with grace and class in every moment.
        </p>

        <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-gray-400 mb-8">
          Join our growing community of dreamers, creators, and believers in beauty that
          speaks without words. Fashion fades — but DEELLAS confidence lasts forever.
        </p>

        {/* 🔹 Social Links */}
        <div className="mt-8 space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-white transition-all duration-300">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-all duration-300">
            Facebook
          </a>
          <a href="#" className="hover:text-white transition-all duration-300">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition-all duration-300">
            Contact
          </a>
        </div>

        {/* 🔹 Divider Line */}
        <div className="mt-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto"></div>

        {/* 🔹 Copyright */}
        <p className="mt-6 text-xs text-gray-500 italic">
          © {new Date().getFullYear()} DEELLAS. All rights reserved.  
          Designed with passion, made for confidence.
        </p>
      </div>
    </footer>
  );
}
