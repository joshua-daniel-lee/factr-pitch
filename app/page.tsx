'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, ExternalLink, CreditCard, Share2, Coins, TrendingUp, User, Calculator, Clock, Target } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Slide from '@/components/layout/Slide';
import SlideNav from '@/components/layout/SlideNav';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import StatCard from '@/components/ui/StatCard';
import PainPointCard from '@/components/ui/PainPointCard';
import ValuePropCard from '@/components/ui/ValuePropCard';
import FeaturePill from '@/components/ui/FeaturePill';
import { 
  PUBLISHER_LOGOS, 
  STAT_CARDS, 
  PAIN_POINT_CARDS, 
  VALUE_PROP_CARDS, 
  USER_PERSONAS, 
  DEMO_FEATURES 
} from '@/constants/slides';

export default function Home() {
  return (
    <>
      <Navbar />
      <SlideNav />
      
      {/* Slide 1: Hero */}
      <Slide id="hero" background="white">
        <Container className="text-center h-full flex flex-col items-center justify-center">
          {/* Hero Image - Unlock Concept with Float Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -12, 0]
            }}
            transition={{ 
              scale: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.8, ease: "easeOut" },
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }
            }}
            whileHover={{ 
              rotateY: 5, 
              rotateX: -3,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="mb-8"
          >
            <Image 
              src="/illustrations/hero-key.svg" 
              alt="Universal Key to Premium Journalism" 
              width={350} 
              height={191}
              className="object-contain w-full max-w-[280px] sm:max-w-[350px]"
              priority
              quality={90}
              sizes="(max-width: 640px) 280px, 350px"
            />
          </motion.div>

          {/* Main Heading with stagger animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Heading level="h1" className="mb-6 gradient-text">
              The Universal Key to Premium Journalism
            </Heading>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <Text variant="lead" className="max-w-3xl mx-auto text-gray-600">
              Premium Insights, Minus the Paywalls
            </Text>
          </motion.div>

          {/* Founders Mini Avatars */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-8 items-center justify-center"
          >
            {/* Danyang */}
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-3 border-cyan-400 shadow-lg mb-2">
                <Image
                  src="/team/danyang.png"
                  alt="Danyang Wang"
                  fill
                  className="object-cover"
                  sizes="80px"
                  priority
                />
              </div>
              <p className="text-sm font-semibold text-gray-900">Danyang Wang</p>
              <div className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full mt-1">
                Hustler
              </div>
            </div>

            {/* Joshua */}
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-3 border-orange-400 shadow-lg mb-2">
                <Image
                  src="/team/joshua.png"
                  alt="Joshua Lee"
                  fill
                  className="object-cover"
                  sizes="80px"
                  priority
                />
              </div>
              <p className="text-sm font-semibold text-gray-900">Joshua Lee</p>
              <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full mt-1">
                Hacker
              </div>
            </div>
          </motion.div>

          {/* Subtext */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-8"
          >
            <Text variant="body" className="text-gray-500 max-w-4xl mx-auto text-sm">
              Restoring the economic bridge between world-class journalism and the everyday consumer
            </Text>
          </motion.div>
        </Container>
      </Slide>

      {/* Slide 2: Executive Summary - Side by Side Layout */}
      <Slide id="summary" background="white">
        <Container size="xl" className="overflow-x-hidden">
          {/* Publisher Logos Carousel */}
          <div className="mb-12 overflow-hidden w-full">
            <div className="relative w-full overflow-hidden">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
              
              {/* Scrolling container */}
              <div className="flex gap-12 items-center overflow-hidden w-full">
                <motion.div
                  className="flex gap-12 items-center min-w-max"
                  animate={{
                    x: [0, -1408], // 8 logos × (128px + 48px gap) = 1408px
                  }}
                  transition={{
                    x: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  {/* First set of logos */}
                  {PUBLISHER_LOGOS.map((logo, index) => (
                    <div
                      key={`logo-1-${index}`}
                      className="flex-shrink-0 w-24 sm:w-32 h-12 sm:h-16 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={`/publishers/${logo}`}
                        alt={logo.replace('.png', '')}
                        fill
                        sizes="(max-width: 640px) 96px, 128px"
                        className="object-contain"
                      />
                    </div>
                  ))}
                  {/* Second set for seamless loop */}
                  {PUBLISHER_LOGOS.map((logo, index) => (
                    <div
                      key={`logo-2-${index}`}
                      className="flex-shrink-0 w-24 sm:w-32 h-12 sm:h-16 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={`/publishers/${logo}`}
                        alt={logo.replace('-logo.png', '')}
                        fill
                        sizes="(max-width: 640px) 96px, 128px"
                        className="object-contain"
                      />
                    </div>
                  ))}
                  {/* Third set for extra coverage */}
                  {PUBLISHER_LOGOS.map((logo, index) => (
                    <div
                      key={`logo-3-${index}`}
                      className="flex-shrink-0 w-24 sm:w-32 h-12 sm:h-16 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={`/publishers/${logo}`}
                        alt={logo.replace('-logo.png', '')}
                        fill
                        sizes="(max-width: 640px) 96px, 128px"
                        className="object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Heading level="h2" className="text-left mb-6 gradient-text">
                  The Subscription Trap
                </Heading>
                <Text variant="lead" className="text-gray-700 text-left">
                  Digital publishers are trapped in a monetization bottleneck where rigid, high-cost subscriptions alienate 95% of high-intent readers
                </Text>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Text variant="body" className="text-gray-600 leading-relaxed text-left">
                  U.S. search traffic to news publishers plummeted by 38%<sup className="text-xs">1</sup> since late 2024 due to AI-integrated search overviews, while zero-click searches surged to 69%<sup className="text-xs">2</sup> in 2025—resulting in an estimated $2 billion<sup className="text-xs">3</sup> annual advertising revenue loss for the sector.<sup className="text-xs">4</sup>
                </Text>
              </motion.div>

              {/* Inline Quote */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Text variant="small" className="text-gray-500 italic text-left">
                  "This prevents universal access for information workers and creates a systemic crisis as referral traffic vanishes in a zero-click ecosystem." — Digital Content Next, 2025
                </Text>
              </motion.div>
            </div>

            {/* Right Column: 2x2 Grid of Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STAT_CARDS.map((card, index) => (
                <StatCard key={index} {...card} />
              ))}
            </div>
          </div>
        </Container>
      </Slide>

      {/* Slide 3: The User Pain Point - The Productivity Gap */}
      <Slide id="customers" background="white">
        <Container size="xl">
          {/* Header Section */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading level="h2" className="mb-4">
                <span className="gradient-text">The Productivity Gap</span>
              </Heading>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Text variant="lead" className="max-w-4xl mx-auto text-gray-700 mb-6">
                The modern reader is exhausted by friction, suffering from both financial subscription fatigue and the daily loss of their most valuable asset: <strong className="text-cyan-600">TIME</strong>
              </Text>
            </motion.div>

            {/* Target User Personas - Multiple Pills */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-2"
            >
              {USER_PERSONAS.map((persona) => (
                <FeaturePill key={persona} variant="cyan">
                  {persona}
                </FeaturePill>
              ))}
            </motion.div>
          </div>

          {/* Three-Panel Pain Journey */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {PAIN_POINT_CARDS.map((card, index) => (
              <PainPointCard key={index} {...card} />
            ))}
          </div>
        </Container>
      </Slide>

      {/* Slide 4: The Solution */}
      <Slide id="solution" background="white">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Heading level="h2" className="text-left mb-4 gradient-text">
                  One Key, All Paywalls
                </Heading>
                <Text variant="lead" className="text-gray-700 text-left mb-6">
                  A frictionless, credit-based access layer that utilizes browser-level identity to unlock premium journalism across the web
                </Text>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Text variant="body" className="text-gray-600 leading-relaxed text-left mb-8">
                  A credit-based marketplace solving the "Subscription Trap" with seamless access to premium journalism through a single "Universal Key" and dynamic yield-optimization.
                </Text>
              </motion.div>

              {/* Three Value Propositions - Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {VALUE_PROP_CARDS.map((card, index) => (
                  <ValuePropCard key={index} {...card} />
                ))}
              </div>
            </div>

            {/* Right Column: App Mockup */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-full aspect-[4/3] relative rounded-2xl shadow-2xl overflow-hidden"
              >
                <Image
                  src="/mockups/app-interface.png"
                  alt="FactrAI App Mockup"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Slide>

      {/* Slide 5: Try the Demo */}
      <Slide id="demo" background="white">
        <Container className="text-center h-full flex flex-col items-center justify-center">
          {/* Hero Key Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -12, 0]
            }}
            transition={{ 
              scale: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.8, ease: "easeOut" },
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }
            }}
            viewport={{ once: true }}
            whileHover={{ 
              rotateY: 5, 
              rotateX: -3,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="mb-6"
          >
            <Image 
              src="/illustrations/hero-key.svg" 
              alt="Universal Key to Premium Journalism" 
              width={280} 
              height={153}
              className="object-contain w-full max-w-[200px] sm:max-w-[280px]"
              sizes="(max-width: 640px) 200px, 280px"
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heading level="h1" className="mb-6 gradient-text">
              See It In Action
            </Heading>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Text variant="lead" className="max-w-3xl mx-auto text-gray-600">
              Experience the power of universal access to premium journalism
            </Text>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="gradient" 
              size="lg" 
              href="https://demo.factrai.com"
              className="w-80 shadow-lg text-lg py-6"
            >
              Launch Interactive Demo →
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {DEMO_FEATURES.map((feature) => (
              <FeaturePill key={feature} variant="orange">{feature}</FeaturePill>
            ))}
          </motion.div>
        </Container>
      </Slide>

      {/* Slide 6: How It Works */}
      <Slide id="how-it-works" background="white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading level="h2" className="mb-4 gradient-text">
                Three-Step Value Flow
              </Heading>
              <Text variant="lead" className="max-w-3xl mx-auto text-gray-700">
                Universal browser key powered by FedCM creates seamless access for users and monetization for publishers
              </Text>
            </motion.div>
          </div>

          {/* 3-Card Process Flow */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-16">
            
            {/* Pulsing Line - Badge to Badge */}
            <motion.div
              className="hidden md:block absolute -top-2 h-1 rounded-full shadow-lg shadow-cyan-500/30 mx-auto"
              style={{ 
                background: 'linear-gradient(90deg, transparent 0%, #06c0d7 20%, white 50%, #f77024 80%, transparent 100%)',
                backgroundSize: '200% 100%',
                filter: 'blur(2px)',
                left: '16.67%',
                right: '16.67%'
              }}
              animate={{
                backgroundPosition: ['100% 50%', '0% 50%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Card 1: User Authentication - Image TOP */}
            <div className="relative pt-10">
              {/* Step Number Badge - Floating Above */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white font-bold text-xl shadow-lg shadow-cyan-500/30">
                1
              </div>

              <div className="bg-gradient-to-br from-white to-cyan-50/30 border-2 border-gray-200 rounded-2xl p-6 h-full hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300 flex flex-col">

                {/* Image - TOP */}
                <div className="relative z-10 w-full h-40 rounded-xl overflow-hidden mb-6 bg-white border border-gray-200">
                  <Image
                    src="/how-it-works/step-1-auth.svg"
                    alt="User Authentication with FedCM"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">User Authentication</h3>
                  <p className="text-sm font-semibold text-cyan-600 mb-4">
                    Browser-level identity (FedCM)
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">→</span>
                      <span>One-tap OAuth/JWT token</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">→</span>
                      <span>No 3rd-party cookies needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Content Access - Image BOTTOM */}
            <div className="relative pt-10">
              {/* Step Number Badge - Floating Above */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white font-bold text-xl shadow-lg shadow-cyan-500/30">
                2
              </div>

              <div className="bg-gradient-to-br from-white to-emerald-50/30 border-2 border-gray-200 rounded-2xl p-6 h-full hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-300 flex flex-col">

                {/* Content */}
                <div className="flex-1 flex flex-col mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Content Access</h3>
                  <p className="text-sm font-semibold text-cyan-600 mb-4">
                    AI-powered pricing engine
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">→</span>
                      <span>Dynamic credit allocation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">→</span>
                      <span>Instant article unlock</span>
                    </li>
                  </ul>
                </div>

                {/* Image - BOTTOM */}
                <div className="relative z-10 w-full h-40 rounded-xl overflow-hidden bg-white border border-gray-200">
                  <Image
                    src="/how-it-works/step-2-access.svg"
                    alt="Content Access with AI-powered pricing"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>
              </div>
            </div>

            {/* Card 3: Publisher Payout - Image MIDDLE */}
            <div className="relative pt-10">
              {/* CSS Keyframe for Pulsing Glow */}
              <style jsx>{`
                @keyframes pulse-glow {
                  0%, 100% {
                    box-shadow: 0 20px 25px -5px rgba(247, 112, 36, 0.1), 0 8px 10px -6px rgba(247, 112, 36, 0.1);
                  }
                  50% {
                    box-shadow: 0 25px 50px -12px rgba(247, 112, 36, 0.4), 0 12px 20px -8px rgba(247, 112, 36, 0.3), 0 0 40px rgba(247, 112, 36, 0.2);
                  }
                }
              `}</style>

              {/* Step Number Badge - Floating Above */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white font-bold text-xl shadow-lg shadow-cyan-500/30">
                3
              </div>

              {/* Card with Vibrant Orange Border + Pulsing Glow */}
              <div className="relative">
                <div 
                  className="bg-gradient-to-br from-white to-orange-50/30 border-2 border-orange-400 rounded-2xl p-6 h-full hover:scale-[1.02] transition-all duration-300 flex flex-col"
                  style={{
                    animation: 'pulse-glow 3s ease-in-out infinite'
                  }}
                >

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Publisher Payout</h3>

                  {/* Image - MIDDLE */}
                  <div className="relative z-10 w-full h-40 rounded-xl overflow-hidden mb-4 bg-white border border-gray-200">
                    <Image
                      src="/how-it-works/step-3-payout.svg"
                      alt="Publisher Payout with revenue sharing"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm font-semibold text-cyan-600 mb-4">
                    65% of credit revenue
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">→</span>
                      <span>$0.20-$0.80 per read</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">→</span>
                      <span>Plus 1st-party data sharing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Slide>

      {/* Slide 6: Technology */}
      <Slide id="technology" background="white">
        <Container size="xl">
          {/* Split Screen Layout - Diagram centered, Title on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE: Hub-and-Spoke Diagram - Static First */}
            <div className="relative w-full max-w-[500px] h-[500px] mx-auto">
              
              {/* Central Hub - FactrAI Logo (Rounded Rectangle) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-40 h-32 rounded-3xl bg-white shadow-2xl flex items-center justify-center border-2 border-cyan-400 p-4">
                  <Image
                    src="/branding/logo.png"
                    alt="FactrAI"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Top Node: OAuth */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <div className="w-24 h-20 rounded-2xl bg-white border border-gray-300 shadow-md flex flex-col items-center justify-center p-2">
                  <div className="relative w-10 h-10 mb-1">
                    <Image
                      src="/tech/oauth.svg"
                      alt="OAuth"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] font-semibold text-gray-600">OAuth</p>
                </div>
              </div>

              {/* Connecting Line: Top to Center (Gray) - Animated with Pulse */}
              <motion.div 
                className="absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-[calc(50%-100px)] bg-gray-300"
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
                  <div className="w-28 h-24 rounded-2xl bg-white border-2 border-orange-500 shadow-lg flex flex-col items-center justify-center p-2">
                    <div className="relative w-12 h-12 mb-1">
                      <Image
                        src="/tech/ai-engine.svg"
                        alt="SmartReader AI"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[10px] font-semibold text-orange-600">SmartReader AI</p>
                  </div>
                  {/* Star badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm">⭐</span>
                  </div>
                </div>
              </div>

              {/* Connecting Line: Center to Right (Orange - thick) - Animated with Pulse */}
              <motion.div 
                className="absolute right-28 top-1/2 -translate-y-1/2 w-[calc(50%-130px)] h-1 bg-orange-500"
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
                <div className="w-24 h-20 rounded-2xl bg-white border-2 border-cyan-500 shadow-md flex flex-col items-center justify-center p-2">
                  <div className="relative w-10 h-10 mb-1">
                    <Image
                      src="/tech/fedcm-icon.svg"
                      alt="FedCM"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] font-bold text-cyan-600">FedCM</p>
                </div>
              </div>

              {/* Connecting Line: Center to Bottom (Cyan) - Animated with Pulse */}
              <motion.div 
                className="absolute bottom-20 left-1/2 -translate-x-1/2 w-0.5 h-[calc(50%-100px)] bg-cyan-500"
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
                <div className="w-24 h-20 rounded-2xl bg-white border border-gray-300 shadow-md flex flex-col items-center justify-center p-2">
                  <div className="relative w-10 h-10 mb-1">
                    <Image
                      src="/tech/oauth-jwt.svg"
                      alt="JWT"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] font-semibold text-gray-600">JWT</p>
                </div>
              </div>

              {/* Connecting Line: Left to Center (Gray) - Animated with Pulse */}
              <motion.div 
                className="absolute left-24 top-1/2 -translate-y-1/2 w-[calc(50%-120px)] h-0.5 bg-gray-300"
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

            {/* RIGHT SIDE: Clean Minimalist Content */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Title and Subtitle */}
              <div>
                <Heading level="h2" className="text-left mb-4 gradient-text">
                  Technical Innovation
                </Heading>
                <Text variant="lead" className="text-gray-700 text-left">
                  Privacy-preserving identity meets AI-powered pricing, validated by production-ready standards
                </Text>
              </div>

              {/* SmartReader AI - Core Innovation */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">SmartReader Yield Algorithm</h3>
                <Text variant="body" className="text-gray-700 text-left">
                  Our ML-powered pricing engine creates market-clearing credit prices in real-time, maximizing publisher yield while minimizing user friction.
                </Text>
              </div>

              {/* The Stack - De-emphasized with smaller text */}
              <div className="space-y-3 pt-6 mt-6 border-t border-gray-100">
                <h4 className="text-base font-medium text-gray-600">The Stack</h4>
                
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

      {/* Slide 7: Business Model */}
      <Slide id="business" background="white">
        <Container size="xl">
          {/* Header */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading level="h2" className="mb-3 gradient-text">
                A Sustainable Revenue Model
              </Heading>
              <Text variant="lead" className="max-w-3xl mx-auto text-gray-700">
                Multiple streams create resilience while aligning publisher and users
              </Text>
            </motion.div>
          </div>

          {/* Split-Screen Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE: Revenue Streams + Key Economics */}
            <div className="space-y-4">
              {/* 3 Revenue Stream Cards - Horizontal - Balanced */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Stream 1: Subscription-First */}
                <div className="bg-white border-2 border-cyan-400 rounded-xl p-4 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-cyan-600 uppercase tracking-wide">Stream 1</p>
                      <h3 className="text-base font-bold text-gray-900 leading-tight">Subscription-First</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    Recurring monthly revenue from credit-based platform access
                  </p>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Tiered access by usage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Scalable SaaS economics</span>
                    </li>
                  </ul>
                </div>

                {/* Stream 2: Affiliate Partnership */}
                <div className="bg-white border-2 border-cyan-400 rounded-xl p-4 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <Share2 className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-cyan-600 uppercase tracking-wide">Stream 2</p>
                      <h3 className="text-base font-bold text-gray-900 leading-tight">Affiliate Partnership</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    Commission when users upgrade to direct publisher subscriptions
                  </p>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Discovery engine, not competitor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Aligned publisher incentives</span>
                    </li>
                  </ul>
                </div>

                {/* Stream 3: Credit Economy */}
                <div className="bg-white border-2 border-cyan-400 rounded-xl p-4 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <Coins className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-cyan-600 uppercase tracking-wide">Stream 3</p>
                      <h3 className="text-base font-bold text-gray-900 leading-tight">Credit Economy</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    Unused credits contribute to sustainable margins
                  </p>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>ClassPass-style model</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>Reduces user friction</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Key Economics - Text Only */}
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Key Economics</h3>
                </div>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  Multiple revenue streams de-risk the model while maintaining sustainability
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-lg">•</span>
                    <span>Publishers receive majority of credit revenue</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-lg">•</span>
                    <span>Data reciprocity unlike Apple News+</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-lg">•</span>
                    <span>Network effects improve unit economics at scale</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE: Subscription Tiers Image */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full h-[700px]"
            >
              <Image
                src="/business-model/subscription-tiers.png"
                alt="Subscription tier pricing visualization"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

          </div>
        </Container>
      </Slide>

      {/* Slide 8: Market Opportunity */}
      <Slide id="market" background="white">
        <Container size="xl">
          {/* Two-Column Layout - FLIPPED */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* LEFT: Header + Narrative + Target User Personas */}
            <div className="space-y-6">
              {/* Header - Left Aligned */}
              <div>
                <Heading level="h2" className="text-left mb-3 gradient-text">
                  Market Opportunity
                </Heading>
                <Text variant="lead" className="text-gray-700 text-left">
                  From a $2B+ market to our Year 5 target
                </Text>
              </div>

              {/* Narrative Paragraph */}
              <div className="space-y-3">
                <p className="text-base text-gray-700 leading-relaxed">
                  A <span className="font-semibold text-cyan-600">$2B+ market opportunity</span> exists where publishers lose revenue to zero-click searches while subscription paywalls block 95% of high-intent readers.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  We target readership ages 25-60 who demand cross-source access to information but face subscription fatigue.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  By Year 5, we project capturing <span className="font-semibold text-orange-600">19,430 active users</span> generating <span className="font-semibold text-orange-600">$6.29M ARR</span> across 350 publisher partners:
                </p>
              </div>

              {/* Persona List - Tech Stack Style */}
              <div className="space-y-3">
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

            {/* RIGHT: TAM as Full Container with Floating Publishers */}
            <div className="relative w-full h-[600px] border-3 border-cyan-400 rounded-2xl bg-gradient-to-br from-cyan-50/30 via-white to-cyan-50/20 p-8 overflow-hidden">
              
              {/* TAM Label - Top Left */}
              <div className="absolute top-6 left-6 z-30">
                <p className="text-lg font-extrabold text-cyan-600">TAM</p>
                <p className="text-sm text-gray-700 font-semibold">$2B+ Market Opportunity</p>
              </div>

              {/* Floating Publisher Logos */}
              {/* Top Left - NYT */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-8 w-16 h-16 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
              >
                <Image src="/publishers/nyt.png" alt="NYT" fill className="object-contain" />
              </motion.div>

              {/* Top Center - Atlantic */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-12 left-1/2 -translate-x-1/2 w-14 h-14 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
              >
                <Image src="/publishers/atlantic.png" alt="Atlantic" fill className="object-contain" />
              </motion.div>

              {/* Top Right - WSJ */}
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-20 right-8 w-16 h-16 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
              >
                <Image src="/publishers/wsj.png" alt="WSJ" fill className="object-contain" />
              </motion.div>

              {/* Right Middle - Bloomberg */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute top-1/2 -translate-y-1/2 right-8 w-14 h-14 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
              >
                <Image src="/publishers/bloomberg.png" alt="Bloomberg" fill className="object-contain" />
              </motion.div>

              {/* Bottom Right - FT */}
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-20 right-8 w-16 h-16 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
              >
                <Image src="/publishers/ft.png" alt="FT" fill className="object-contain" />
              </motion.div>

              {/* Bottom Center - Economist */}
              <motion.div
                animate={{ y: [0, -13, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-16 left-1/2 -translate-x-1/2 w-14 h-14 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
              >
                <Image src="/publishers/economist.png" alt="Economist" fill className="object-contain" />
              </motion.div>

              {/* Bottom Left - Reuters */}
              <motion.div
                animate={{ y: [0, -17, 0] }}
                transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute bottom-20 left-8 w-16 h-16 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
              >
                <Image src="/publishers/reuters.png" alt="Reuters" fill className="object-contain" />
              </motion.div>

              {/* Left Middle - WaPo */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-1/2 -translate-y-1/2 left-8 w-14 h-14 opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all"
              >
                <Image src="/publishers/wapo.png" alt="WaPo" fill className="object-contain" />
              </motion.div>

              {/* Floating User Icons - Middle Ring around SOM */}
              {/* Top Left User */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-[28%] left-[28%] w-10 h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
              >
                <User className="w-5 h-5 text-white" />
              </motion.div>

              {/* Top Center User */}
              <motion.div
                animate={{ y: [0, -11, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="absolute top-[22%] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
              >
                <User className="w-5 h-5 text-white" />
              </motion.div>

              {/* Top Right User */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                className="absolute top-[28%] right-[28%] w-10 h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
              >
                <User className="w-5 h-5 text-white" />
              </motion.div>

              {/* Right Middle User */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute top-1/2 -translate-y-1/2 right-[22%] w-10 h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
              >
                <User className="w-5 h-5 text-white" />
              </motion.div>

              {/* Bottom Right User */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                className="absolute bottom-[28%] right-[28%] w-10 h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
              >
                <User className="w-5 h-5 text-white" />
              </motion.div>

              {/* Bottom Center User */}
              <motion.div
                animate={{ y: [0, -11, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
                className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
              >
                <User className="w-5 h-5 text-white" />
              </motion.div>

              {/* Bottom Left User */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[28%] left-[28%] w-10 h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
              >
                <User className="w-5 h-5 text-white" />
              </motion.div>

              {/* Left Middle User */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
                className="absolute top-1/2 -translate-y-1/2 left-[22%] w-10 h-10 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center z-20"
              >
                <User className="w-5 h-5 text-white" />
              </motion.div>

              {/* Center - SOM (Year 5 Target) - The Focus */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] border-4 border-orange-500 rounded-2xl bg-gradient-to-br from-white via-orange-50/60 to-orange-100/40 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center z-10">
                <p className="text-sm font-extrabold text-orange-600 mb-3">SOM (Year 5)</p>
                <p className="text-4xl font-bold text-gray-900">19.4K</p>
                <p className="text-base text-gray-600 mt-1">active users</p>
                <div className="w-16 h-px bg-orange-300 my-3"></div>
                <p className="text-2xl font-bold text-orange-600">$6.3M ARR</p>
              </div>

            </div>

          </div>
        </Container>
      </Slide>

      {/* Slide 9: Financial Model */}
      <Slide id="financials" background="white">
        <Container size="xl">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading level="h2" className="mb-4 gradient-text">
                Path to $6.3M ARR
              </Heading>
              <Text variant="lead" className="max-w-3xl mx-auto text-gray-700 mb-6">
                19,430 users by Year 5 with strong unit economics
              </Text>
              
              {/* 3-Sentence Narrative */}
              <p className="text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We start lean with 50 pilot users, proving product-market fit while refining our credit economy. Network effects compound as we scale to 19,400 users, driving down CAC from $75 to $40. Strong unit economics (11.5x LTV:CAC, 5-month payback) prove this is a capital-efficient path to profitability.
              </p>
            </motion.div>
          </div>

          {/* Growth Timeline */}
          <div className="relative max-w-5xl mx-auto mb-16">
            {/* Gradient Line with Pulse Animation */}
            <motion.div 
              className="absolute top-8 left-0 right-0 h-1 rounded-full"
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

            {/* Timeline Milestones */}
            <div className="grid grid-cols-5 gap-4 relative">
              {/* Year 1 */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/40 flex items-center justify-center mb-3 z-10">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide mb-1">Launch</h3>
                <p className="text-xs text-gray-600 mb-1">50 users</p>
                <p className="text-xs font-semibold text-cyan-600">$135K</p>
              </motion.div>

              {/* Year 2 */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40 flex items-center justify-center mb-3 z-10">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide mb-1">Traction</h3>
                <p className="text-xs text-gray-600 mb-1">2.5K users</p>
                <p className="text-xs font-semibold text-cyan-600">$835K</p>
              </motion.div>

              {/* Year 3 */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-orange-400 shadow-lg shadow-orange-400/40 flex items-center justify-center mb-3 z-10">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide mb-1">Scale</h3>
                <p className="text-xs text-gray-600 mb-1">7.1K users</p>
                <p className="text-xs font-semibold text-orange-500">$2.4M</p>
              </motion.div>

              {/* Year 4 */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-orange-400 shadow-lg shadow-orange-400/40 flex items-center justify-center mb-3 z-10">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide mb-1">Growth</h3>
                <p className="text-xs text-gray-600 mb-1">13.8K users</p>
                <p className="text-xs font-semibold text-orange-600">$4.5M</p>
              </motion.div>

              {/* Year 5 */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-orange-500 shadow-xl shadow-orange-500/50 flex items-center justify-center mb-3 z-10">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide mb-1">Maturity</h3>
                <p className="text-xs text-gray-600 mb-1">19.4K users</p>
                <p className="text-xs font-bold text-orange-600">$6.3M ARR</p>
              </motion.div>
            </div>
          </div>

          {/* Key Metrics Cards - Matching Solution Card Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            {/* Metric 1: 5-Year Revenue */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
            >
              <p className="text-3xl font-bold text-cyan-600 mb-1">$13.6M</p>
              <div className="flex items-center justify-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-600" />
                <p className="text-xs font-semibold text-gray-700">5-Year Revenue</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">58% CAGR</p>
            </motion.div>

            {/* Metric 2: LTV:CAC */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
            >
              <p className="text-3xl font-bold text-cyan-600 mb-1">11.5x</p>
              <div className="flex items-center justify-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-cyan-600" />
                <p className="text-xs font-semibold text-gray-700">LTV:CAC Ratio</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">&gt;3x is excellent</p>
            </motion.div>

            {/* Metric 3: Payback Period */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
            >
              <p className="text-3xl font-bold text-cyan-600 mb-1">5 mo</p>
              <div className="flex items-center justify-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-600" />
                <p className="text-xs font-semibold text-gray-700">CAC Payback</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">&lt;12 mo target</p>
            </motion.div>

            {/* Metric 4: Break-Even */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
            >
              <p className="text-3xl font-bold text-cyan-600 mb-1">Year 5</p>
              <div className="flex items-center justify-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-cyan-600" />
                <p className="text-xs font-semibold text-gray-700">Break-Even</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">Clear path</p>
            </motion.div>
          </div>

          {/* Additional Metrics - Pill Style */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            <div className="px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full">
              <p className="text-sm font-semibold text-cyan-700">35% Gross Margin</p>
            </div>
            <div className="px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full">
              <p className="text-sm font-semibold text-cyan-700">18.4% IRR</p>
            </div>
            <div className="px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full">
              <p className="text-sm font-semibold text-cyan-700">58% Annual Growth</p>
            </div>
          </motion.div>
        </Container>
      </Slide>

      {/* Slide 10: The Investment */}
      <Slide id="investment" background="white">
        {/* Strong gradient transition to next slide */}
        <div className="absolute inset-0 bg-gradient-to-b from-white from-40% to-cyan-200 -z-10" />
        
        <Container size="xl">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading level="h2" className="mb-4 gradient-text">
                The Investment Opportunity
              </Heading>
              <Text variant="lead" className="max-w-3xl mx-auto text-gray-700">
                Join us in building the future of journalism monetization
              </Text>
            </motion.div>
          </div>

          {/* 3-Column Uniform Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* Column 1: The Investment */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-3xl p-[2px] bg-gradient-to-br from-cyan-400 to-orange-400"
            >
              <div className="bg-gradient-to-br from-cyan-50 to-orange-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 flex flex-col transition-shadow duration-300 h-full">
                {/* Hero Number */}
                <div className="text-center mb-6">
                  <p className="text-xs font-semibold text-cyan-600 uppercase tracking-wide mb-2">Raising</p>
                  <motion.p
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-6xl font-extrabold gradient-text mb-1"
                  >
                    $3M
                  </motion.p>
                  <p className="text-lg font-bold text-gray-700">Seed Round</p>
                </div>

                {/* Investment Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-cyan-200">
                    <span className="text-xs font-semibold text-gray-700">Equity</span>
                    <span className="text-base font-bold text-cyan-600">20%</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-cyan-200">
                    <span className="text-xs font-semibold text-gray-700">Runway</span>
                    <span className="text-base font-bold text-cyan-600">18-24 mo</span>
                  </div>
                </div>

                {/* Use of Funds */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-3">Use of Funds</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-gray-700">🏗️ Platform</span>
                        <span className="text-xs font-bold text-cyan-600">$1.2M</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-gray-700">🚀 Pilots</span>
                        <span className="text-xs font-bold text-cyan-600">$1.05M</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-gray-700">🤝 Publishers</span>
                        <span className="text-xs font-bold text-cyan-600">$750K</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Column 2: The Returns - HERO CARD */}
            <motion.div
              initial={{ scale: 1.15 }}
              whileHover={{ y: -12, scale: 1.25 }}
              className="relative z-10 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-400 rounded-3xl p-6 shadow-2xl hover:shadow-3xl flex flex-col transition-all duration-300"
              animate={{
                scale: 1.15,
                boxShadow: [
                  '0 25px 50px -12px rgba(247, 112, 36, 0.25), 0 0 40px rgba(247, 112, 36, 0.15)',
                  '0 25px 50px -12px rgba(247, 112, 36, 0.35), 0 0 60px rgba(247, 112, 36, 0.25)',
                  '0 25px 50px -12px rgba(247, 112, 36, 0.25), 0 0 40px rgba(247, 112, 36, 0.15)'
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Hero Number */}
              <div className="text-center mb-6">
                <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">Projected Return</p>
                <motion.p
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-6xl font-extrabold text-orange-600 mb-1"
                >
                  15x
                </motion.p>
                <p className="text-lg font-bold text-gray-700">Base Case Multiple</p>
              </div>

              {/* Return Metrics */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-orange-200">
                  <span className="text-xs font-semibold text-gray-700">IRR</span>
                  <span className="text-base font-bold text-orange-600">18.4%</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-orange-200">
                  <span className="text-xs font-semibold text-gray-700">Year 5 ARR</span>
                  <span className="text-base font-bold text-orange-600">$6.29M</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-orange-200">
                  <span className="text-xs font-semibold text-gray-700">Break-Even</span>
                  <span className="text-base font-bold text-orange-600">Year 5</span>
                </div>
              </div>
            </motion.div>

            {/* Column 3: Why Invest Now */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-3xl p-[2px] bg-gradient-to-br from-cyan-400 to-orange-400"
            >
              <div className="bg-gradient-to-br from-cyan-50 to-orange-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 flex flex-col transition-shadow duration-300 h-full">
                {/* Header */}
                <div className="text-center mb-6">
                  <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">Investment Thesis</p>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-orange-400 flex items-center justify-center mb-2 shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg font-bold text-gray-900">Why Invest Now</p>
                </div>

                {/* Highlights */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-500 text-base mt-0.5">✓</span>
                    <span className="text-xs text-gray-700 leading-relaxed">Exceptional unit economics (11.5x LTV:CAC)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-500 text-base mt-0.5">✓</span>
                    <span className="text-xs text-gray-700 leading-relaxed">Fast payback period (5 months)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-500 text-base mt-0.5">✓</span>
                    <span className="text-xs text-gray-700 leading-relaxed">Capital-efficient path to profitability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-500 text-base mt-0.5">✓</span>
                    <span className="text-xs text-gray-700 leading-relaxed">First-mover in FedCM-powered news access</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </Slide>

      {/* Floating Pufferfish Mascot - Corner Companion */}
      <div className="fixed bottom-6 right-6 z-30 pointer-events-none">
        {/* Pufferfish */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -2, 0, 2, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <Image
            src="/branding/pufferfish.png"
            alt="FactrAI Mascot"
            width={70}
            height={70}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Bubbles */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute bottom-8 left-1/2 w-2 h-2 bg-cyan-400/40 rounded-full"
            animate={{
              y: [-10, -80],
              x: [0, Math.random() * 20 - 10],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Slide 14: About the Founders - Split Screen Hero */}
      <Slide id="about" background="none">
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Gradient Background - Fills entire viewport */}
          <div 
            className="absolute inset-0 -z-10"
            style={{
              background: 'linear-gradient(to right, rgb(6,192,215), rgb(247,112,36))',
            }}
          />
          
          {/* Header */}
          <div className="absolute top-8 left-0 right-0 z-20 text-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading level="h2" className="text-white mb-2 drop-shadow-lg">
                About the Founders
              </Heading>
              <Text variant="small" className="text-white/80 drop-shadow">
                Georgetown Capstone Project © 2026
              </Text>
            </motion.div>
          </div>

          {/* Split Screen Container */}
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

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center px-8 py-20">
                {/* Large Portrait */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-8"
                >
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    {/* Cyan glow ring */}
                    <div className="absolute -inset-4 bg-cyan-400/30 rounded-full blur-xl" />
                    <Image
                      src="/team/danyang.png"
                      alt="Danyang - Co-Founder & CEO"
                      fill
                      className="object-cover relative z-10"
                      sizes="256px"
                    />
                  </div>
                </motion.div>

                {/* Info Card with Glassmorphism */}
                <div className="backdrop-blur-lg bg-white/80 rounded-2xl p-6 shadow-xl border border-white/50 max-w-md">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Danyang (Darcy) Wang</h3>
                  <p className="text-cyan-600 font-semibold mb-1">Co-Founder & CEO</p>
                  <div className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Hustler
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Georgetown MSITM '26. Former Senior Policy Data Analyst at Tsingyan Research who engineered predictive forecasting models using 80,000+ data points. Yale Law School researcher with expertise in R programming, GIS mapping, and data visualization. AWS Certified Cloud Practitioner.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a
                      href="mailto:dw1026@georgetown.edu"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/danyang-wang-79984a253/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LinkedIn</span>
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

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center px-8 py-20">
                {/* Large Portrait */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-8"
                >
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    {/* Orange glow ring */}
                    <div className="absolute -inset-4 bg-orange-400/30 rounded-full blur-xl" />
                    <Image
                      src="/team/joshua.png"
                      alt="Joshua - Co-Founder & CTO"
                      fill
                      className="object-cover relative z-10"
                      sizes="256px"
                    />
                  </div>
                </motion.div>

                {/* Info Card with Glassmorphism */}
                <div className="backdrop-blur-lg bg-white/80 rounded-2xl p-6 shadow-xl border border-white/50 max-w-md">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Joshua Lee</h3>
                  <p className="text-orange-600 font-semibold mb-1">Co-Founder & CTO</p>
                  <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Hacker
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Georgetown MSITM '26. Branch Chief at NOAA Fisheries driving cloud strategy (GCP/OCI) and DevOps transformation. Award-winning technologist (NMFS Employee of the Year 2016, Team Member 2014) specializing in data architecture and secure web solutions.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a
                      href="mailto:jdl166@georgetown.edu"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/joshua-lee-339504100/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </Slide>
    </>
  );
}
