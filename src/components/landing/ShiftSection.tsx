import { motion } from "framer-motion";
import burnoutMan from "@/assets/burnout-man.png";

const ShiftSection = () => {
  const parts = [
    { num: "01", title: "Clear Input", desc: "Define exactly what needs to be done", icon: "📋" },
    { num: "02", title: "Clear Output", desc: "Define what success looks like", icon: "🎯" },
    { num: "03", title: "Real Autonomy", desc: "Let your team own the process", icon: "🚀" },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">

      {/* Imagen de fondo con blur */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${burnoutMan})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px) brightness(0.5)",
          transform: "scale(1.05)"
        }}
      />

      {/* Overlay gradiente */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(85,85,85,0.7) 0%, rgba(0,0,0,0.75) 50%, rgba(187,187,187,0.6) 100%)"
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <span className="inline-block text-sm md:text-base font-black uppercase tracking-widest text-white bg-primary px-6 py-2.5 rounded-full shadow-lg shadow-primary/30">
              The system
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Delegation isn't about
            <br />
            <span className="text-primary">dumping tasks.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg font-semibold text-white/90">
            That's why it's not working for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {parts.map((part, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{part.icon}</div>
              <span className="text-4xl md:text-5xl font-black text-primary">{part.num}</span>
              <h3 className="mt-3 text-lg md:text-xl font-bold text-white">{part.title}</h3>
              <p className="mt-2 text-sm font-medium text-white/80">{part.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 md:mt-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-6 text-sm md:text-base font-semibold text-white/80">
            Most people skip all three. So they stay stuck. And blame their team.
          </p>
          <p className="text-xl md:text-3xl font-black leading-snug text-white">
            If your business needs you to run…{" "}
            <span className="text-primary">you don't have a business. You have a job.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ShiftSection;
