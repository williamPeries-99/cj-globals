import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, BookOpen, FileCheck, GraduationCap, PlaneTakeoff, Info } from "lucide-react";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { IMAGES } from "../assets";
import { SectionHeader } from "../components/SectionHeader";

const Services: React.FC = () => {
  const icons: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-7 h-7" />,
    BookOpen: <BookOpen className="w-7 h-7" />,
    FileCheck: <FileCheck className="w-7 h-7" />,
    GraduationCap: <GraduationCap className="w-7 h-7" />,
    PlaneTakeoff: <PlaneTakeoff className="w-7 h-7" />,
  };

  const serviceImages = [
    IMAGES.services.consultation,
    IMAGES.services.application,
    IMAGES.services.visa,
    IMAGES.services.scholarship,
    IMAGES.services.departure,
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/60 font-heading text-center">Services</p>
        <SectionHeader
          title="Our Expert Services"
          subtitle="Strategic, end-to-end support for your international education journey."
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-10">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-[2.25rem] border border-slate-200/70 bg-white/70 backdrop-blur p-6 md:p-10 shadow-[0_18px_60px_rgba(2,6,23,0.10)] ${
              index % 2 === 0 ? "" : "lg:[&>div:first-child]:order-2"
            }`}
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 text-primary flex items-center justify-center border border-accent/20">
                {/* icon string mapping is type-safe */}
                {icons[service.icon] || <Info className="w-7 h-7" />}
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-primary font-heading">{service.title}</h2>

              <p className="text-slate-600 leading-relaxed">
                {service.description} We offer specialized guidance for{" "}
                {index === 0
                  ? "finding the perfect university fit"
                  : index === 1
                  ? "navigating complex documentation"
                  : index === 2
                  ? "securing your student visa hassle-free"
                  : index === 3
                  ? "identifying financial aid"
                  : "settling into your new life abroad"}
                .
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {["Profile Assessment", "Doc Support", "Mock Interviews", "Pre-departure Briefing"].map((t) => (
                  <div key={t} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent mr-3" />
                    <span className="font-semibold">{t}</span>
                  </div>
                ))}
              </div>

              <Link to="/apply" className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors">
                Book a consultation <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="relative rounded-[1.9rem] overflow-hidden border border-slate-200/70 bg-white/60 backdrop-blur shadow-[0_18px_60px_rgba(2,6,23,0.08)]">
              <img src={serviceImages[index]} alt={service.title} className="w-full h-72 md:h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
