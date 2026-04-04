import { motion } from "framer-motion";

const ProblemSection = () => {
  const problems = [
    "Answering messages you shouldn't be answering",
    "Doing work someone else could do",
    "Making decisions that don't need you",
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#0D0D0D] to-secondary">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            You're working too much.
            <br />
            <span className="text-primary">And somehow… still behind.</span>
          </h2>

          <p className="mt-8 text-lg text-white/70 font-serif">Because you're:</p>

          <div className="mt-8 space-y-4 max-w-md mx-auto">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-6 py-4 text-left flex items-start gap-3 shadow-lg shadow-black/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
              >
                <span className="text-primary mt-0.5 text-lg font-bold">✗</span>
                <span className="text-white font-semibold">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 space-y-4">
            <p className="text-white/60 font-serif italic">
              And here's the part nobody tells you:
            </p>
            <div className="bg-white/15 backdrop-blur-md border border-primary/40 rounded-2xl px-8 py-8 max-w-lg mx-auto shadow-2xl shadow-primary/20">
              <p className="text-xl md:text-2xl font-bold text-white">
                The more your business grows…
                <br />
                <span className="text-primary">the worse this gets.</span>
              </p>
              <p className="text-white/60 text-sm font-semibold uppercase tracking-wide mt-4">
                Growth doesn't fix this. It exposes it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
