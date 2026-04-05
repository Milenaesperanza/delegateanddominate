import { motion } from "framer-motion";

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
    title: "Build a Business That Runs Without You",
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
    <section
      className="relative py-20 md:py-32"
      style={{
        background: "linear-gradient(180deg, #111111 0%, #2a2a2a 40%, #555555 100%)"
      }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <span className="inline-block text-sm md:text-base font-black uppercase tracking-widest text-white bg-primary px-6 py-2.5 rounded-full shadow-lg shadow-primary/30">
              What you'll learn
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            This isn't theory.
            <br />
            <span className="text-primary">It's the system I used to build and exit.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.10)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              <div className="text-2xl md:text-3xl mb-3">{mod.icon}</div>
              <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3 md:mb-4">
                Module {i + 1}
              </span>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4" style={{ color: "#ffffff" }}>{mod.title}</h3>
              <ul className="space-y-3">
                {mod.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#dddddd" }}>
                    <span className="text-primary mt-0.5 font-bold shrink-0">✓</span>
                    <span>{item}</span>
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
