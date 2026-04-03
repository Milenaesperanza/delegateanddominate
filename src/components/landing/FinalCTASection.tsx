import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import kasimProfile from "@/assets/kasim-profile-2.png";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-[#E8E8E8]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              This is what changes<br />
              <span className="text-primary">when you get this right.</span>
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "You stop being the bottleneck.",
                "Your team starts thinking for you.",
                "Your business grows… without taking more of your time.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="bg-white border-2 border-foreground/10 rounded-xl px-6 py-4 text-lg text-foreground font-serif shadow-xl shadow-black/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  {text}
                </motion.div>
              ))}

              <p className="text-foreground font-bold mt-6 text-lg">
                And something else happens too:
              </p>
              <p className="text-foreground text-2xl font-black">
                You get your life back.
              </p>
              <p className="text-foreground/60 text-sm font-serif">That's the whole point.</p>
            </div>

            <div className="mt-10" />
          </motion.div>

          {/* Right: Kasim profile */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img
              src={kasimProfile}
              alt="Kasim Aslam"
              className="w-full max-w-sm rounded-2xl shadow-2xl shadow-black/20"
            />
          </motion.div>
        </div>

        {/* Centered CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Button variant="cta" size="lg" className="px-14 py-7 text-xl shadow-2xl shadow-primary/30">
            👉 Save My Seat
          </Button>
          <p className="mt-3 text-sm text-foreground/50 font-medium">
            Takes 2 seconds. Might change everything.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTASection;
