import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import kasimLogo from "@/assets/kasim-logo.png";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/50" />

      {/* Header / Logo */}
      <header className="relative z-20 py-5 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <img src={kasimLogo} alt="Kasim Aslam" className="h-10 md:h-12" />
          <Button variant="cta" size="sm" className="px-6 py-2 text-sm">
            Just $47
          </Button>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
                Live Webinar · April 26
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white drop-shadow-lg">
                You don't have a<br />time problem.
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-primary mt-2 drop-shadow-lg">
                You have a<br />delegation problem.
              </h1>

              <p className="mt-6 text-base md:text-lg text-white/80 max-w-lg font-serif leading-relaxed">
                Most entrepreneurs are stuck doing work they should never touch.
                <br /><br />
                In this training, I'll show you how to delegate properly —
                so your business grows without you being the bottleneck.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <Button variant="cta" size="lg" className="px-10 py-6 text-lg">
                  👉 Just $47
                </Button>
              </div>
              <p className="mt-3 text-sm text-white/60 font-medium">
                No fluff · Real system · Only 100 seats
              </p>
            </motion.div>
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute top-8 right-8 md:right-16 z-20 bg-white rounded-xl shadow-2xl px-5 py-4 border-l-4 border-primary"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-sm font-black text-foreground">Only 100 Seats</p>
            <p className="text-xs text-muted-foreground font-medium">Limited availability</p>
          </motion.div>
        </div>
      </div>

      {/* Trust line */}
      <motion.div
        className="relative z-10 pb-8 text-center text-sm text-white/50 font-medium"
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
