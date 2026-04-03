import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import kasimProfile from "@/assets/kasim-profile.png";
import kasimLogo from "@/assets/kasim-logo.png";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-foreground overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay + gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/50" />

      {/* Header / Logo */}
      <header className="relative z-20 py-5 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <img src={kasimLogo} alt="Kasim Aslam" className="h-10 md:h-12 brightness-0 invert" />
          <Button variant="cta" size="sm" className="px-6 py-2 text-sm">
            Just $47
          </Button>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
                Live Webinar · April 26
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-background">
                You don't have a<br />time problem.
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-primary mt-2">
                You have a<br />delegation problem.
              </h1>

              <p className="mt-6 text-base md:text-lg text-background/70 max-w-lg font-serif leading-relaxed">
                Most entrepreneurs are stuck doing work they should never touch.
                <br /><br />
                In this training, I'll show you how to delegate properly —
                so your business grows without you being the bottleneck.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <Button variant="cta" size="lg" className="px-10 py-6">
                  👉 Just $47
                </Button>
              </div>
              <p className="mt-3 text-sm text-background/50">
                No fluff · Real system · Only 100 seats
              </p>
            </motion.div>

            {/* Right: Profile Image */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img
                src={kasimProfile}
                alt="Kasim Aslam — Entrepreneur & Business Coach"
                className="relative z-10 w-72 md:w-96 object-cover drop-shadow-2xl"
              />
              <motion.div
                className="absolute top-8 right-4 md:right-8 z-20 bg-card rounded-xl shadow-lg px-4 py-3 border border-border"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <p className="text-xs font-semibold text-foreground">Only 100 Seats</p>
                <p className="text-xs text-muted-foreground">Limited availability</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Trust line */}
          <motion.div
            className="mt-16 text-center text-sm text-background/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Trusted by hundreds of founders worldwide
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
