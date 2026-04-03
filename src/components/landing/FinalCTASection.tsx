import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-6 max-w-3xl text-center">
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

          <div className="mt-8 space-y-4 max-w-xl mx-auto">
            {[
              "You stop being the bottleneck.",
              "Your team starts thinking for you.",
              "Your business grows… without taking more of your time.",
            ].map((text, i) => (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-xl px-6 py-4 text-lg text-muted-foreground font-serif"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                {text}
              </motion.div>
            ))}

            <p className="text-foreground font-semibold mt-6">
              And something else happens too:
            </p>
            <p className="text-foreground text-xl font-bold">
              You get your life back.
            </p>
            <p className="text-muted-foreground text-sm font-serif">That's the whole point.</p>
          </div>

          <div className="mt-10">
            <Button variant="cta" size="lg" className="px-12 py-7 text-lg">
              👉 Just $47
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              Takes 2 seconds. Might change everything.
            </p>
          </div>

          <motion.div
            className="mt-16 bg-gradient-to-br from-foreground to-secondary rounded-2xl px-8 py-10 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-background/70 font-serif italic text-lg leading-relaxed">
              The question isn't whether you can delegate.
            </p>
            <p className="text-background font-black text-xl md:text-2xl mt-2">
              It's whether you're willing to learn how.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
