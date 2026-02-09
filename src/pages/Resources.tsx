import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Calculator, FileText, Search } from "lucide-react";
import { IMAGES } from "../assets";
import { SectionHeader } from "../components/SectionHeader";

const Resources: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Scholarships for Sri Lankan Students in 2024",
      excerpt: "A comprehensive guide to funding your international education through merit and need-based scholarships.",
      date: "Oct 12, 2024",
      author: "Education Expert",
      image: IMAGES.blog.scholarships,
    },
    {
      id: 2,
      title: "How to Prepare for Your Student Visa Interview",
      excerpt: "Nail your visa interview with our tried-and-tested tips on document presentation and answering tough questions.",
      date: "Nov 05, 2024",
      author: "Visa Consultant",
      image: IMAGES.blog.visaInterview,
    },
    {
      id: 3,
      title: "Life in Australia: A Guide for New International Students",
      excerpt: "Everything from finding accommodation to part-time jobs and understanding the Aussie culture.",
      date: "Nov 20, 2024",
      author: "Alumni Team",
      image: IMAGES.blog.studentLife,
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/60 font-heading text-center">Resources</p>
        <SectionHeader title="Student Resources" subtitle="Guides, tools, and insights to simplify every step of your journey." />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {[
            { icon: <Calculator size={22} />, title: "Cost Calculator", desc: "Estimate study & living expenses", tone: "accent" },
            { icon: <FileText size={22} />, title: "Checklist Maker", desc: "Track documents and deadlines", tone: "primary" },
            { icon: <Search size={22} />, title: "University Finder", desc: "Search 1000+ courses globally", tone: "accent" },
          ].map((t) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-slate-200/70 bg-white/70 backdrop-blur p-6 shadow-[0_18px_60px_rgba(2,6,23,0.08)] flex items-center gap-4"
            >
              <div
                className={[
                  "w-12 h-12 rounded-2xl flex items-center justify-center border",
                  t.tone === "accent"
                    ? "bg-accent/15 text-primary border-accent/20"
                    : "bg-primary/10 text-primary border-slate-200/70",
                ].join(" ")}
              >
                {t.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-primary font-heading">{t.title}</h3>
                <p className="text-xs text-slate-500">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Articles */}
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary/60 font-heading">Articles</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 font-heading">Latest Articles</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] overflow-hidden border border-slate-200/70 bg-white/70 backdrop-blur flex flex-col group shadow-[0_18px_60px_rgba(2,6,23,0.08)]"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                />
                <div className="absolute top-4 left-4 bg-accent/90 px-3 py-1 rounded-full text-[11px] font-semibold text-primary">
                  Success Guide
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-slate-400 mb-4 space-x-4">
                  <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User size={12} className="mr-1" /> {post.author}</span>
                </div>

                <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-accent transition-colors font-heading">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">{post.excerpt}</p>

                <button className="text-primary font-semibold text-sm inline-flex items-center group-hover:text-accent transition-colors">
                  Read Article <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
