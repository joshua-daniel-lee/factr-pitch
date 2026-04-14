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
import HeroSlide from '@/components/slides/HeroSlide';
import SummarySlide from '@/components/slides/SummarySlide';
import ProductivityGapSlide from '@/components/slides/ProductivityGapSlide';
import SolutionSlide from '@/components/slides/SolutionSlide';
import DemoSlide from '@/components/slides/DemoSlide';
import HowItWorksSlide from '@/components/slides/HowItWorksSlide';
import TechnologySlide from '@/components/slides/TechnologySlide';
import BusinessModelSlide from '@/components/slides/BusinessModelSlide';
import MarketOpportunitySlide from '@/components/slides/MarketOpportunitySlide';
import FinancialsSlide from '@/components/slides/FinancialsSlide';
import InvestmentSlide from '@/components/slides/InvestmentSlide';
import FoundersSlide from '@/components/slides/FoundersSlide';
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
      <HeroSlide />

      {/* Slide 2: Executive Summary */}
      <SummarySlide />

      {/* Slide 3: The Productivity Gap */}
      <ProductivityGapSlide />

      {/* Slide 4: The Solution */}
      <SolutionSlide />

      {/* Slide 5: Try the Demo */}
      <DemoSlide />

      {/* Slide 6: How It Works */}
      <HowItWorksSlide />

      {/* Slide 7: Technology */}
      <TechnologySlide />

      {/* Slide 8: Business Model */}
      <BusinessModelSlide />

      {/* Slide 9: Market Opportunity */}
      <MarketOpportunitySlide />

      {/* Slide 10: Financial Model */}
      <FinancialsSlide />

      {/* Slide 11: The Investment */}
      <InvestmentSlide />

      {/* Slide 12: About the Founders */}
      <FoundersSlide />

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
            style={{ height: "auto" }}
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

    </>
  );
}
