import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import kasimProfile from "@/assets/kasim-profile-2.png";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Columna izquierda: Kasim + outcomes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <div className="mb-4">
                <span className="inline-block text-sm font-black uppercase tracking-widest text-white bg-primary px-5 py-2 rounded-full shadow-lg shadow-primary/30">
                  Choose your seat
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight" style={{ color: "#111111" }}>
                This is what changes
                <br />
                <span className="text-primary">when you get this right.</span>
              </h2>
            </div>

            <div className="flex gap-5 items-start">
              <img
                src={kasimProfile}
                alt="Kasim Aslam"
                className="w-28 md:w-36 rounded-xl shrink-0"
                style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}
              />
              <ul className="space-y-3 pt-1">
                {[
                  "You stop being the bottleneck.",
                  "Your team starts thinking for you.",
                  "Your business grows without more of your time.",
                  "You get your life back.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary font-black shrink-0 mt-0.5">✓</span>
                    <span className="font-semibold text-sm md:text-base" style={{ color: "#222222" }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs font-medium" style={{ color: "#aaaaaa" }}>
              No fluff · No replays · Real system · April 26
            </p>
          </motion.div>

          {/* Columna derecha: tickets */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* Free */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                backgroundColor: "#f5f5f5",
                border: "1px solid #e0e0e0",
              }}
            >
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#888888" }}>Free Access</span>
              <p className="text-4xl font-black" style={{ color: "#111111" }}>$0</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm" style={{ color: "#555555" }}>
                  <span className="text-primary font-bold">✓</span> Intro video — delegation framework
                </li>
                <li className="flex items-start gap-2 text-sm" style={{ color: "#555555" }}>
                  <span className="text-primary font-bold">✓</span> Delegation checklist
                </li>
              </ul>
              <a href="#">
                <Button variant="outline" className="w-full font-bold border-gray-300 hover:bg-gray-200" style={{ color: "#111111" }}>
                  Get Free Access
                </Button>
              </a>
            </div>

            {/* VIP */}
            <div className="bg-primary rounded-2xl p-6 flex flex-col gap-3 relative shadow-2xl shadow-primary/30">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-black px-4 py-1 rounded-full tracking-widest uppercase whitespace-nowrap">
                Most Popular
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/70">VIP Seat</span>
              <p className="text-4xl font-black text-white">$47</p>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-start gap-2"><span className="font-bold">✓</span> Everything in Free</li>
                <li className="flex items-start gap-2"><span className="font-bold">✓</span> Live webinar — April 26</li>
                <li className="flex items-start gap-2"><span className="font-bold">✓</span> Private community</li>
                <li className="flex items-start gap-2"><span className="font-bold">✓</span> Q&A with Kasim live</li>
              </ul>
              <a href="#">
                <Button className="w-full bg-white text-primary font-black hover:bg-white/90 shadow-lg text-base py-5 mt-1">
                  Save My VIP Seat →
                </Button>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
