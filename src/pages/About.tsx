import React from "react";
import { motion, easeInOut } from "framer-motion";
import { Target, ShieldCheck, Heart, Award } from "lucide-react";
import { IMAGES } from "../assets";
import { SectionHeader } from "../components/SectionHeader";
import logo from "../assets/Logo.jpeg";

const cardIn = {
  initial: { opacity: 0, y: 18, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.55, ease: [easeInOut] },
  viewport: { once: true, amount: 0.2 },
};

const About: React.FC = () => {
  const team = [
    { name: "Nimal Silva", role: "Founder & Director", img: IMAGES.team.member1 },
    { name: "Priyani Perera", role: "Head of Counseling", img: IMAGES.team.member2 },
    { name: "Arjun Fernando", role: "Senior Visa Specialist", img: IMAGES.team.member3 },
    { name: "Kavindi Gunaratne", role: "Student Relations Manager", img: IMAGES.team.member4 },
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="CJ Global Visa logo"
            className="h-16 w-16 rounded-2xl border border-accent/40 shadow-glow object-contain bg-white"
          />
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary/60 font-heading text-center">About</p>
        <SectionHeader
          title="CJ Global"
          subtitle="A Sri Lankan consultancy focused on ethical, tailored guidance for students pursuing international education."
        />
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div {...cardIn} className="rounded-[2rem] border border-slate-200/70 bg-white/70 backdrop-blur p-8 md:p-10 shadow-[0_18px_60px_rgba(2,6,23,0.08)]">
            <div className="w-12 h-12 rounded-2xl bg-accent/15 text-primary flex items-center justify-center mb-6 border border-accent/20">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-primary font-heading">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To empower Sri Lankan students with the clarity and support needed to access world-class education through ethical guidance and precise execution.
            </p>
          </motion.div>

          <motion.div {...cardIn} className="rounded-[2rem] border border-slate-200/70 bg-white/70 backdrop-blur p-8 md:p-10 shadow-[0_18px_60px_rgba(2,6,23,0.08)]">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 border border-slate-200/70">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-primary font-heading">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be Sri Lanka’s most trusted study-abroad partner, known for integrity, expertise, and student outcomes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 border-y border-slate-200/50 bg-white/30 backdrop-blur-[2px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-primary/60 font-heading">Why Us</p>
            <h2 className="text-4xl font-bold text-primary mt-4 font-heading">Why Choose CJ Global?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: Award, title: "Expert Knowledge", desc: "Visa expertise across top destinations with clear, structured guidance." },
              { Icon: Heart, title: "Student-First", desc: "Every recommendation is aligned to your academic and financial goals." },
              { Icon: ShieldCheck, title: "Ethical Standards", desc: "Transparent processes with no hidden fees or misleading promises." },
            ].map((x) => (
              <motion.div
                key={x.title}
                {...cardIn}
                className="rounded-[2rem] border border-slate-200/70 bg-white/70 backdrop-blur p-8 shadow-[0_18px_60px_rgba(2,6,23,0.08)] text-center"
              >
                <x.Icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-primary font-heading">{x.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{x.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/60 font-heading">Leadership</p>
        <SectionHeader title="Our Leadership Team" subtitle="Experienced professionals dedicated to your success." align="center" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <motion.div key={member.name} {...cardIn} className="group">
              <div className="relative overflow-hidden rounded-[1.9rem] aspect-[3/4] border border-slate-200/70 bg-white/70 backdrop-blur shadow-[0_18px_60px_rgba(2,6,23,0.08)]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-primary font-heading">{member.name}</h3>
                <p className="text-accent font-semibold uppercase tracking-widest text-xs">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
