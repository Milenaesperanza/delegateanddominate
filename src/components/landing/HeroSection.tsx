import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import kasimLogo from "@/assets/kasim-logo.png";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Capa 1: fondo base */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Capa 2: gradiente solo hacia la izquierda, se desvanece antes de llegar al público */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.85) 25%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.1) 55%, transparent 60%)"
        }}
      />

      {/* Header / Logo */}
      <header className="relative z-20 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
          <img src={kasimLogo} alt="Kasim Aslam" className="h-10 md:h-14 w-auto" />
          <a href="#tickets">
            <Button variant="cta" size="sm" className="px-4 py-2 text-sm font-bold tracking-wide">
              Save My Seat
            </Button>
          </a>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-md mb-6 md:mb-8">
                🔴 Live Webinar · April 26 · Only 100 Seats
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" style={{ color: '#111111' }}>
                You don't have a time problem.
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-primary mt-1">
                You have a delegation problem.
              </h1>

              <p className="mt-5 md:mt-6 text-base md:text-lg text-gray-700 max-w-md leading-relaxed">
                Most entrepreneurs are stuck doing work they should never touch.
                In this training, Kasim shows you the exact system he used to build and exit multiple 7-figure businesses.
              </p>

              {/* Tickets */}
              <div id="tickets" className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Free */}
                <div className="bg-white/95 border border-gray-200 rounded-2xl px-5 py-5 shadow-md">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Free</p>
                  <p className="text-2xl font-black text-gray-900">$0</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Intro video</li>
                    <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Delegation checklist</li>
                  </ul>
                  <a href="#" className="mt-4 block">
                    <Button variant="outline" className="w-full font-bold">
                      Get Free Access
                    </Button>
                  </a>
                </div>

                {/* VIP */}
                <div className="bg-primary rounded-2xl px-5 py-5 shadow-xl shadow-primary/30 relative">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase whitespace-nowrap">Most Popular</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">VIP</p>
                  <p className="text-2xl font-black text-white">$47</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/90">
                    <li className="flex items-center gap-2"><span className="text-white font-bold">✓</span> Everything in Free</li>
                    <li className="flex items-center gap-2"><span className="text-white font-bold">✓</span> Live webinar access</li>
                    <li className="flex items-center gap-2"><span className="text-white font-bold">✓</span> Private community</li>
                  </ul>
                  <a href="#" className="mt-4 block">
                    <Button className="w-full bg-white text-primary font-black hover:bg-white/90">
                      Save My VIP Seat
                    </Button>
                  </a>
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-500 font-medium">
                No fluff · No replays · Real system
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust line */}
      <motion.div
        className="relative z-10 pb-6 text-center text-sm text-gray-600 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Trusted by hundreds of founders worldwide
      </motion.div>
    </section>
  );
};

export default HeroSection;
