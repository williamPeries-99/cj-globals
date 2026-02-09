import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { ContactFormData } from "../types";

const Apply: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    country: "Australia",
    education: "Bachelors",
    message: "",
  });

  const [status, setStatus] =
    useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const body = new URLSearchParams({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        country: formData.country,
        education: formData.education,
        message: formData.message,
      });

      await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
        method: "POST",
        body,
      });

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center px-4 py-14">
      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 rounded-[2.25rem] overflow-hidden border border-slate-200/70 bg-white/70 backdrop-blur shadow-[0_18px_60px_rgba(2,6,23,0.10)]"
      >
        {/* LEFT */}
        <div className="relative p-10 md:p-12 text-white flex flex-col justify-center bg-gradient-to-br from-[#0b1f3a] via-[#102d55] to-[#0b1f3a]">
          <div aria-hidden className="absolute inset-0">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative max-w-sm space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/70 font-heading">
              <Sparkles className="h-4 w-4 text-accent" />
              Consultation
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Apply for
              <br />
              <span className="text-accent">Free Consultation</span>
            </h1>

            <p className="text-base md:text-lg text-slate-200">
              Share your details — our counselors will contact you within 24 hours.
            </p>

            <div className="space-y-3 text-sm text-white/85">
              {[
                { icon: <CheckCircle2 size={16} className="text-accent" />, text: "University shortlisting" },
                { icon: <ShieldCheck size={16} className="text-accent" />, text: "Visa guidance & document checks" },
                { icon: <CheckCircle2 size={16} className="text-accent" />, text: "Mock interviews & pre-departure" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-white/60">For urgent inquiries</p>
              <p className="text-xl font-semibold text-accent">+94 11 234 5678</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-12 bg-white/60">
          {status === "success" ? (
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-50 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Application Received!
              </h2>
              <p className="text-slate-600 mb-8">
                Thank you for choosing CJ Global. We'll contact you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-slate-900 transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="mb-2">
                <div className="text-xs uppercase tracking-[0.28em] text-slate-500 font-heading">
                  Application form
                </div>
                <div className="mt-2 text-2xl font-bold text-primary">
                  Let’s start your journey
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Fill this in — we’ll respond fast with next steps.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="input"
                />
                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="input"
                />
              </div>

              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="input"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="input"
                  aria-label="Destination Country"
                >
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>UK</option>
                  <option>USA</option>
                  <option>New Zealand</option>
                  <option>Ireland</option>
                </select>

                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="input"
                  aria-label="Education Level"
                >
                  <option value="Foundations">Foundations / Diploma</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="Masters">Masters</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us your preferred intake, course, and any questions (optional)"
                className="input min-h-[120px] resize-none"
              />

              {status === "error" && (
                <div className="bg-red-50 text-red-600 p-4 rounded-2xl flex items-center text-sm border border-red-100">
                  <AlertCircle size={18} className="mr-2" />
                  Submission failed. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-2xl bg-accent text-primary py-3.5 font-semibold flex items-center justify-center hover:bg-primary hover:text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Submit Application <Send size={18} className="ml-2" />
                  </>
                )}
              </button>

              <div className="text-xs text-slate-500 leading-relaxed">
                By submitting, you agree to be contacted by CJ Global Visa regarding your inquiry.
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Apply;
