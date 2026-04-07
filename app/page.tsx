'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Slide from '@/components/layout/Slide';
import SlideNav from '@/components/layout/SlideNav';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <>
      <Navbar />
      <SlideNav />
      
      {/* Slide 1: Hero */}
      <Slide id="hero" background="white">
        <Container className="text-center h-full flex flex-col items-center justify-center">
          {/* Main Heading with stagger animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Heading level="h1" className="mb-6">
              The Universal Key to Premium Journalism
            </Heading>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button variant="primary" size="lg">Explore the Opportunity</Button>
            <Button variant="outline" size="lg">View Financials</Button>
          </motion.div>

          {/* Subtext */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8"
          >
            <Text variant="body" className="text-gray-500 max-w-2xl mx-auto text-sm">
              Restoring the economic bridge between world-class journalism and the everyday consumer
            </Text>
          </motion.div>
        </Container>
      </Slide>

      {/* Slide 2: Executive Summary */}
      <Slide id="summary" background="white">
        <Container className="text-center">
          <Heading level="h2" className="mb-6">
            The Subscription Trap
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Digital publishers trapped in a monetization bottleneck
          </Text>
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl max-w-2xl mx-auto">
            <Text variant="body" className="text-gray-600">
              Content coming soon...
            </Text>
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
