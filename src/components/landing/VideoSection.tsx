import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import kasimProfile from "@/assets/kasim-profile.png";

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
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.p
          className="text-center text-lg md:text-xl font-serif text-secondary-foreground/80 italic mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          This is the exact way I think about delegation.
        </motion.p>

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-foreground"
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
              {/* Thumbnail */}
              <div className="absolute inset-0 bg-foreground/90 flex items-center justify-center">
                <img
                  src={kasimProfile}
                  alt="Video thumbnail"
                  className="absolute h-full object-cover opacity-30"
                />
              </div>
              {/* Play button */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </div>
            </button>
          )}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls={isPlaying}
            preload="none"
          >
            <source src="/videos/delegation-video.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
