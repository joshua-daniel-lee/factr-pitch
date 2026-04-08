import { TrendingDown, MousePointerClick, DollarSign, UserX, Key, CreditCard, RefreshCw } from 'lucide-react';

// Publisher Logos
export const PUBLISHER_LOGOS = [
  'nyt-logo.png',
  'wsj-logo.png',
  'ft-logo.png',
  'economist-logo.png',
  'bloomberg-logo.png',
  'atlantic-logo.png',
  'wapo-logo.png',
  'reuters-logo.png',
];

// Stat Cards Data
export const STAT_CARDS = [
  {
    icon: TrendingDown,
    value: 38,
    suffix: '%',
    label: 'Traffic Decline',
    sublabel: 'Since late 2024',
    footnote: 1,
    variant: 'cyan' as const,
    delay: 0.1,
  },
  {
    icon: MousePointerClick,
    value: 69,
    suffix: '%',
    label: 'Zero-Click',
    sublabel: 'In 2025',
    footnote: 2,
    variant: 'orange' as const,
    delay: 0.2,
  },
  {
    icon: DollarSign,
    value: 2,
    prefix: '$',
    suffix: 'B',
    label: 'Revenue Loss',
    sublabel: 'Annual advertising',
    footnote: 3,
    variant: 'cyan' as const,
    delay: 0.3,
  },
  {
    icon: UserX,
    value: 95,
    suffix: '%',
    label: 'Bounce Rate',
    sublabel: 'Non-subscribers leave',
    footnote: 5,
    variant: 'orange' as const,
    delay: 0.4,
  },
];

// Pain Point Cards Data
export const PAIN_POINT_CARDS = [
  {
    emoji: '🔍',
    title: 'Digital Hide-and-Seek',
    imageSrc: '/digital-search-frustration.svg',
    imageAlt: 'Frustrated professional drowning in browser tabs',
    description: 'Users are trapped in a cycle of digital hide-and-seek, wasting a significant portion of their professional lives searching for information they know exists but cannot access.',
    delay: 0.05,
  },
  {
    emoji: '💳',
    title: 'Subscription Fatigue',
    imageSrc: '/subscription-fatigue.svg',
    imageAlt: 'Phone showing subscription overload',
    description: 'Consumers have reached a point of absolute fatigue, where managing multiple recurring accounts has become a mental and financial burden they are no longer willing to carry.',
    delay: 0.1,
  },
  {
    emoji: '🚫',
    title: 'The Demand for Choice',
    imageSrc: '/paywall-blocked.svg',
    imageAlt: 'Computer screen with ACCESS DENIED paywall',
    description: 'There is a clear and growing frustration with rigid, binary paywalls, as users increasingly seek flexible, on-demand access that aligns with how they actually consume information.',
    delay: 0.15,
  },
];

// Value Proposition Cards Data
export const VALUE_PROP_CARDS = [
  {
    icon: Key,
    title: 'One Key, All Paywalls',
    description: 'Single OAuth/JWT identity • Auto-unlock partner content',
    variant: 'cyan' as const,
    delay: 0.1,
  },
  {
    icon: CreditCard,
    title: 'The Credit Economy',
    description: 'Monthly credit pool • No decision fatigue • AI-powered',
    variant: 'orange' as const,
    delay: 0.2,
  },
  {
    icon: RefreshCw,
    title: 'Data Reciprocity',
    description: 'Share 1st-party data • Unlike Apple News+ walled gardens',
    variant: 'cyan' as const,
    delay: 0.3,
  },
];

// User Personas
export const USER_PERSONAS = [
  'Knowledge Professionals',
  'Informed Citizens',
  'Academics & Learners',
  'Intent-Driven Bouncers',
  'Enterprise Teams',
];

// Demo Features
export const DEMO_FEATURES = [
  'No signup required',
  'Full feature access',
  '2-minute experience',
];
