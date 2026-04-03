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
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary to-[#0D0D0D]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.p
          className="text-center text-lg md:text-xl font-serif text-white/80 italic mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          This is the exact way I think about delegation.
        </motion.p>

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 aspect-video bg-black border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 z-10 flex items-center justify-center group cursor-pointer"
            >
              <div className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/40">
                <Play className="w-8 h-8 text-white ml-1" />
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
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
