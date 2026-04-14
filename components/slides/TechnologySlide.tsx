'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import { fadeInLeft, fadeInRight, VIEWPORT } from '@/constants/animations';

export default function TechnologySlide() {
  return (
    <Slide id="technology" background="white">
      <Container size="xl">
        {/* Split Screen Layout - Diagram centered, Title on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Hub-and-Spoke Diagram - Scaled for mobile */}
          <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[500px] h-[280px] sm:h-[350px] lg:h-[500px] mx-auto mb-8 lg:mb-0">
            
            {/* Central Hub - FactrAI Logo (Rounded Rectangle) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-20 h-16 sm:w-32 sm:h-24 lg:w-40 lg:h-32 rounded-2xl sm:rounded-3xl bg-white shadow-xl sm:shadow-2xl flex items-center justify-center border-2 border-cyan-400 p-2 sm:p-4">
                <Image
                  src="/branding/logo.png"
                  alt="FactrAI"
                  width={80}
                  height={80}
                  className="object-contain w-10 sm:w-16 lg:w-20"
                />
              </div>
            </div>

            {/* Top Node: OAuth */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="w-12 h-10 sm:w-16 sm:h-14 lg:w-24 lg:h-20 rounded-xl sm:rounded-2xl bg-white border border-gray-300 shadow-sm sm:shadow-md flex flex-col items-center justify-center p-1 sm:p-2">
                <div className="relative w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mb-0.5 sm:mb-1">
                  <Image
                    src="/tech/oauth.svg"
                    alt="OAuth"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-[8px] sm:text-[10px] font-semibold text-gray-600">OAuth</p>
              </div>
            </div>

            {/* Connecting Line: Top to Center (Gray) - Animated with Pulse */}
            <motion.div 
              className="absolute top-10 sm:top-14 lg:top-20 left-1/2 -translate-x-1/2 w-px sm:w-0.5 h-[calc(50%-50px)] sm:h-[calc(50%-70px)] lg:h-[calc(50%-100px)] bg-gray-300"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ 
                scaleY: 1,
                opacity: [1, 0.4, 1]
              }}
              transition={{ 
                scaleY: { duration: 0.6, delay: 0.2, ease: "easeOut" },
                opacity: {
                  duration: 2,
                  delay: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{ transformOrigin: 'top' }}
            />

            {/* Right Node: SmartReader AI (HERO) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-14 h-12 sm:w-20 sm:h-16 lg:w-28 lg:h-24 rounded-xl sm:rounded-2xl bg-white border-2 border-orange-500 shadow-md sm:shadow-lg flex flex-col items-center justify-center p-1 sm:p-2">
                  <div className="relative w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-0.5 sm:mb-1">
                    <Image
                      src="/tech/ai-engine.svg"
                      alt="SmartReader AI"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[8px] sm:text-[10px] font-semibold text-orange-600">SmartReader</p>
                </div>
                {/* Star badge */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-md sm:shadow-lg">
                  <span className="text-[10px] sm:text-xs lg:text-sm">⭐</span>
                </div>
              </div>
            </div>

            {/* Connecting Line: Center to Right (Orange - thick) - Animated with Pulse */}
            <motion.div 
              className="absolute right-14 sm:right-20 lg:right-28 top-1/2 -translate-y-1/2 w-[calc(50%-65px)] sm:w-[calc(50%-95px)] lg:w-[calc(50%-130px)] h-0.5 sm:h-1 bg-orange-500"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: 1,
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                scaleX: { duration: 0.6, delay: 0.4, ease: "easeOut" },
                opacity: {
                  duration: 2,
                  delay: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{ transformOrigin: 'right' }}
            />

            {/* Bottom Node: FedCM (Cyan) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="w-12 h-10 sm:w-16 sm:h-14 lg:w-24 lg:h-20 rounded-xl sm:rounded-2xl bg-white border-2 border-cyan-500 shadow-sm sm:shadow-md flex flex-col items-center justify-center p-1 sm:p-2">
                <div className="relative w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mb-0.5 sm:mb-1">
                  <Image
                    src="/tech/fedcm-icon.svg"
                    alt="FedCM"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-[8px] sm:text-[10px] font-bold text-cyan-600">FedCM</p>
              </div>
            </div>

            {/* Connecting Line: Center to Bottom (Cyan) - Animated with Pulse */}
            <motion.div 
              className="absolute bottom-10 sm:bottom-14 lg:bottom-20 left-1/2 -translate-x-1/2 w-px sm:w-0.5 h-[calc(50%-50px)] sm:h-[calc(50%-70px)] lg:h-[calc(50%-100px)] bg-cyan-500"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ 
                scaleY: 1,
                opacity: [1, 0.4, 1]
              }}
              transition={{ 
                scaleY: { duration: 0.6, delay: 0.6, ease: "easeOut" },
                opacity: {
                  duration: 2,
                  delay: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{ transformOrigin: 'bottom' }}
            />

            {/* Left Node: JWT */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <div className="w-12 h-10 sm:w-16 sm:h-14 lg:w-24 lg:h-20 rounded-xl sm:rounded-2xl bg-white border border-gray-300 shadow-sm sm:shadow-md flex flex-col items-center justify-center p-1 sm:p-2">
                <div className="relative w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mb-0.5 sm:mb-1">
                  <Image
                    src="/tech/oauth-jwt.svg"
                    alt="JWT"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-[8px] sm:text-[10px] font-semibold text-gray-600">JWT</p>
              </div>
            </div>

            {/* Connecting Line: Left to Center (Gray) - Animated with Pulse */}
            <motion.div 
              className="absolute left-12 sm:left-16 lg:left-24 top-1/2 -translate-y-1/2 w-[calc(50%-60px)] sm:w-[calc(50%-85px)] lg:w-[calc(50%-120px)] h-px sm:h-0.5 bg-gray-300"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: 1,
                opacity: [1, 0.4, 1]
              }}
              transition={{ 
                scaleX: { duration: 0.6, delay: 0.8, ease: "easeOut" },
                opacity: {
                  duration: 2,
                  delay: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{ transformOrigin: 'left' }}
            />

          </div>

          {/* RIGHT SIDE: Clean Minimalist Content - Mobile Optimized */}
          <motion.div
            initial={fadeInRight.initial}
            whileInView={fadeInRight.animate}
            transition={fadeInRight.transition(0)}
            viewport={VIEWPORT}
            className="space-y-6 sm:space-y-8"
          >
            {/* Title and Subtitle */}
            <div>
              <Heading level="h2" className="text-left mb-4 gradient-text text-2xl sm:text-3xl lg:text-4xl">
                Technical Innovation
              </Heading>
              <Text variant="lead" className="text-gray-700 text-left text-base sm:text-lg">
                Privacy-preserving identity meets AI-powered pricing, validated by production-ready standards
              </Text>
            </div>

            {/* SmartReader AI - Core Innovation */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">SmartReader Yield Algorithm</h3>
              <Text variant="body" className="text-gray-700 text-left text-sm sm:text-base">
                Our ML-powered pricing engine creates market-clearing credit prices in real-time, maximizing publisher yield while minimizing user friction.
              </Text>
            </div>

            {/* The Stack - De-emphasized with smaller text */}
            <div className="space-y-3 pt-6 mt-6 border-t border-gray-100">
              <h4 className="text-sm sm:text-base font-medium text-gray-600">The Stack</h4>
              
              <div className="space-y-3">
                <p className="text-xs text-gray-500 leading-relaxed">
                  <strong className="text-gray-700">FedCM</strong> is browser-level authentication without 3rd-party cookies, production-ready in Google Chrome.
                </p>

                <p className="text-xs text-gray-500 leading-relaxed">
                  <strong className="text-gray-700">OAuth/JWT</strong> is secure publisher access with decentralized control through publisher SDKs.
                </p>

                <p className="text-xs text-gray-500 leading-relaxed">
                  <strong className="text-gray-700">SmartReader AI</strong> is dynamic pricing optimization powered by real-time traffic analysis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Slide>
  );
}
