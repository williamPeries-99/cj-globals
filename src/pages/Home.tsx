import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { DESTINATIONS, SERVICES, TESTIMONIALS } from "../constants";
import { Button } from "../components/Button";
import { FAQAccordion } from "../components/FAQAccordion";
import { TestimonialSlider } from "../components/TestimonialSlider";
import { SectionHeader } from "../components/SectionHeader";

const faqs = [
  {
    question: "How do I start my study abroad application?",
    answer: 'Click "Apply Now" and fill out the form. Our counselors will contact you to guide you through every step.',
  },
  {
    question: "Which countries can I apply to?",
    answer: "We help students apply to Australia, UK, USA, Canada, New Zealand, Ireland, and more.",
  },
  {
    question: "Do you offer visa support?",
    answer: "Yes! We provide full visa guidance, document checks, and interview preparation.",
  },
  {
    question: "Are there scholarships available?",
    answer: "Absolutely. We help you find and apply for scholarships based on your profile and destination.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: "easeInOut" } },
};

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="pt-10 pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center"
          >
            <div className="text-left">
              <motion.div variants={item} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/60 font-heading">
                <Sparkles className="h-4 w-4 text-accent" />
                Sri Lanka’s Study Abroad Partner
              </motion.div>

              <motion.h1 variants={item} className="mt-5 text-5xl md:text-6xl font-bold leading-tight text-primary font-heading">
                Global education,
                <br />
                <span className="text-accent">guided with precision</span>.
              </motion.h1>

              <motion.p variants={item} className="mt-5 text-lg md:text-xl text-slate-600 max-w-xl">
                We help Sri Lankan students secure placements in Australia, UK, USA, Canada, and beyond with tailored counseling,
                visa support, and university admissions.
              </motion.p>

              <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button as={Link} to="/apply" variant="primary" className="text-base px-8 py-4">
                  Apply Now <ArrowRight className="ml-1" />
                </Button>
                <Button as={Link} to="/services" variant="outline" className="text-base px-8 py-4">
                  Explore Services
                </Button>
              </motion.div>

              <motion.div variants={item} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  { icon: <ShieldCheck className="h-4 w-4 text-accent" />, text: "Ethical guidance — no hidden promises" },
                  { icon: <CheckCircle2 className="h-4 w-4 text-accent" />, text: "Full support: admission → visa → departure" },
                ].map((x) => (
                  <div key={x.text} className="rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur px-4 py-3 shadow-[0_12px_30px_rgba(2,6,23,0.06)]">
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-semibold">
                      {x.icon}
                      {x.text}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* hero image */}
            <motion.div variants={item} className="relative">
              <div className="rounded-[2.5rem] overflow-hidden border border-slate-200/70 bg-white/70 backdrop-blur shadow-[0_18px_60px_rgba(2,6,23,0.10)]">
                <img src={DESTINATIONS[0]?.image} alt="Study abroad" className="w-full h-[440px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-slate-200/70 bg-white/75 backdrop-blur px-6 py-4 shadow-[0_18px_60px_rgba(2,6,23,0.10)]">
                <p className="text-xs uppercase tracking-[0.25em] text-primary/60 font-heading">Visa Success</p>
                <p className="text-2xl font-bold text-primary">98%+</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 bg-white/70 border border-slate-200/70 backdrop-blur rounded-[2.5rem] p-6 md:p-10 shadow-[0_18px_60px_rgba(2,6,23,0.08)]"
          >
            {[
              { value: "500+", label: "Students Placed" },
              { value: "98%", label: "Visa Success Rate" },
              { value: "50+", label: "Partner Universities" },
              { value: "6+", label: "Top Destinations" },
            ].map((stat) => (
              <div key={stat.label} className="text-left md:text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm uppercase tracking-[0.25em] text-primary/50 mt-2 font-heading">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How We Help You"
            subtitle="From consultation to arrival, CJ Global delivers a calm, transparent process built around your goals."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="rounded-[2rem] border border-slate-200/70 bg-white/70 backdrop-blur p-8 shadow-[0_18px_60px_rgba(2,6,23,0.08)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/15 text-primary flex items-center justify-center mb-6 border border-accent/20">
                  <Globe size={22} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className="text-primary font-semibold inline-flex items-center hover:text-accent transition-colors">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="text-left max-w-2xl">
              <h2 className="text-4xl font-bold text-primary mb-3 font-heading">Popular Study Destinations</h2>
              <p className="text-slate-600">
                Explore educational opportunities in top global countries known for academic excellence and career prospects.
              </p>
            </div>
            <Link
              to="/destinations"
              className="bg-white/70 backdrop-blur px-6 py-3 rounded-full font-bold text-primary border border-slate-200/70 hover:bg-accent hover:text-primary hover:border-accent transition-all shadow-[0_12px_30px_rgba(2,6,23,0.06)]"
            >
              View All Destinations
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS.map((dest) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to={`/destinations?id=${dest.id}`}
                  className="relative group overflow-hidden rounded-[2rem] aspect-[4/5] border border-slate-200/70 bg-white/60 backdrop-blur shadow-[0_18px_60px_rgba(2,6,23,0.08)]"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-75" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">{dest.name}</h3>
                    <div className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Study Options <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/60 font-heading">Testimonials</p>
          <h2 className="text-4xl font-bold mb-3 text-primary mt-4 font-heading">Success Stories</h2>
          <p className="text-slate-500">Hear from our students who are currently studying abroad.</p>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialSlider testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2.5rem] border border-slate-200/70 bg-white/70 backdrop-blur p-12 md:p-16 shadow-[0_18px_60px_rgba(2,6,23,0.10)] text-center"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary/60 font-heading">Consultation</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary mt-4 font-heading">Ready to Start Your Journey?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Book a free consultation and let our experts map the fastest path to your offer letter.
            </p>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-semibold rounded-full text-lg hover:bg-primary hover:text-white transition-colors shadow-glow"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-slate-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/60 font-heading">FAQ</p>
          <h2 className="text-4xl font-bold mb-3 text-primary mt-4 font-heading">Frequently Asked Questions</h2>
          <p className="text-slate-500">Everything you need to know about studying abroad with CJ Global.</p>
        </div>
        <FAQAccordion faqs={faqs} />
      </section>
    </div>
  );
};

export default Home;
