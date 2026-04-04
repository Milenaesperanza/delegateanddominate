import { motion } from "framer-motion";

const ProblemSection = () => {
  const problems = [
    "Answering messages you shouldn't be answering",
    "Doing work someone else could do",
    "Making decisions that don't need you",
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-6 border border-primary/30 px-4 py-1.5 rounded-full">
            Sound familiar?
          </span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mt-4">
            You're working too much.
            <br />
            <span className="text-primary">And somehow… still behind.</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-500 leading-relaxed max-w-md mx-auto">
            Because you're spending your time on this:
          </p>

          <div className="mt-8 md:mt-10 space-y-4 max-w-md mx-auto">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-200 rounded-xl px-5 py-4 text-left flex items-center gap-4 shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
              >
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">✗</span>
                <span className="text-gray-800 font-semibold text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 md:mt-16 bg-white border border-gray-200 rounded-2xl px-6 md:px-8 py-8 md:py-10 max-w-lg mx-auto shadow-lg text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-l-4 border-primary pl-5 md:pl-6">
              <p className="text-xl md:text-3xl font-black text-gray-900 leading-snug">
                The more your business grows…
                <br />
                <span className="text-primary">the worse this gets.</span>
              </p>
              <p className="mt-4 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400">
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
