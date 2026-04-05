import { motion } from "framer-motion";

const ProblemSection = () => {
  const problems = [
    "Answering messages you shouldn't be answering",
    "Doing work someone else could do",
    "Making decisions that don't need you",
  ];

  return (
    <section className="relative py-20 md:py-32" style={{ backgroundColor: "#0a0a0a" }}>

      {/* Fade superior que conecta con el hero */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-10" />

      <div className="relative z-20 container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Columna izquierda: texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge protagonista */}
            <div className="mb-8">
              <span className="inline-block text-sm md:text-base font-black uppercase tracking-widest text-white bg-primary px-6 py-2.5 rounded-full shadow-lg shadow-primary/30">
                Sound familiar?
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              You're working too much.
              <br />
              <span className="text-primary">And somehow… still behind.</span>
            </h2>

            <p className="mt-6 text-base text-gray-400 leading-relaxed">
              Because you're spending your time on this:
            </p>

            <div className="mt-6 space-y-4">
              {problems.map((item, i) => (
                <motion.div
                  key={i}
                  className="border border-gray-800 rounded-xl px-5 py-4 flex items-center gap-4"
                  style={{ backgroundColor: "#141414" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                >
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0" style={{ backgroundColor: "#8B0000" }}>✗</span>
                  <span className="text-gray-200 font-semibold text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Cierre destacado — sin card */}
            <motion.div
              className="mt-12 pl-6 border-l-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-2xl md:text-3xl font-black text-white leading-snug">
                The more your business grows…
                <br />
                <span className="text-primary">the worse this gets.</span>
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-500">
                Growth doesn't fix this. It exposes it.
              </p>
            </motion.div>
          </motion.div>

          {/* Columna derecha: imagen (placeholder hasta Ideogram) */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* REEMPLAZAR con imagen final generada en Ideogram */}
            <div
              className="w-full aspect-square max-w-sm rounded-2xl border border-gray-800 flex items-center justify-center"
              style={{ backgroundColor: "#141414" }}
            >
              <p className="text-gray-600 text-sm font-bold uppercase tracking-widest text-center px-6">
                Imagen pendiente
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
