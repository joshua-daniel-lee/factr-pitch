'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TrendingDown, MousePointerClick, DollarSign, UserX, Key, CreditCard, RefreshCw } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Slide from '@/components/layout/Slide';
import SlideNav from '@/components/layout/SlideNav';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

// Publisher logos constant
const PUBLISHER_LOGOS = [
  'nyt-logo.png',
  'wsj-logo.png',
  'ft-logo.png',
  'economist-logo.png',
  'bloomberg-logo.png',
  'atlantic-logo.png',
  'wapo-logo.png',
  'reuters-logo.png',
];

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
              src="/hero-image.svg" 
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
                        alt={logo.replace('-logo.png', '')}
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
              {/* Card 1: Traffic Decline */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(6,192,215,0.3), rgba(6,192,215,0.1)) border-box',
                  border: '2px solid transparent'
                }}
              >
                <TrendingDown className="w-8 h-8 text-cyan-600 mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter value={38} suffix="%" /><sup className="text-xs">1</sup>
                </div>
                <div className="text-sm font-medium text-gray-700 mb-1">Traffic Decline</div>
                <div className="text-xs text-gray-500">Since late 2024</div>
              </motion.div>

              {/* Card 2: Zero-Click */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(247,112,36,0.3), rgba(247,112,36,0.1)) border-box',
                  border: '2px solid transparent'
                }}
              >
                <MousePointerClick className="w-8 h-8 text-orange-600 mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter value={69} suffix="%" /><sup className="text-xs">2</sup>
                </div>
                <div className="text-sm font-medium text-gray-700 mb-1">Zero-Click</div>
                <div className="text-xs text-gray-500">In 2025</div>
              </motion.div>

              {/* Card 3: Revenue Loss */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(6,192,215,0.3), rgba(6,192,215,0.1)) border-box',
                  border: '2px solid transparent'
                }}
              >
                <DollarSign className="w-8 h-8 text-cyan-600 mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter value={2} prefix="$" suffix="B" /><sup className="text-xs">3</sup>
                </div>
                <div className="text-sm font-medium text-gray-700 mb-1">Revenue Loss</div>
                <div className="text-xs text-gray-500">Annual advertising</div>
              </motion.div>

              {/* Card 4: Bounce Rate */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(247,112,36,0.3), rgba(247,112,36,0.1)) border-box',
                  border: '2px solid transparent'
                }}
              >
                <UserX className="w-8 h-8 text-orange-600 mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter value={95} suffix="%" /><sup className="text-xs">5</sup>
                </div>
                <div className="text-sm font-medium text-gray-700 mb-1">Bounce Rate</div>
                <div className="text-xs text-gray-500">Non-subscribers leave</div>
              </motion.div>
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
              {['Knowledge Professionals', 'Informed Citizens', 'Academics & Learners', 'Intent-Driven Bouncers', 'Enterprise Teams'].map((persona) => (
                <div
                  key={persona}
                  className="px-4 py-1.5 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full border border-cyan-200 transition-all hover:border-cyan-300 hover:shadow-sm"
                >
                  <Text variant="small" className="font-medium text-gray-700 text-xs whitespace-nowrap">
                    {persona}
                  </Text>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Three-Panel Pain Journey */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

            {/* Panel 1: Digital Hide-and-Seek */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-white p-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer group"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(247,112,36,0.4), rgba(247,112,36,0.2)) border-box',
                border: '3px solid transparent'
              }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-3 py-1.5 rounded-lg mb-3 text-center font-semibold text-sm flex items-center justify-center gap-2">
                <span className="text-lg">🔍</span>
                Digital Hide-and-Seek
              </div>
              
              {/* Illustration */}
              <div className="bg-white rounded-lg h-36 mb-3 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/digital-search-frustration.svg"
                    alt="Frustrated professional drowning in browser tabs"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Description */}
              <div className="flex-1">
                <Text variant="small" className="text-gray-600 leading-relaxed text-xs">
                  Users are trapped in a <strong className="text-cyan-600 font-bold">cycle of digital hide-and-seek</strong>, wasting a significant portion of their professional lives <strong className="text-cyan-600 font-bold">searching for information</strong> they know exists but cannot access.
                </Text>
              </div>
            </motion.div>

            {/* Panel 2: Subscription Fatigue */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-white p-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer group"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(247,112,36,0.4), rgba(247,112,36,0.2)) border-box',
                border: '3px solid transparent'
              }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-3 py-1.5 rounded-lg mb-3 text-center font-semibold text-sm flex items-center justify-center gap-2">
                <span className="text-lg">💳</span>
                Subscription Fatigue
              </div>
              
              {/* Illustration */}
              <div className="bg-white rounded-lg h-36 mb-3 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/subscription-fatigue.svg"
                    alt="Phone showing subscription overload"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Description */}
              <div className="flex-1">
                <Text variant="small" className="text-gray-600 leading-relaxed text-xs">
                  Consumers have reached a point of <strong className="text-cyan-600 font-bold">absolute fatigue</strong>, where <strong className="text-cyan-600 font-bold">managing multiple recurring accounts</strong> has become a mental and financial burden they are no longer willing to carry.
                </Text>
              </div>
            </motion.div>

            {/* Panel 3: The Demand for Choice */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-white p-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer group"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(247,112,36,0.4), rgba(247,112,36,0.2)) border-box',
                border: '3px solid transparent'
              }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1.5 rounded-lg mb-3 text-center font-semibold text-sm flex items-center justify-center gap-2">
                <span className="text-lg">🚫</span>
                The Demand for Choice
              </div>
              
              {/* Illustration */}
              <div className="bg-white rounded-lg h-36 mb-3 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/paywall-blocked.svg"
                    alt="Computer screen with ACCESS DENIED paywall"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Description */}
              <div className="flex-1">
                <Text variant="small" className="text-gray-600 leading-relaxed text-xs">
                  There is a clear and growing frustration with <strong className="text-cyan-600 font-bold">rigid, binary paywalls</strong>, as users increasingly seek <strong className="text-cyan-600 font-bold">flexible, on-demand access</strong> that aligns with how they actually consume information.
                </Text>
              </div>
            </motion.div>
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
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(6,192,215,0.3), rgba(6,192,215,0.1)) border-box',
                    border: '2px solid transparent'
                  }}
                >
                  <Key className="w-8 h-8 text-cyan-600 mb-3" />
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    One Key, All Paywalls
                  </div>
                  <div className="text-xs text-gray-500">
                    Single OAuth/JWT identity • Auto-unlock partner content
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(247,112,36,0.3), rgba(247,112,36,0.1)) border-box',
                    border: '2px solid transparent'
                  }}
                >
                  <CreditCard className="w-8 h-8 text-orange-600 mb-3" />
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    The Credit Economy
                  </div>
                  <div className="text-xs text-gray-500">
                    Monthly credit pool • No decision fatigue • AI-powered
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(6,192,215,0.3), rgba(6,192,215,0.1)) border-box',
                    border: '2px solid transparent'
                  }}
                >
                  <RefreshCw className="w-8 h-8 text-cyan-600 mb-3" />
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    Data Reciprocity
                  </div>
                  <div className="text-xs text-gray-500">
                    Share 1st-party data • Unlike Apple News+ walled gardens
                  </div>
                </motion.div>
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
                  src="/app-mockup.png"
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
              src="/hero-image.svg" 
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
            <div className="px-4 py-1.5 bg-gradient-to-r from-orange-50 to-orange-100 rounded-full border border-orange-200 transition-all hover:border-orange-300 hover:shadow-sm">
              <Text variant="small" className="font-medium text-gray-700 text-xs whitespace-nowrap">
                No signup required
              </Text>
            </div>
            <div className="px-4 py-1.5 bg-gradient-to-r from-orange-50 to-orange-100 rounded-full border border-orange-200 transition-all hover:border-orange-300 hover:shadow-sm">
              <Text variant="small" className="font-medium text-gray-700 text-xs whitespace-nowrap">
                Full feature access
              </Text>
            </div>
            <div className="px-4 py-1.5 bg-gradient-to-r from-orange-50 to-orange-100 rounded-full border border-orange-200 transition-all hover:border-orange-300 hover:shadow-sm">
              <Text variant="small" className="font-medium text-gray-700 text-xs whitespace-nowrap">
                2-minute experience
              </Text>
            </div>
          </motion.div>
        </Container>
      </Slide>

      {/* Slide 6: How It Works */}
      <Slide id="how-it-works" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6 gradient-text">
            Three-Step Value Flow
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Universal browser key powered by FedCM
          </Text>
          <div className="mt-8 p-6 bg-white rounded-2xl max-w-2xl mx-auto">
            <Text variant="body" className="text-gray-600">
              Content coming soon...
            </Text>
          </div>
        </Container>
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

      {/* Slide 14: Contact */}
      <Slide id="contact" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6 gradient-text">
            Let's Talk
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto mb-8">
            Connect with us about FactrAI
          </Text>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" size="lg">Contact Us</Button>
            <Button variant="outline" size="lg">View Research</Button>
          </div>
          <div className="mt-12">
            <Text variant="small" className="text-gray-600">
              Georgetown Capstone Project © 2026
            </Text>
          </div>
        </Container>
      </Slide>
    </>
  );
}
