import { motion } from "framer-motion";
import kasimTalking from "@/assets/kasim-talking.jpg";

const modules = [
  {
    title: "What to Delegate First",
    icon: "⚡",
    items: [
      "The fastest way to free 10–40 hours/month",
      "Why your inbox is the first thing to go",
      "How to stop being the bottleneck",
    ],
  },
  {
    title: "How to Delegate Properly",
    icon: "🔲",
    items: [
      'The "black box" method',
      "Why most delegation fails (and how to fix it)",
      "How to communicate without micromanaging",
    ],
  },
  {
    title: "How to Build a Business That Runs Without You",
    icon: "🏗️",
    items: [
      "How to turn your assistant into a leader",
      "How to scale without burning out",
      "How delegation leads to real freedom",
    ],
  },
];

const LearnSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${kasimTalking})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/75 to-[#1a1a1a]/80" />

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-lg">
            This isn't theory.
            <br />
            <span className="text-primary">It's the system I used to build and exit.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 relative overflow-hidden group shadow-xl shadow-black/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Gradient accent top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/40" />
              
              <div className="text-3xl mb-3">{mod.icon}</div>
              <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4 shadow-md">
                Module {i + 1}
              </span>
              <h3 className="text-lg font-bold text-white mb-4">{mod.title}</h3>
              <ul className="space-y-3">
                {mod.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-white/90">
                    <span className="text-green-400 mt-0.5 font-bold">✓</span>
                    <span className="font-serif">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
