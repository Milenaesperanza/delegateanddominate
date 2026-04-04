import { motion } from "framer-motion";

const ShiftSection = () => {
  const parts = [
    { num: "01", title: "Clear Input", desc: "Define exactly what needs to be done", icon: "📋" },
    { num: "02", title: "Clear Output", desc: "Define what success looks like", icon: "🎯" },
    { num: "03", title: "Real Autonomy", desc: "Let your team own the process", icon: "🚀" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-[#E8E8E8]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
            Delegation isn't about<br />
            <span className="text-primary">dumping tasks.</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 font-serif">
            That's why it's not working for you.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {parts.map((part, i) => (
            <motion.div
              key={i}
              className="bg-white border-2 border-foreground/10 rounded-2xl p-8 text-center hover:border-primary/40 hover:shadow-2xl transition-all duration-300 group shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">{part.icon}</div>
              <span className="text-4xl font-black text-primary group-hover:text-primary/80 transition-colors">{part.num}</span>
              <h3 className="mt-3 text-xl font-bold text-foreground">{part.title}</h3>
              <p className="mt-2 text-sm text-foreground/60 font-serif">{part.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-foreground/60 font-serif mb-6">Most people skip all three. So they stay stuck. And blame their team.</p>
          <p className="text-2xl md:text-3xl font-black text-foreground leading-snug">
            If your business needs you to run… you don't have a business.{" "}
            <span className="text-primary">You have a job.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ShiftSection;
