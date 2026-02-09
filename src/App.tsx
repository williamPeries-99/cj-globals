import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Destinations from "./pages/Destinations";
import Apply from "./pages/Apply";
import Resources from "./pages/Resources";
import { AnimatedPage } from "./components/AnimatedPage";
import ScrollToTopButton from "./components/ScrollToTopButton";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
        <Route path="/destinations" element={<AnimatedPage><Destinations /></AnimatedPage>} />
        <Route path="/apply" element={<AnimatedPage><Apply /></AnimatedPage>} />
        <Route path="/resources" element={<AnimatedPage><Resources /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col text-slate-900 font-body overflow-hidden">
        {/* floating background blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-accent/25 blur-3xl animate-[float_14s_ease-in-out_infinite]" />
          <div className="absolute top-20 -right-20 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl animate-[float_18s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-accent/15 blur-3xl animate-[float_16s_ease-in-out_infinite]" />
        </div>

        <Navbar />

        {/* IMPORTANT: no extra padding here (pages handle spacing) */}
        <main className="relative z-10 flex-grow">
          <AppRoutes />
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
};

export default App;
