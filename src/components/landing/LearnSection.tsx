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
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-300 border border-gray-500 px-4 py-1.5 rounded-full mb-6">
            What you'll learn
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            This isn't theory.
            <br />
            <span className="text-primary">It's the system I used to build and exit.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 border border-gray-600 rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
              <div className="text-3xl mb-3">{mod.icon}</div>
              <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                Module {i + 1}
              </span>
              <h3 className="text-lg font-bold text-white mb-4">{mod.title}</h3>
              <ul className="space-y-3">
                {mod.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-primary mt-0.5 font-bold">✓</span>
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
