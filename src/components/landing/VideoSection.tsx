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
    <section className="py-20 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-500 border border-gray-300 px-4 py-1.5 rounded-full mb-6">
            Watch this first
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            This is exactly how I think
            <br />
            <span className="text-primary">about delegation.</span>
          </h2>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20 aspect-video bg-black border border-gray-300"
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
