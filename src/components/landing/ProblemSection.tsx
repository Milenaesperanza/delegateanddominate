import { motion } from "framer-motion";
import burnoutImage from "@/assets/burnout.png";

const ProblemSection = () => {
  const problems = [
    "Answering messages you shouldn't be answering",
    "Doing work someone else could do",
    "Making decisions that don't need you",
  ];

  return (
    <section
      className="relative py-20 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 40%, #111111 70%, #1a0000 100%)",
      }}
    >
      {/* Fade superior que conecta con el hero */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-200/20 to-transparent pointer-events-none z-10" />

      {/* Textura sutil de ruido para dar profundidad */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="relative z-20 container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
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
                  style={{ backgroundColor: "#1c1c1c" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                    style={{ backgroundColor: "#8B0000" }}
                  >
                    ✗
                  </span>
                  <span className="text-gray-200 font-semibold text-sm md:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Columna derecha: imagen */}
          <motion.div
            className="flex items-center justify-center md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[320px] md:max-w-[360px] lg:max-w-[390px]">
              <div
                className="overflow-hidden border border-primary/40 shadow-2xl shadow-black/40"
                style={{
                  aspectRatio: "0.72 / 1",
                  borderRadius: "999px",
                  backgroundColor: "#1c1c1c",
                }}
              >
                <img
                  src={burnoutImage}
                  alt="Overworked entrepreneur feeling overwhelmed at desk"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cierre full width — debajo de las dos columnas */}
        <motion.div
          className="mt-16 md:mt-20 border-t border-gray-800 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-4xl">
            <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              The more your business grows…
              <br />
              <span className="text-primary">the worse this gets.</span>
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-widest text-gray-500">
              Growth doesn't fix this. It exposes it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
