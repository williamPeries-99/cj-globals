import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.jpeg";

const nav = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Destinations", path: "/destinations" },
  { name: "Resources", path: "/resources" },
  { name: "Apply Now", path: "/apply", isCTA: true },
];

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const active = useMemo(() => pathname || "/", [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={false}
        className={[
          "fixed top-0 inset-x-0 z-50 border-b font-heading",
          scrolled
            ? "bg-white/70 border-slate-200/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
            : "bg-white/50 border-slate-200/50 backdrop-blur-md",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[72px] flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="CJ Global Logo"
                className="h-10 w-10 rounded-2xl object-cover border border-white/60 shadow-sm"
              />
              <div className="leading-tight">
                <div className="text-[15px] sm:text-base font-semibold tracking-wide text-primary">
                  CJ GLOBAL <span className="text-accent">VISA</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-primary/45">
                  Study abroad consultancy
                </div>
              </div>
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <div className="relative flex items-center gap-1 rounded-full border border-slate-200/70 bg-white/60 px-1 py-1 backdrop-blur">
                {nav
                  .filter((x) => !x.isCTA)
                  .map((link) => {
                    const isActive = active === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={[
                          "relative px-4 py-2 rounded-full text-sm font-semibold tracking-tight transition-colors",
                          isActive
                            ? "text-primary"
                            : "text-slate-600 hover:text-primary",
                        ].join(" ")}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="activePill"
                            className="absolute inset-0 rounded-full bg-slate-900/[0.06] ring-1 ring-slate-900/[0.08]"
                            transition={{
                              type: "spring",
                              stiffness: 420,
                              damping: 34,
                            }}
                          />
                        )}
                        <span className="relative z-10">{link.name}</span>
                      </Link>
                    );
                  })}
              </div>

              <Link
                to="/apply"
                className="ml-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-accent text-primary text-sm font-semibold shadow-glow hover:bg-primary hover:text-white transition-colors"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur hover:bg-white transition"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-slate-700" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-slate-950/30 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="fixed right-0 top-0 bottom-0 z-[70] w-[86%] max-w-sm bg-white border-l border-slate-200 shadow-2xl"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 420, damping: 38 }}
              role="dialog"
              aria-modal="true"
            >
              <div className="h-[72px] px-5 flex items-center justify-between border-b border-slate-100">
                <div className="text-sm font-semibold text-primary">Menu</div>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-slate-700" />
                </button>
              </div>

              <div className="p-5">
                <div className="space-y-2">
                  {nav.map((link) => {
                    const isActive = active === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={[
                          "flex items-center justify-between px-4 py-3 rounded-2xl border",
                          link.isCTA
                            ? "bg-accent text-primary border-accent/40 font-semibold"
                            : isActive
                            ? "bg-slate-900/[0.05] border-slate-200 text-primary"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50",
                        ].join(" ")}
                        onClick={() => setOpen(false)}
                      >
                        <span className="font-semibold">{link.name}</span>
                        {isActive && !link.isCTA && (
                          <motion.span
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-[11px] px-2 py-1 rounded-full bg-white border border-slate-200 text-slate-600"
                          >
                            Active
                          </motion.span>
                        )}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    Quick note
                  </div>
                  <div className="mt-2 text-sm text-slate-700 leading-relaxed">
                    We guide you from consultation → admission → visa → departure.
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  );
};

export default Navbar;
