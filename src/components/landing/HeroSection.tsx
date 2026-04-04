import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import kasimLogo from "@/assets/kasim-logo.png";
import heroBg from "@/assets/hero-bg.png";
import kasimCutout from "@/assets/hero-bg-kasim.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay izquierda para que el texto se lea */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />

      {/* Kasim recortado — derecha, full height */}
      <img
        src={kasimCutout}
        alt="Kasim Aslam"
        className="absolute bottom-0 right-0 h-full object-contain object-bottom z-10 pointer-events-none"
      />

      {/* Header / Logo */}
      <header className="relative z-20 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-3 px-6">
          <img src={kasimLogo} alt="Kasim Aslam" className="h-8 md:h-11" />
          <a href="#tickets">
            <Button variant="cta" size="sm" className="px-6 py-2 text-sm font-bold tracking-wide">
              Save My Seat
            </Button>
          </a>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-md mb-8">
                🔴 Live Webinar · April 26 · Only 100 Seats
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                You don't have a<br />time problem.
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-primary mt-1">
                You have a<br />delegation problem.
              </h1>

              <p className="mt-6 text-base md:text-lg text-gray-700 max-w-md leading-relaxed">
                Most entrepreneurs are stuck doing work they should never touch.
                In this training, Kasim shows you the exact system he used to build and exit multiple 7-figure businesses.
              </p>

              {/* Tickets */}
              <div id="tickets" className="mt-10 flex flex-col sm:flex-row gap-4">
                {/* Free */}
                <div className="flex-1 bg-white/90 border border-gray-200 rounded-2xl px-6 py-6 shadow-md">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Free</p>
                  <p className="text-2xl font-black text-gray-900">$0</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li>✓ Intro video</li>
                    <li>✓ Delegation checklist</li>
                  </ul>
                  <a href="#" className="mt-4 block">
                    <Button variant="outline" className="w-full font-bold">
                      Get Free Access
                    </Button>
                  </a>
                </div>

                {/* VIP */}
                <div className="flex-1 bg-primary rounded-2xl px-6 py-6 shadow-xl shadow-primary/30 relative">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">Most Popular</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">VIP</p>
                  <p className="text-2xl font-black text-white">$47</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/90">
                    <li>✓ Everything in Free</li>
                    <li>✓ Live webinar access</li>
                    <li>✓ Private community</li>
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
        className="relative z-20 pb-8 text-center text-sm text-gray-500 font-semibold"
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
