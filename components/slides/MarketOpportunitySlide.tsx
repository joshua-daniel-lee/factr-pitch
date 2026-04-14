'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { User } from 'lucide-react';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';

export default function MarketOpportunitySlide() {
  return (
    <Slide id="market" background="white">
      <Container size="xl">
        {/* Two-Column Layout - Stack on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Header + Narrative + Target User Personas */}
          <div className="space-y-4 sm:space-y-6">
            {/* Header - Mobile Optimized */}
            <div>
              <Heading level="h2" className="text-left mb-3 gradient-text text-2xl sm:text-3xl lg:text-4xl">
                Market Opportunity
              </Heading>
              <Text variant="lead" className="text-gray-700 text-left text-base sm:text-lg">
                From a $2B+ market to our Year 5 target
              </Text>
            </div>

            {/* Narrative Paragraph */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                A <span className="font-semibold text-cyan-600">$2B+ market opportunity</span> exists where publishers lose revenue to zero-click searches while subscription paywalls block 95% of high-intent readers.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We target readership ages 25-60 who demand cross-source access to information but face subscription fatigue.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                By Year 5, we project capturing <span className="font-semibold text-orange-600">19,430 active users</span> generating <span className="font-semibold text-orange-600">$6.29M ARR</span> across 350 publisher partners:
              </p>
            </div>

            {/* Persona List - Tech Stack Style */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-700">Knowledge Professional</strong> — Consultants, strategists, lawyers requiring cross-source data
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-700">Informed Citizen</strong> — Balanced perspectives without managing 20 logins
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-700">Academic/Learner</strong> — Researchers hitting paywall barriers for niche data
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-700">Intent-Driven "Bouncer"</strong> — Social media click-throughs wanting instant access
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-orange-600">B2B Enterprise</strong> — Reducing $14.8M organizational productivity drain
              </p>
            </div>
          </div>

          {/* RIGHT: TAM as Full Container with Floating Publishers - Mobile Scaled */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] border-2 sm:border-3 border-cyan-400 rounded-2xl bg-gradient-to-br from-cyan-50/30 via-white to-cyan-50/20 p-4 sm:p-6 lg:p-8 overflow-hidden">
            
            {/* TAM Label - Top Left */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-30">
              <p className="text-base sm:text-lg font-extrabold text-cyan-600">TAM</p>
              <p className="text-xs sm:text-sm text-gray-700 font-semibold">$2B+ Market</p>
            </div>

            {/* Floating Publisher Logos - Scaled for Mobile */}
            {/* Top Left - NYT */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 sm:top-20 left-4 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
            >
              <Image src="/publishers/nyt.png" alt="NYT" fill className="object-contain" />
            </motion.div>

            {/* Top Center - Atlantic */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
            >
              <Image src="/publishers/atlantic.png" alt="Atlantic" fill className="object-contain" />
            </motion.div>

            {/* Top Right - WSJ */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-12 sm:top-20 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
            >
              <Image src="/publishers/wsj.png" alt="WSJ" fill className="object-contain" />
            </motion.div>

            {/* Right Middle - Bloomberg */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
            >
              <Image src="/publishers/bloomberg.png" alt="Bloomberg" fill className="object-contain" />
            </motion.div>

            {/* Bottom Right - FT */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-12 sm:bottom-20 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
            >
              <Image src="/publishers/ft.png" alt="FT" fill className="object-contain" />
            </motion.div>

            {/* Bottom Center - Economist */}
            <motion.div
              animate={{ y: [0, -13, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-8 sm:bottom-16 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
            >
              <Image src="/publishers/economist.png" alt="Economist" fill className="object-contain" />
            </motion.div>

            {/* Bottom Left - Reuters */}
            <motion.div
              animate={{ y: [0, -17, 0] }}
              transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute bottom-12 sm:bottom-20 left-4 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
            >
              <Image src="/publishers/reuters.png" alt="Reuters" fill className="object-contain" />
            </motion.div>

            {/* Left Middle - WaPo */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
            >
              <Image src="/publishers/wapo.png" alt="WaPo" fill className="object-contain" />
            </motion.div>

            {/* Floating User Icons - Middle Ring around SOM - Scaled for Mobile */}
            {/* Top Left User */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-[28%] left-[28%] w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
            >
              <User className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
            </motion.div>

            {/* Top Center User */}
            <motion.div
              animate={{ y: [0, -11, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              className="absolute top-[22%] left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
            >
              <User className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
            </motion.div>

            {/* Top Right User */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
              className="absolute top-[28%] right-[28%] w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
            >
              <User className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
            </motion.div>

            {/* Right Middle User */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute top-1/2 -translate-y-1/2 right-[22%] w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
            >
              <User className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
            </motion.div>

            {/* Bottom Right User */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              className="absolute bottom-[28%] right-[28%] w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
            >
              <User className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
            </motion.div>

            {/* Bottom Center User */}
            <motion.div
              animate={{ y: [0, -11, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
              className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
            >
              <User className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
            </motion.div>

            {/* Bottom Left User */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[28%] left-[28%] w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
            >
              <User className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
            </motion.div>

            {/* Left Middle User */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
              className="absolute top-1/2 -translate-y-1/2 left-[22%] w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
            >
              <User className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
            </motion.div>

            {/* Center - SOM (Year 5 Target) - The Focus - Mobile Scaled */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] lg:w-[240px] lg:h-[240px] border-2 sm:border-4 border-orange-500 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white via-orange-50/60 to-orange-100/40 shadow-xl sm:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center z-10">
              <p className="text-xs sm:text-sm font-extrabold text-orange-600 mb-2 sm:mb-3">SOM (Year 5)</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">19.4K</p>
              <p className="text-xs sm:text-base text-gray-600 mt-0.5 sm:mt-1">active users</p>
              <div className="w-12 sm:w-16 h-px bg-orange-300 my-2 sm:my-3"></div>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600">$6.3M ARR</p>
            </div>

          </div>

        </div>
      </Container>
    </Slide>
  );
}
