import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { DESTINATIONS } from "../constants";
import { ArrowRight, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";

const Destinations: React.FC = () => {
  const location = useLocation();
  const [openId, setOpenId] = useState<string | null>(null);

  const destIndex = useMemo(() => {
    const map = new Map<string, number>();
    DESTINATIONS.forEach((d, i) => map.set(d.id, i));
    return map;
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    if (id) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
      // auto-open details when navigated via query param
      if (destIndex.has(id)) setOpenId(id);
    }
  }, [location, destIndex]);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    // NOTE: Some layouts wrap pages in a narrow max-width container.
    // The "breakout" wrapper below forces this page to use the full viewport width.
    // Also add flex-none/min-w so it can't shrink if a parent uses flex + items-center.
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen min-w-[100vw] flex-none py-10 sm:py-14">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-[280px] w-[280px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-10 sm:mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/60 font-heading text-center">
            Destinations
          </p>
          <SectionHeader
            title="Explore Destinations"
            subtitle="Compare benefits, requirements, and application pathways for our partner countries."
          />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm text-slate-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-accent" />
              Tap “View details” for steps & benefits
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-2 sm:gap-7 pb-1 justify-center">
          {DESTINATIONS.map((dest, i) => {
            const isOpen = openId === dest.id;
            const quickBenefits = dest.benefits?.slice?.(0, 3) ?? [];

            return (
              <motion.article
                key={dest.id}
                id={dest.id}
                className="scroll-mt-28"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="group h-full rounded-[28px] border border-slate-200/70 bg-white/75 backdrop-blur shadow-[0_18px_60px_rgba(2,6,23,0.08)] overflow-hidden">
                  {/* image */}
                  <div className="relative aspect-[16/10]">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                      <div className="text-white">
                        <p className="text-[11px] uppercase tracking-[0.26em] text-white/70 font-heading">
                          Study in
                        </p>
                        <h2 className="text-2xl font-semibold leading-tight drop-shadow-sm">
                          {dest.name}
                        </h2>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggle(dest.id)}
                        className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-white transition"
                        aria-expanded={isOpen}
                        aria-controls={`${dest.id}-details`}
                      >
                        View details
                        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  </div>

                  {/* summary */}
                  <div className="p-5">
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {dest.description}
                    </p>

                    {quickBenefits.length > 0 && (
                      <div className="mt-4 grid gap-2">
                        {quickBenefits.map((b: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                            <span className="line-clamp-2">{b}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* expandable */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`${dest.id}-details`}
                          key="details"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 grid gap-4">
                            <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4">
                              <h3 className="text-sm font-semibold text-primary font-heading">
                                Key Benefits
                              </h3>
                              <ul className="mt-2 space-y-2">
                                {dest.benefits.map((b: string, idx: number) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4">
                              <h3 className="text-sm font-semibold text-primary font-heading">
                                Application Steps
                              </h3>
                              <ol className="mt-2 space-y-2">
                                {dest.process.map((p: string, idx: number) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white text-[11px]">
                                      {idx + 1}
                                    </span>
                                    {p}
                                  </li>
                                ))}
                              </ol>
                            </div>

                            <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-white/70 p-4">
                              <div>
                                <p className="text-sm font-semibold text-primary">Ready to apply?</p>
                                <p className="text-xs text-slate-600">
                                  We’ll shortlist universities & guide the visa process.
                                </p>
                              </div>
                              <a
                                href="/apply"
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
                              >
                                Apply now
                                <ArrowRight className="h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
