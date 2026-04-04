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
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-500 border border-gray-700 px-4 py-1.5 rounded-full mb-6">
            Why trust Kasim
          </span>
          <p className="text-gray-400 italic text-lg">
            I didn't learn this from a book.
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
            I learned it the hard way.
          </h2>
        </motion.div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <p className="text-4xl md:text-5xl font-black text-primary">{stat.value}</p>
              <p className="mt-2 text-gray-400 text-sm font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">I've:</p>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl px-6 md:px-8 py-6 md:py-8 max-w-md mx-auto">
            <ul className="space-y-4">
              {achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white text-left">
                  <span className="text-primary font-black shrink-0 mt-0.5">✓</span>
                  <span className="font-semibold text-sm md:text-base">{item}</span>
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
