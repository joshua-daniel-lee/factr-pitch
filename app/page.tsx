'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, ExternalLink } from 'lucide-react';
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
import FounderCard from '@/components/ui/FounderCard';
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

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button variant="gradient" size="lg" className="w-64 shadow-md">Explore the Opportunity</Button>
            <Button variant="outline" size="lg" className="w-64 shadow-md">View Financials</Button>
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
              className="w-80 shadow-lg text-lg py-6"
              onClick={() => window.open('https://demo.factrai.com', '_blank')}
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

          {/* 3-Card Process Flow with Top Animated Connector */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-16">
            
            {/* Angular Data Flow Connector - SVG Path */}
            <svg 
              viewBox="0 0 1000 400"
              className="hidden md:block absolute inset-0 pointer-events-none z-15 w-full h-full"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Gradient for the line */}
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(6,182,212)" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="rgb(168,85,247)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="rgb(249,115,22)" stopOpacity="0.8" />
                </linearGradient>
                
                {/* Animated gradient for flowing effect */}
                <linearGradient id="flowAnimatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="30%" stopColor="rgb(6,182,212)" stopOpacity="1" />
                  <stop offset="50%" stopColor="white" stopOpacity="1" />
                  <stop offset="70%" stopColor="rgb(249,115,22)" stopOpacity="1" />
                  <stop offset="100%" stopColor="transparent" />
                  <animate 
                    attributeName="x1" 
                    values="-100%;200%" 
                    dur="3s" 
                    repeatCount="indefinite" 
                  />
                  <animate 
                    attributeName="x2" 
                    values="0%;300%" 
                    dur="3s" 
                    repeatCount="indefinite" 
                  />
                </linearGradient>
              </defs>
              
              {/* Main path with hard angles connecting images */}
              <motion.path
                d="M 166 100 L 333 100 L 333 300 L 500 300 L 500 180 L 666 180 L 833 180"
                stroke="url(#flowGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="miter"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
              
              {/* Animated flowing overlay */}
              <motion.path
                d="M 166 100 L 333 100 L 333 300 L 500 300 L 500 180 L 666 180 L 833 180"
                stroke="url(#flowAnimatedGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="miter"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: 1.5,
                  ease: "easeOut"
                }}
              />
              
              {/* Connection dots at each card */}
              <motion.circle
                cx="166"
                cy="100"
                r="6"
                fill="rgb(6,182,212)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.8 }}
                viewport={{ once: true }}
              />
              <motion.circle
                cx="500"
                cy="300"
                r="6"
                fill="rgb(168,85,247)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 2.0 }}
                viewport={{ once: true }}
              />
              <motion.circle
                cx="833"
                cy="180"
                r="6"
                fill="rgb(249,115,22)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 2.2 }}
                viewport={{ once: true }}
              />
            </svg>

            {/* Card 1: User Authentication - Image TOP */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 h-full hover:border-cyan-400 hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Step Number Badge */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white font-bold text-xl mb-4 mx-auto">
                  1
                </div>

                {/* Image Placeholder - TOP */}
                <div className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-gray-500">Image Coming Soon</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">User Authentication</h3>
                  <p className="text-sm text-gray-600 mb-4">
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
            </motion.div>

            {/* Card 2: Content Access - Image BOTTOM */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 h-full hover:border-purple-400 hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Step Number Badge */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white font-bold text-xl mb-4 mx-auto">
                  2
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Content Access</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    AI-powered pricing engine
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">→</span>
                      <span>Dynamic credit allocation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">→</span>
                      <span>Instant article unlock</span>
                    </li>
                  </ul>
                </div>

                {/* Image Placeholder - BOTTOM */}
                <div className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-gray-500">Image Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Publisher Payout - Image MIDDLE */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 h-full hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Step Number Badge */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white font-bold text-xl mb-4 mx-auto">
                  3
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">Publisher Payout</h3>

                {/* Image Placeholder - MIDDLE */}
                <div className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-gray-500">Image Coming Soon</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
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
            </motion.div>
          </div>

        </div>
      </Slide>

      {/* Slide 6: Technology */}
      <Slide id="technology" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6 gradient-text">
            Technical Innovation
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Privacy-preserving identity meets AI-powered pricing
          </Text>
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl max-w-2xl mx-auto">
            <Text variant="body" className="text-gray-600">
              Content coming soon...
            </Text>
          </div>
        </Container>
      </Slide>

      {/* Slide 7: Business Model */}
      <Slide id="business" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6 gradient-text">
            Three Revenue Streams
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            81% subscriptions, 12% affiliate, 7% breakage
          </Text>
          <div className="mt-8 p-6 bg-white rounded-2xl max-w-2xl mx-auto">
            <Text variant="body" className="text-gray-600">
              Content coming soon...
            </Text>
          </div>
        </Container>
      </Slide>

      {/* Slide 8: Market Opportunity */}
      <Slide id="market" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6 gradient-text">
            A $2B+ Market
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            500K information workers seeking better access
          </Text>
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl max-w-2xl mx-auto">
            <Text variant="body" className="text-gray-600">
              Content coming soon...
            </Text>
          </div>
        </Container>
      </Slide>

      {/* Slide 9: Financial Model */}
      <Slide id="financials" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6 gradient-text">
            Path to $6.3M ARR
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            19,430 users by Year 5 with strong unit economics
          </Text>
          <div className="mt-8">
            <Text variant="body" className="text-gray-600">
              Content coming soon...
            </Text>
          </div>
        </Container>
      </Slide>

      {/* Slide 10: The Investment */}
      <Slide id="investment" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6 gradient-text">
            Seed Round: $3M
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            15x return potential for early investors
          </Text>
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl max-w-2xl mx-auto">
            <Text variant="body" className="text-gray-600">
              Content coming soon...
            </Text>
          </div>
        </Container>
      </Slide>

      {/* Slide 11: Strategic Moat */}
      <Slide id="moat" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6 gradient-text">
            Five Unfair Advantages
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Network effects, FedCM integration, data reciprocity
          </Text>
          <div className="mt-8 p-6 bg-white rounded-2xl max-w-2xl mx-auto">
            <Text variant="body" className="text-gray-600">
              Content coming soon...
            </Text>
          </div>
        </Container>
      </Slide>

      {/* Slide 12: Vision & Impact */}
      <Slide id="vision" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6 gradient-text">
            Rebuilding the News Economy
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Sustainable journalism for the AI age
          </Text>
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl max-w-2xl mx-auto">
            <Text variant="body" className="text-gray-600">
              Content coming soon...
            </Text>
          </div>
        </Container>
      </Slide>

      {/* Slide 13: Georgetown Capstone */}
      <Slide id="capstone" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6 gradient-text">
            Research & Methodology
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Academic rigor meets real-world innovation
          </Text>
          <div className="mt-8 p-6 bg-white rounded-2xl max-w-2xl mx-auto">
            <Text variant="body" className="text-gray-600">
              Content coming soon...
            </Text>
          </div>
        </Container>
      </Slide>

      {/* Slide 14: About the Founders - Split Screen Hero */}
      <Slide id="about" background="white">
        <div className="relative h-full w-full overflow-hidden">
          {/* Unified Gradient Background (Cyan to Orange) */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgb(6,192,215), rgb(247,112,36))',
            }}
          />
          
          {/* Grainy Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
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
