import { motion } from "framer-motion";

const ProblemSection = () => {
  const problems = [
    "Answering messages you shouldn't be answering",
    "Doing work someone else could do",
    "Making decisions that don't need you",
  ];

  return (
    <section className="py-20 md:py-28 bg-foreground">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-background leading-tight">
            You're working too much.
            <br />
            <span className="text-primary">And somehow… still behind.</span>
          </h2>

          <p className="mt-8 text-lg text-background/70 font-serif">Because you're:</p>

          <ul className="mt-6 space-y-4 text-left max-w-md mx-auto">
            {problems.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-background/80"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
              >
                <span className="text-primary mt-1 text-lg">✗</span>
                <span className="font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-12 space-y-4">
            <p className="text-background/60 font-serif italic">
              And here's the part nobody tells you:
            </p>
            <p className="text-xl md:text-2xl font-bold text-background">
              The more your business grows…
              <br />
              <span className="text-primary">the worse this gets.</span>
            </p>
            <p className="text-background/50 text-sm font-semibold uppercase tracking-wide mt-6">
              Growth doesn't fix this. It exposes it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
