import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export const FAQAccordion: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-3xl w-full mx-auto px-2 sm:px-4 md:px-0">
      <div className="rounded-[2rem] border border-slate-200/70 bg-white/70 backdrop-blur shadow-[0_18px_50px_rgba(2,6,23,0.06)] overflow-hidden">
        {faqs.map((faq, idx) => {
          const isOpen = open === idx;
          return (
            <div key={idx} className="border-b border-slate-200/60 last:border-b-0">
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${idx}`}
                id={`faq-header-${idx}`}
              >
                <span className="text-[15px] sm:text-base font-semibold text-primary">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white"
                >
                  <ChevronDown className="h-4 w-4 text-slate-700" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-header-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 -mt-1 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
