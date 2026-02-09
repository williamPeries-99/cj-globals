
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 font-body">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/90 px-5 py-6 md:px-8 md:py-7 shadow-glow">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent/40 text-primary font-semibold">CJ</span>
                <h3 className="text-xl font-semibold tracking-wide text-primary font-heading">
                  CJ GLOBAL <span className="text-accent">VISA</span>
                </h3>
              </div>
              <p className="text-xs uppercase tracking-[0.35em] text-primary/50 font-heading">
                Study Abroad Consultancy
              </p>
              <div className="flex space-x-2">
                {[{icon: <Facebook size={16} />, href: '#', label: 'Facebook'}, {icon: <Twitter size={16} />, href: '#', label: 'Twitter'}, {icon: <Instagram size={16} />, href: '#', label: 'Instagram'}, {icon: <Linkedin size={16} />, href: '#', label: 'LinkedIn'}].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    title={item.label}
                    className="group p-1.5 rounded-full border border-slate-200 text-slate-500 hover:border-accent hover:text-primary transition-colors"
                    tabIndex={0}
                  >
                    <span className="sr-only">{item.label}</span>
                    <span className="transition-transform group-hover:scale-110 group-active:scale-95">
                      {item.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-[11px] uppercase tracking-[0.28em] text-primary/60 font-heading mb-3">Contact</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 text-sm">
                <div className="flex items-start">
                  <MapPin className="mr-2 text-accent shrink-0" size={14} />
                  <span>123 Global Plaza, Colombo 03,<br />Sri Lanka</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="mr-2 text-accent shrink-0" size={14} />
                    <span>+94 11 234 5678</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 text-accent shrink-0" size={14} />
                    <span>admin@cjglobal.lk</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 text-accent shrink-0" size={14} />
                    <span>support@cjglobal.lk</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto text-left md:text-right space-y-2">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-accent text-primary text-sm font-semibold shadow-glow hover:bg-primary hover:text-white transition-colors"
              >
                Book Free Consultation
              </Link>
              <p className="text-xs text-slate-400">
                (c) {new Date().getFullYear()} CJ Global Visa Consultancy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
