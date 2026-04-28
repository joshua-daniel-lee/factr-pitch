'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Calculator, Clock, Target } from 'lucide-react';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import { fadeInUp, VIEWPORT } from '@/constants/animations';

export default function FinancialsSlide() {
  return (
    <Slide id="financials" background="white">
      <Container size="xl">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={fadeInUp.transition(0)}
            viewport={VIEWPORT}
          >
            <Heading level="h2" className="mb-3 sm:mb-4 gradient-text text-2xl sm:text-3xl lg:text-4xl">
              Path to $6.3M ARR
            </Heading>
            <Text variant="lead" className="max-w-3xl mx-auto text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg">
              19,430 users by Year 5 with strong unit economics
            </Text>
            
            {/* 3-Sentence Narrative - Mobile Optimized */}
            <p className="text-xs sm:text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We start lean with 1000 pilot users, proving product-market fit while refining our credit economy. Network effects compound as we scale to 19,400 users, driving down CAC from $75 to $40. Strong unit economics (11.5x LTV:CAC, 5-month payback) prove this is a capital-efficient path to profitability.
            </p>
          </motion.div>
        </div>

        {/* Additional Metrics - Pill Style - Mobile Optimized - MOVED ABOVE CARDS */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition(0.5)}
          viewport={VIEWPORT}
          className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10"
        >
          <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-50 border border-cyan-200 rounded-full">
            <p className="text-xs sm:text-sm font-semibold text-cyan-700">35% Gross Margin</p>
          </div>
          <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-50 border border-cyan-200 rounded-full">
            <p className="text-xs sm:text-sm font-semibold text-cyan-700">18.4% IRR</p>
          </div>
          <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-50 border border-cyan-200 rounded-full">
            <p className="text-xs sm:text-sm font-semibold text-cyan-700">58% Annual Growth</p>
          </div>
        </motion.div>

        {/* Growth Timeline - Mobile Responsive */}
        <div className="relative max-w-5xl mx-auto mb-12 sm:mb-16">
          {/* Gradient Line with Pulse Animation - Hidden on mobile */}
          <motion.div 
            className="hidden sm:block absolute top-8 left-0 right-0 h-1 rounded-full"
            style={{ 
              background: 'linear-gradient(to right, #06c0d7 0%, #06c0d7 25%, #22d3ee 50%, #fb923c 75%, #f77024 100%)'
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scaleY: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Timeline Milestones - Stack vertically on mobile, horizontal on tablet+ */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-4 relative">
            {/* Year 1 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={VIEWPORT}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/40 flex items-center justify-center mb-3 z-10">
                <span className="text-white font-bold text-lg sm:text-xl">1</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-gray-900 uppercase tracking-wide mb-1">Launch</h3>
              <p className="text-xs text-gray-600 mb-1">1000 users</p>
              <p className="text-xs font-semibold text-cyan-600">$135K</p>
            </motion.div>

            {/* Year 2 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={VIEWPORT}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40 flex items-center justify-center mb-3 z-10">
                <span className="text-white font-bold text-lg sm:text-xl">2</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-gray-900 uppercase tracking-wide mb-1">Traction</h3>
              <p className="text-xs text-gray-600 mb-1">2.5K users</p>
              <p className="text-xs font-semibold text-cyan-600">$835K</p>
            </motion.div>

            {/* Year 3 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={VIEWPORT}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-400 to-orange-400 shadow-lg shadow-orange-400/40 flex items-center justify-center mb-3 z-10">
                <span className="text-white font-bold text-lg sm:text-xl">3</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-gray-900 uppercase tracking-wide mb-1">Scale</h3>
              <p className="text-xs text-gray-600 mb-1">7.1K users</p>
              <p className="text-xs font-semibold text-orange-500">$2.4M</p>
            </motion.div>

            {/* Year 4 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={VIEWPORT}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-400 shadow-lg shadow-orange-400/40 flex items-center justify-center mb-3 z-10">
                <span className="text-white font-bold text-lg sm:text-xl">4</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-gray-900 uppercase tracking-wide mb-1">Growth</h3>
              <p className="text-xs text-gray-600 mb-1">13.8K users</p>
              <p className="text-xs font-semibold text-orange-600">$4.5M</p>
            </motion.div>

            {/* Year 5 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={VIEWPORT}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-500 shadow-xl shadow-orange-500/50 flex items-center justify-center mb-3 z-10">
                <span className="text-white font-bold text-lg sm:text-xl">5</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-gray-900 uppercase tracking-wide mb-1">Maturity</h3>
              <p className="text-xs text-gray-600 mb-1">19.4K users</p>
              <p className="text-xs font-bold text-orange-600">$6.3M ARR</p>
            </motion.div>
          </div>
        </div>

        {/* Key Metrics Cards - 2x2 on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {/* Metric 1: 5-Year Revenue */}
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-1">$13.6M</p>
            <div className="flex items-center justify-center gap-1.5">
              <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-600 flex-shrink-0" />
              <p className="text-[10px] sm:text-xs font-semibold text-gray-700">5-Year Revenue</p>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1">58% CAGR</p>
          </div>

          {/* Metric 2: LTV:CAC */}
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-1">11.5x</p>
            <div className="flex items-center justify-center gap-1.5">
              <Calculator className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-600 flex-shrink-0" />
              <p className="text-[10px] sm:text-xs font-semibold text-gray-700">LTV:CAC Ratio</p>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1">&gt;3x is excellent</p>
          </div>

          {/* Metric 3: Payback Period */}
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-1">5 mo</p>
            <div className="flex items-center justify-center gap-1.5">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-600 flex-shrink-0" />
              <p className="text-[10px] sm:text-xs font-semibold text-gray-700">CAC Payback</p>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1">&lt;12 mo target</p>
          </div>

          {/* Metric 4: Break-Even */}
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-1">Year 5</p>
            <div className="flex items-center justify-center gap-1.5">
              <Target className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-600 flex-shrink-0" />
              <p className="text-[10px] sm:text-xs font-semibold text-gray-700">Break-Even</p>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Clear path</p>
          </div>
        </div>
      </Container>
    </Slide>
  );
}
