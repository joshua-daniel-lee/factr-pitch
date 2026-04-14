'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, ExternalLink } from 'lucide-react';
import Slide from '@/components/layout/Slide';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';

export default function FoundersSlide() {
  return (
    <Slide id="about" background="none">
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Gradient Background - Fills entire viewport */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            background: 'linear-gradient(to right, rgb(6,192,215), rgb(247,112,36))',
          }}
        />
        
        {/* Header - Mobile Optimized */}
        <div className="absolute top-16 sm:top-20 md:top-8 left-0 right-0 z-20 text-center px-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heading level="h2" className="text-white mb-2 drop-shadow-lg text-2xl sm:text-3xl lg:text-4xl">
              About the Founders
            </Heading>
            <Text variant="small" className="text-white/80 drop-shadow text-sm sm:text-base">
              Georgetown Capstone Project © 2026
            </Text>
          </motion.div>
        </div>

        {/* Split Screen Container - Stack on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-full relative z-10">
          
          {/* Danyang - Left Side with Cyan Glow */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-full flex items-center justify-center overflow-hidden group"
          >
            {/* Cyan Radial Gradient Backdrop */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
            </div>

            {/* Content - Mobile Optimized */}
            <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 md:px-8 pt-32 sm:pt-40 md:pt-48 lg:pt-20 pb-8 sm:pb-10 md:pb-12">
              {/* Large Portrait - Mobile Responsive */}
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative mb-6 sm:mb-8"
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-3 sm:border-4 border-white shadow-2xl">
                  {/* Cyan glow ring */}
                  <div className="absolute -inset-4 bg-cyan-400/30 rounded-full blur-xl" />
                  <Image
                    src="/team/danyang.png"
                    alt="Danyang - Co-Founder & CEO"
                    fill
                    className="object-cover relative z-10"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 256px"
                  />
                </div>
              </motion.div>

              {/* Info Card with Glassmorphism - Mobile Optimized */}
              <div className="backdrop-blur-lg bg-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl border border-white/50 max-w-sm sm:max-w-md w-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">Danyang (Darcy) Wang</h3>
                <p className="text-cyan-600 font-semibold mb-1 text-sm sm:text-base">Co-Founder & CEO</p>
                <div className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 sm:mb-4">
                  Hustler
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                  Georgetown MSITM '26. Former Senior Policy Data Analyst at Tsingyan Research who engineered predictive forecasting models using 80,000+ data points. Yale Law School researcher with expertise in R programming, GIS mapping, and data visualization. AWS Certified Cloud Practitioner.
                </p>
                <div className="flex gap-2 sm:gap-3 justify-center">
                  <a
                    href="mailto:dw1026@georgetown.edu"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                  >
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Email</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/danyang-wang-79984a253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Joshua - Right Side with Orange Glow */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-full flex items-center justify-center overflow-hidden group"
          >
            {/* Orange Radial Gradient Backdrop */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-300 rounded-full blur-3xl" />
            </div>

            {/* Content - Mobile Optimized */}
            <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-32 lg:pt-20 pb-8 sm:pb-10 md:pb-12">
              {/* Large Portrait - Mobile Responsive */}
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative mb-6 sm:mb-8"
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-3 sm:border-4 border-white shadow-2xl">
                  {/* Orange glow ring */}
                  <div className="absolute -inset-4 bg-orange-400/30 rounded-full blur-xl" />
                  <Image
                    src="/team/joshua.png"
                    alt="Joshua - Co-Founder & CTO"
                    fill
                    className="object-cover relative z-10"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 256px"
                  />
                </div>
              </motion.div>

              {/* Info Card with Glassmorphism - Mobile Optimized */}
              <div className="backdrop-blur-lg bg-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl border border-white/50 max-w-sm sm:max-w-md w-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">Joshua Lee</h3>
                <p className="text-orange-600 font-semibold mb-1 text-sm sm:text-base">Co-Founder & CTO</p>
                <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 sm:mb-4">
                  Hacker
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                  Georgetown MSITM '26. Branch Chief at NOAA Fisheries driving cloud strategy (GCP/OCI) and DevOps transformation. Award-winning technologist (NMFS Employee of the Year 2016, Team Member 2014) specializing in data architecture and secure web solutions.
                </p>
                <div className="flex gap-2 sm:gap-3 justify-center">
                  <a
                    href="mailto:jdl166@georgetown.edu"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                  >
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Email</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/joshua-lee-339504100/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </Slide>
  );
}
