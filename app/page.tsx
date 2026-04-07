'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { TrendingDown, MousePointerClick, DollarSign, UserX } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Slide from '@/components/layout/Slide';
import SlideNav from '@/components/layout/SlideNav';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';

// Animated Counter Component
function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>
        {useTransform(motionValue, (latest) => Math.round(latest).toLocaleString())}
      </motion.span>
      {suffix}
    </span>
  );
}

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
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Main Heading with stagger animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Heading level="h1" className="mb-6">
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
        <Container size="xl">
          {/* Publisher Logos Carousel */}
          <div className="mb-12 overflow-hidden">
            <div className="relative">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
              
              {/* Scrolling container */}
              <div className="flex gap-12 items-center">
                <motion.div
                  className="flex gap-12 items-center"
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
                  {[
                    'nyt-logo.png',
                    'wsj-logo.png',
                    'ft-logo.png',
                    'economist-logo.png',
                    'bloomberg-logo.png',
                    'atlantic-logo.png',
                    'wapo-logo.png',
                    'reuters-logo.png',
                  ].map((logo, index) => (
                    <div
                      key={`logo-1-${index}`}
                      className="flex-shrink-0 w-32 h-16 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={`/publishers/${logo}`}
                        alt={logo.replace('-logo.png', '')}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                  {/* Second set for seamless loop */}
                  {[
                    'nyt-logo.png',
                    'wsj-logo.png',
                    'ft-logo.png',
                    'economist-logo.png',
                    'bloomberg-logo.png',
                    'atlantic-logo.png',
                    'wapo-logo.png',
                    'reuters-logo.png',
                  ].map((logo, index) => (
                    <div
                      key={`logo-2-${index}`}
                      className="flex-shrink-0 w-32 h-16 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={`/publishers/${logo}`}
                        alt={logo.replace('-logo.png', '')}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                  {/* Third set for extra coverage */}
                  {[
                    'nyt-logo.png',
                    'wsj-logo.png',
                    'ft-logo.png',
                    'economist-logo.png',
                    'bloomberg-logo.png',
                    'atlantic-logo.png',
                    'wapo-logo.png',
                    'reuters-logo.png',
                  ].map((logo, index) => (
                    <div
                      key={`logo-3-${index}`}
                      className="flex-shrink-0 w-32 h-16 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={`/publishers/${logo}`}
                        alt={logo.replace('-logo.png', '')}
                        fill
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
            <div className="grid grid-cols-2 gap-4">
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

      {/* Slide 3: The Problem */}
      <Slide id="problem" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
            A $2B Crisis
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Publishers lose 95% of potential revenue at paywalls
          </Text>
          <div className="mt-8">
            <Text variant="body" className="text-gray-600">
              Content coming soon...
            </Text>
          </div>
        </Container>
      </Slide>

      {/* Slide 4: Customer Landscape */}
      <Slide id="customers" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
            Who Suffers?
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Information workers wasting 9 hours/week on digital hide-and-seek
          </Text>
          <div className="mt-8 p-6 bg-white rounded-2xl max-w-2xl mx-auto">
            <Text variant="body" className="text-gray-600">
              Content coming soon...
            </Text>
          </div>
        </Container>
      </Slide>

      {/* Slide 5: The Solution */}
      <Slide id="solution" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
            FactrAI: One Key, All Paywalls
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Frictionless, credit-based access to premium journalism
          </Text>
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl max-w-2xl mx-auto">
            <Text variant="body" className="text-gray-600">
              Content coming soon...
            </Text>
          </div>
        </Container>
      </Slide>

      {/* Slide 6: How It Works */}
      <Slide id="how-it-works" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
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

      {/* Slide 7: Technology */}
      <Slide id="technology" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
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

      {/* Slide 8: Business Model */}
      <Slide id="business" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
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

      {/* Slide 9: Market Opportunity */}
      <Slide id="market" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
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

      {/* Slide 10: Financial Model */}
      <Slide id="financials" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
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

      {/* Slide 11: The Investment */}
      <Slide id="investment" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
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

      {/* Slide 12: Strategic Moat */}
      <Slide id="moat" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
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

      {/* Slide 13: Vision & Impact */}
      <Slide id="vision" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
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

      {/* Slide 14: Georgetown Capstone */}
      <Slide id="capstone" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
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

      {/* Slide 15: Contact */}
      <Slide id="contact" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
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
