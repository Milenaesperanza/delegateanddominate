import { motion } from "framer-motion";

const ProblemSection = () => {
  const problems = [
    "Answering messages you shouldn't be answering",
    "Doing work someone else could do",
    "Making decisions that don't need you",
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-6">
            Sound familiar?
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            You're working too much.
            <br />
            <span className="text-primary">And somehow… still behind.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Because you're spending your time on this:
          </p>

          <div className="mt-8 space-y-3 max-w-md mx-auto">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-left flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
              >
                <span className="text-primary font-black text-lg mt-0.5">✗</span>
                <span className="text-gray-800 font-semibold">{item}</span>
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
            <div className="border-l-4 border-primary pl-6 text-left max-w-lg mx-auto">
              <p className="text-xl md:text-2xl font-black text-gray-900 leading-snug">
                The more your business grows…
                <br />
                <span className="text-primary">the worse this gets.</span>
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-widest text-gray-400">
                Growth doesn't fix this. It exposes it.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
