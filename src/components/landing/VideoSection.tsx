import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <section
      className="relative py-20 md:py-32"
      style={{
        background: "linear-gradient(180deg, #1a0000 0%, #0d0d0d 30%, #111111 100%)"
      }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">

        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge protagonista */}
          <div className="mb-6">
            <span className="inline-block text-sm md:text-base font-black uppercase tracking-widest text-white bg-primary px-6 py-2.5 rounded-full shadow-lg shadow-primary/30">
              Watch this first
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            This is exactly how I think
            <br />
            <span className="text-primary">about delegation.</span>
          </h2>
        </motion.div>

        {/* Video destacado */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow detrás del video */}
          <div className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl" style={{ background: "radial-gradient(ellipse, #8B000060 0%, transparent 70%)" }} />

          {/* Contenedor del video */}
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-gray-700 shadow-2xl" style={{ backgroundColor: "#000" }}>
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 z-10 flex items-center justify-center group cursor-pointer"
              >
                <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/40">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                </div>
              </button>
            )}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={isPlaying}
              preload="metadata"
            >
              <source src="/videos/delegation-video.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        <motion.p
          className="text-center mt-6 md:mt-8 text-gray-500 text-sm font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          3 minutes that might change how you run your business.
        </motion.p>

      </div>
    </section>
  );
};

export default VideoSection;
