import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import kasimProfile from "@/assets/kasim-profile-2.png";
import TicketModal from "@/components/landing/TicketModal";

const FinalCTASection = () => {
  const [openFree, setOpenFree] = useState(false);
  const [openVip, setOpenVip] = useState(false);

  const FREE_EMBED_URL = "https://api.leadconnectorhq.com/widget/form/oY3OAgseHC3FhWkXILyS";
  const VIP_EMBED_URL = "https://api.leadconnectorhq.com/widget/form/ZZPPijOKNcbAqg2iFtxK";

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)" }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full shadow-lg shadow-primary/30 mb-6">
                Final Call · April 26 · Only 100 Seats
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" style={{ color: "#111111" }}>
                Stop being the bottleneck.
                <span className="block text-primary mt-1">
                  Learn to delegate like a real CEO.
                </span>
              </h2>

              <p className="mt-6 text-base md:text-lg max-w-xl leading-relaxed" style={{ color: "#444444" }}>
                If you keep doing everything yourself, your business stays stuck
                around you. This webinar shows you the delegation system Kasim used
                to build and scale without drowning in operations.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                {/* Free */}
                <div className="rounded-2xl p-5" style={{ backgroundColor: "#f0f0f0", border: "1px solid #e0e0e0" }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#888888" }}>Free</p>
                  <p className="text-2xl font-black" style={{ color: "#111111" }}>$0</p>
                  <ul className="mt-3 space-y-2 text-sm" style={{ color: "#555555" }}>
                    <li>✓ Intro video</li>
                    <li>✓ Delegation checklist</li>
                  </ul>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      className="w-full font-bold border-gray-300 hover:bg-gray-200"
                      style={{ color: "#111111" }}
                      onClick={() => setOpenFree(true)}
                    >
                      Get Free Access
                    </Button>
                  </div>
                </div>

                {/* VIP */}
                <div className="rounded-2xl bg-primary p-5 shadow-2xl shadow-primary/30 relative">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                    Most Popular
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">VIP</p>
                  <p className="text-2xl font-black text-white">$47</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/90">
                    <li>✓ Everything in Free</li>
                    <li>✓ Live webinar access</li>
                    <li>✓ Private community</li>
                  </ul>
                  <div className="mt-4">
                    <Button
                      className="w-full bg-white text-primary font-black hover:bg-white/90 shadow-lg"
                      onClick={() => setOpenVip(true)}
                    >
                      Save My VIP Seat
                    </Button>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs font-medium" style={{ color: "#aaaaaa" }}>
                No fluff · No replays · Real system
              </p>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden" style={{ border: "1px solid #e0e0e0", boxShadow: "0 20px 60px rgba(0,0,0,0.10)" }}>
                <img
                  src={kasimProfile}
                  alt="Kasim Aslam"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <TicketModal
        open={openFree}
        onOpenChange={setOpenFree}
        title="Get Free Access"
        embedUrl={FREE_EMBED_URL}
      />

      <TicketModal
        open={openVip}
        onOpenChange={setOpenVip}
        title="Save My VIP Seat"
        embedUrl={VIP_EMBED_URL}
      />
    </section>
  );
};

export default FinalCTASection;
