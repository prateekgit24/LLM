import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import SampleProblems from "./components/SampleProblems";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

function AppContent() {
  const [gradientOpacity, setGradientOpacity] = useState(1);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fadeStart = viewportHeight * 0.2;
      const fadeEnd = viewportHeight * 1.2;

      if (scrollY <= fadeStart) {
        setGradientOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setGradientOpacity(0);
      } else {
        const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        setGradientOpacity(1 - progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-dark-950 text-white relative overflow-x-hidden">
        {/* Dynamic Gradient Overlay */}
        <div
          className="gradient-overlay"
          style={{ opacity: gradientOpacity }}
        />

        <div className="relative z-10">
          <Navbar onAuthClick={() => setShowAuthModal(true)} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero
                    onGetStarted={() => (user ? null : setShowAuthModal(true))}
                  />
                  {/* <Dashboard /> */}
                  {/* <SampleProblems /> */}
                  {/* <Resources /> */}
                </>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/problems" element={<SampleProblems />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>

          <Footer onAuthClick={() => setShowAuthModal(true)} />
        </div>

        <AnimatePresence>
          {showAuthModal && (
            <AuthModal onClose={() => setShowAuthModal(false)} />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
