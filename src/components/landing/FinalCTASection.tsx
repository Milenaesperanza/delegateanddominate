import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import kasimProfile from "@/assets/kasim-profile-2.png";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        {/* Headline */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-500 border border-gray-700 px-4 py-1.5 rounded-full mb-6">
            Choose your seat
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            This is what changes
            <br />
            <span className="text-primary">when you get this right.</span>
          </h2>
        </motion.div>

        {/* Tickets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">

          {/* Free */}
          <motion.div
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 md:p-8 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Free Access</span>
            <p className="text-4xl font-black text-white mb-6">$0</p>
            <ul className="space-y-3 text-gray-400 text-sm flex-1">
              <li className="flex items-start gap-2">
                <span className="text-primary font-black mt-0.5">✓</span>
                Intro video — the delegation framework explained
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-black mt-0.5">✓</span>
                Delegation checklist — audit your business today
              </li>
            </ul>
            <a href="#" className="mt-8 block">
              <Button variant="outline" className="w-full font-bold border-gray-600 text-white hover:bg-gray-800">
                Get Free Access
              </Button>
            </a>
          </motion.div>

          {/* VIP */}
          <motion.div
            className="bg-primary rounded-2xl p-6 md:p-8 flex flex-col relative shadow-2xl shadow-primary/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-black px-4 py-1 rounded-full tracking-widest uppercase shadow-md whitespace-nowrap">
              Most Popular
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/70 mb-4">VIP Seat</span>
            <p className="text-4xl font-black text-white mb-6">$47</p>
            <ul className="space-y-3 text-white/90 text-sm flex-1">
              <li className="flex items-start gap-2">
                <span className="text-white font-black mt-0.5">✓</span>
                Everything in Free
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white font-black mt-0.5">✓</span>
                Live webinar access — April 26
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white font-black mt-0.5">✓</span>
                Private community — network with other founders
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white font-black mt-0.5">✓</span>
                Q&A with Kasim live
              </li>
            </ul>
            <a href="#" className="mt-8 block">
              <Button className="w-full bg-white text-primary font-black hover:bg-white/90 shadow-lg">
                Save My VIP Seat →
              </Button>
            </a>
          </motion.div>

        </div>

        {/* Kasim + outcomes */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={kasimProfile}
            alt="Kasim Aslam"
            className="w-full max-w-[260px] md:max-w-xs rounded-2xl shadow-2xl shadow-black/50 mx-auto"
          />
          <div>
            <p className="text-lg md:text-xl font-black text-white mb-5 md:mb-6">
              When you get this right:
            </p>
            <ul className="space-y-4">
              {[
                "You stop being the bottleneck.",
                "Your team starts thinking for you.",
                "Your business grows without taking more of your time.",
                "You get your life back.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-primary font-black mt-0.5 shrink-0">✓</span>
                  <span className="font-semibold text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-500 text-sm">That's the whole point.</p>
          </div>
        </motion.div>

        {/* Final trust line */}
        <motion.p
          className="text-center mt-12 md:mt-16 text-gray-600 text-sm font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          No fluff · No replays · Real system · April 26
        </motion.p>

      </div>
    </section>
  );
};

export default FinalCTASection;
