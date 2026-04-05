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
    <section
      className="relative py-20 md:py-32"
      style={{
        background: "linear-gradient(180deg, #bbbbbb 0%, #dedede 50%, #f5f5f5 100%)"
      }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <span className="inline-block text-sm md:text-base font-black uppercase tracking-widest text-white bg-primary px-6 py-2.5 rounded-full shadow-lg shadow-primary/30">
              Why trust Kasim
            </span>
          </div>
          <p className="italic text-lg font-medium" style={{ color: "#333333" }}>
            I didn't learn this from a book.
          </p>
          <h2 className="text-3xl md:text-4xl font-black mt-2" style={{ color: "#111111" }}>
            I learned it the hard way.
          </h2>
        </motion.div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(0,0,0,0.10)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <p className="text-4xl md:text-5xl font-black text-primary">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold" style={{ color: "#444444" }}>{stat.label}</p>
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
          <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#666666" }}>I've:</p>
          <div
            className="rounded-2xl px-6 md:px-8 py-6 md:py-8 max-w-md mx-auto"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(0,0,0,0.10)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
            }}
          >
            <ul className="space-y-4">
              {achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-left">
                  <span className="text-primary font-black shrink-0 mt-0.5">✓</span>
                  <span className="font-semibold text-sm md:text-base" style={{ color: "#111111" }}>{item}</span>
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
