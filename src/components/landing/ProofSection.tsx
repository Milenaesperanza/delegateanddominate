import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Active Clients" },
  { value: "416%", label: "Year-Over-Year Growth" },
  { value: "$100M+", label: "Client Revenue Generated" },
];

const achievements = [
  "Built 6 multi-7-figure businesses",
  "Had multiple exits (one 8-figure)",
  "Helped hundreds of founders delegate properly",
];

const ProofSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#0D0D0D] to-secondary">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/60 font-serif italic text-lg">
            I didn't learn this from a book.
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
            I learned it the hard way.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 shadow-xl shadow-black/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <p className="text-4xl md:text-5xl font-black text-primary">{stat.value}</p>
              <p className="mt-2 text-white/80 text-sm font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/70 text-sm font-semibold uppercase tracking-wide mb-6">I've:</p>
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-8 py-6 max-w-md mx-auto shadow-xl">
            <ul className="space-y-3">
              {achievements.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <span className="text-green-400 font-bold">✓</span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
