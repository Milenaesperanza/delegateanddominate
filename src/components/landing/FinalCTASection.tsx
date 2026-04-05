import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import kasimProfile from "@/assets/kasim-profile-2.png";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: "#ffffff" }}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        {/* Headline */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <span className="inline-block text-sm md:text-base font-black uppercase tracking-widest text-white bg-primary px-6 py-2.5 rounded-full shadow-lg shadow-primary/30">
              Choose your seat
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight" style={{ color: "#111111" }}>
            This is what changes
            <br />
            <span className="text-primary">when you get this right.</span>
          </h2>
        </motion.div>

        {/* Tickets — prominentes, full attention */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">

          {/* Free */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col"
            style={{
              backgroundColor: "#f9f9f9",
              border: "1px solid #e0e0e0",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#888888" }}>Free Access</span>
            <p className="text-5xl font-black mb-6" style={{ color: "#111111" }}>$0</p>
            <ul className="space-y-3 flex-1">
              <li className="flex items-start gap-2 text-sm" style={{ color: "#444444" }}>
                <span className="text-primary font-black mt-0.5">✓</span>
                Intro video — the delegation framework explained
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: "#444444" }}>
                <span className="text-primary font-black mt-0.5">✓</span>
                Delegation checklist — audit your business today
              </li>
            </ul>
            <a href="#" className="mt-8 block">
              <Button variant="outline" className="w-full font-bold border-gray-300 hover:bg-gray-100" style={{ color: "#111111" }}>
                Get Free Access
              </Button>
            </a>
          </motion.div>

          {/* VIP */}
          <motion.div
            className="bg-primary rounded-2xl p-8 flex flex-col relative shadow-2xl shadow-primary/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-black px-4 py-1 rounded-full tracking-widest uppercase shadow-md whitespace-nowrap">
              Most Popular
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/70 mb-4">VIP Seat</span>
            <p className="text-5xl font-black text-white mb-6">$47</p>
            <ul className="space-y-3 text-white/90 text-sm flex-1">
              <li className="flex items-start gap-2"><span className="text-white font-black mt-0.5">✓</span> Everything in Free</li>
              <li className="flex items-start gap-2"><span className="text-white font-black mt-0.5">✓</span> Live webinar access — April 26</li>
              <li className="flex items-start gap-2"><span className="text-white font-black mt-0.5">✓</span> Private community — network with other founders</li>
              <li className="flex items-start gap-2"><span className="text-white font-black mt-0.5">✓</span> Q&A with Kasim live</li>
            </ul>
            <a href="#" className="mt-8 block">
              <Button className="w-full bg-white text-primary font-black hover:bg-white/90 shadow-lg text-base py-6">
                Save My VIP Seat →
              </Button>
            </a>
          </motion.div>

        </div>

        {/* Divisor */}
        <div className="mt-20 border-t border-gray-200" />

        {/* Kasim + outcomes — cierre emocional */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={kasimProfile}
            alt="Kasim Aslam"
            className="w-full max-w-xs rounded-2xl shadow-xl mx-auto"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
          />
          <div>
            <p className="text-xl md:text-2xl font-black mb-6" style={{ color: "#111111" }}>
              When you get this right:
            </p>
            <ul className="space-y-4">
              {[
                "You stop being the bottleneck.",
                "Your team starts thinking for you.",
                "Your business grows without taking more of your time.",
                "You get your life back.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-black mt-0.5 shrink-0">✓</span>
                  <span className="font-semibold text-sm md:text-base" style={{ color: "#222222" }}>{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-medium" style={{ color: "#999999" }}>
              No fluff · No replays · Real system · April 26
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTASection;
