import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { DESTINATIONS } from "../constants";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";

const Destinations: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    if (id) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/60 font-heading text-center">Destinations</p>
        <SectionHeader
          title="Explore Destinations"
          subtitle="Benefits, processes, and pathways for our top education partner countries."
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-10">
        {DESTINATIONS.map((dest) => (
          <motion.div
            key={dest.id}
            id={dest.id}
            className="scroll-mt-32"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-[2.25rem] border border-slate-200/70 bg-white/70 backdrop-blur p-6 md:p-10 shadow-[0_18px_60px_rgba(2,6,23,0.10)]">
              <div className="relative rounded-[1.9rem] overflow-hidden aspect-video lg:h-[520px] border border-slate-200/70 bg-white/60 backdrop-blur">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70 font-heading">Study In</p>
                  <h2 className="text-4xl md:text-5xl font-semibold">{dest.name}</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-3 font-heading">
                    Why Study in {dest.name}?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {dest.description} International students in {dest.name} benefit from cutting-edge curricula and globally recognized qualifications.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-[1.9rem] border border-slate-200/70 bg-white/70 backdrop-blur p-6 shadow-[0_18px_60px_rgba(2,6,23,0.08)]">
                    <h4 className="font-semibold text-primary mb-4 font-heading">Key Benefits</h4>
                    <ul className="space-y-3">
                      {dest.benefits.map((b, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-accent mr-2 mt-1 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.9rem] border border-slate-200/70 bg-white/70 backdrop-blur p-6 shadow-[0_18px_60px_rgba(2,6,23,0.08)]">
                    <h4 className="font-semibold text-accent mb-4 uppercase tracking-[0.2em] font-heading">
                      Application Steps
                    </h4>
                    <ul className="space-y-3">
                      {dest.process.map((p, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600">
                          <span className="w-5 h-5 bg-primary text-white text-[10px] rounded-full flex items-center justify-center mr-2 mt-0.5 shrink-0">
                            {i + 1}
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <button className="bg-accent text-primary px-7 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors flex items-center group shadow-glow">
                    Explore Universities
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-2" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
