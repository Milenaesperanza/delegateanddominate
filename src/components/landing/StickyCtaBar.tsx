import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const StickyCtaBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950 backdrop-blur-md border-t border-gray-800 py-3 px-4 md:hidden"
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#tickets">
            <Button variant="cta" size="lg" className="w-full py-5">
              👉 Save My Seat — $47
            </Button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCtaBar;
