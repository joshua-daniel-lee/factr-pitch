'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'summary', label: 'Executive Summary' },
  { id: 'customers', label: 'Customer Landscape' },
  { id: 'solution', label: 'The Solution' },
  { id: 'demo', label: 'Try the Demo' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'technology', label: 'Technology' },
  { id: 'business', label: 'Business Model' },
  { id: 'market', label: 'Market Opportunity' },
  { id: 'financials', label: 'Financial Model' },
  { id: 'investment', label: 'The Investment' },
  { id: 'moat', label: 'Strategic Moat' },
  { id: 'vision', label: 'Vision & Impact' },
  { id: 'capstone', label: 'Georgetown Capstone' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentSection = sectionElements.find(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setDropdownOpen(false);
  };

  const currentIndex = sections.findIndex(s => s.id === activeSection);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-primary"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar */}
      <motion.nav
        className="fixed top-1 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image 
                src="/branding/logo.png" 
                alt="FactrAI Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
              <div className="text-2xl font-inter font-bold gradient-text">
                FactrAI
              </div>
            </div>

            {/* Center: Section counter */}
            <div className="hidden md:flex items-center">
              <span className="text-sm text-gray-600 font-roboto">
                Section {currentIndex + 1} / {sections.length}
              </span>
            </div>

            {/* Right: Dropdown + Georgetown */}
            <div className="flex items-center space-x-4">
              {/* Page Content Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <span>Page Content</span>
                  <motion.div
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <>
                      {/* Backdrop */}
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setDropdownOpen(false)}
                      />

                      {/* Dropdown Content */}
                      <motion.div
                        className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-elevated border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {sections.map((section, idx) => (
                          <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                              activeSection === section.id
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <span className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500 font-mono w-6">
                                {(idx + 1).toString().padStart(2, '0')}
                              </span>
                              <span>{section.label}</span>
                            </span>
                            {activeSection === section.id && (
                              <div className="w-2 h-2 rounded-full bg-primary" />
                            )}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Georgetown Badge */}
              <span className="text-xs text-gray-500 hidden sm:inline px-3 py-1 bg-gray-100 rounded-full">
                Georgetown Capstone
              </span>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
