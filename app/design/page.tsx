'use client';

import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import StatCard from '@/components/visualizations/StatCard';
import ProgressBar from '@/components/visualizations/ProgressBar';
import PieChartDisplay from '@/components/visualizations/PieChartDisplay';
import LineChartDisplay from '@/components/visualizations/LineChartDisplay';
import BarChartDisplay from '@/components/visualizations/BarChartDisplay';
import ComparisonTable from '@/components/visualizations/ComparisonTable';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

export default function DesignShowcase() {
  // Sample data for charts
  const revenueData = [
    { name: 'Subscriptions', value: 81, color: '#06c0d7' },
    { name: 'Affiliate', value: 12, color: '#f77024' },
    { name: 'Breakage', value: 7, color: '#117297' }
  ];

  const userGrowthData = [
    { year: 'Year 1', users: 1128 },
    { year: 'Year 2', users: 3200 },
    { year: 'Year 3', users: 7185 },
    { year: 'Year 4', users: 12850 },
    { year: 'Year 5', users: 19430 }
  ];

  const financialData = [
    { year: 'Year 1', revenue: 216 },
    { year: 'Year 2', revenue: 969 },
    { year: 'Year 3', revenue: 2100 },
    { year: 'Year 4', revenue: 4000 },
    { year: 'Year 5', revenue: 6300 }
  ];

  const comparisonData = [
    { feature: 'Publisher Data Access', FactrAI: true, 'Apple News+': false, 'Traditional Subs': true },
    { feature: 'Flexible Pricing', FactrAI: true, 'Apple News+': false, 'Traditional Subs': false },
    { feature: 'Decision Fatigue', FactrAI: 'Low', 'Apple News+': 'Low', 'Traditional Subs': '🟡 Medium' },
    { feature: 'Human Verification', FactrAI: true, 'Apple News+': false, 'Traditional Subs': false }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <Section background="gradient" className="min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center">
            <Heading level="h1" className="mb-6 text-white">
              FactrAI Design System
            </Heading>
            <Text variant="lead" className="text-white/90 mb-8">
              A comprehensive showcase of all UI components and visualizations
            </Text>
            <div className="flex gap-4 justify-center">
              <Button variant="primary" size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Typography */}
      <Section background="white">
        <Container>
          <Heading level="h2" className="mb-8">Typography</Heading>
          <div className="space-y-6">
            <div>
              <Heading level="h1">Heading 1 - Inter</Heading>
              <Heading level="h1" gradient>Heading 1 - Inter Gradient</Heading>
            </div>
            <Heading level="h2">Heading 2 - Newsreader</Heading>
            <Heading level="h3">Heading 3 - Newsreader</Heading>
            <Heading level="h4">Heading 4 - Newsreader</Heading>
            <Text variant="lead">
              Lead text: Digital publishers are trapped in a monetization bottleneck.
            </Text>
            <Text variant="body">
              Body text: This is the standard body text using Roboto font family. It's optimized for readability with generous line height and spacing.
            </Text>
            <Text variant="small">
              Small text: Additional information or supporting details.
            </Text>
            <Text variant="caption">
              Caption text: Image captions or footnotes.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Colors */}
      <Section background="lavender">
        <Container>
          <Heading level="h2" className="mb-8">Color Palette</Heading>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-full h-32 bg-primary rounded-2xl mb-3 shadow-soft"></div>
              <Text variant="small" className="font-medium">Primary</Text>
              <Text variant="caption">#06c0d7</Text>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-accent rounded-2xl mb-3 shadow-soft"></div>
              <Text variant="small" className="font-medium">Accent</Text>
              <Text variant="caption">#f77024</Text>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-blue-chill rounded-2xl mb-3 shadow-soft"></div>
              <Text variant="small" className="font-medium">Blue Chill</Text>
              <Text variant="caption">#117297</Text>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-bunting rounded-2xl mb-3 shadow-soft"></div>
              <Text variant="small" className="font-medium">Bunting</Text>
              <Text variant="caption">#1b2356</Text>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-ironstone rounded-2xl mb-3 shadow-soft"></div>
              <Text variant="small" className="font-medium">Ironstone</Text>
              <Text variant="caption">#894a3d</Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section background="white">
        <Container>
          <Heading level="h2" className="mb-8">Buttons</Heading>
          <div className="space-y-6">
            <div>
              <Text variant="small" className="mb-3 font-medium">Variants</Text>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="outline">Outline</Button>
              </div>
            </div>
            <div>
              <Text variant="small" className="mb-3 font-medium">Sizes</Text>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cards */}
      <Section background="lavender">
        <Container>
          <Heading level="h2" className="mb-8">Cards</Heading>
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="default">
              <Heading level="h4" className="mb-2">Default Card</Heading>
              <Text variant="small">
                Standard white card with border and subtle shadow.
              </Text>
            </Card>
            <Card variant="glass">
              <Heading level="h4" className="mb-2">Glass Card</Heading>
              <Text variant="small">
                Glassmorphism effect with backdrop blur.
              </Text>
            </Card>
            <Card variant="gradient">
              <Heading level="h4" className="mb-2">Gradient Card</Heading>
              <Text variant="small">
                Primary gradient background with white text.
              </Text>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Badges */}
      <Section background="white">
        <Container>
          <Heading level="h2" className="mb-8">Badges</Heading>
          <div className="space-y-4">
            <div>
              <Text variant="small" className="mb-3 font-medium">Variants</Text>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
              </div>
            </div>
            <div>
              <Text variant="small" className="mb-3 font-medium">Sizes</Text>
              <div className="flex flex-wrap items-center gap-2">
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stat Cards */}
      <Section background="dark">
        <Container>
          <Heading level="h2" className="mb-8 text-white">Statistics & Numbers</Heading>
          <div className="grid md:grid-cols-4 gap-6">
            <StatCard
              value={95}
              label="Bounce Rate"
              suffix="%"
              gradient
              icon={<TrendingUp className="w-8 h-8" />}
            />
            <StatCard
              value={2}
              label="Annual Loss"
              prefix="$"
              suffix="B"
              icon={<DollarSign className="w-8 h-8" />}
            />
            <StatCard
              value={9}
              label="Hours Wasted Weekly"
              suffix=" hrs"
              icon={<Clock className="w-8 h-8" />}
            />
            <StatCard
              value={19430}
              label="Year 5 Users"
              icon={<Users className="w-8 h-8" />}
            />
          </div>
        </Container>
      </Section>

      {/* Progress Bars */}
      <Section background="white">
        <Container>
          <Heading level="h2" className="mb-8">Progress Bars</Heading>
          <div className="space-y-6 max-w-2xl">
            <ProgressBar value={81} label="Subscription Revenue" color="primary" />
            <ProgressBar value={12} label="Affiliate Fees" color="accent" />
            <ProgressBar value={7} label="Credit Breakage" color="success" />
            <ProgressBar value={35} label="Gross Margin" height="lg" />
          </div>
        </Container>
      </Section>

      {/* Charts */}
      <Section background="lavender">
        <Container>
          <Heading level="h2" className="mb-8">Data Visualizations</Heading>
          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="default">
              <PieChartDisplay 
                data={revenueData} 
                title="Revenue Breakdown"
              />
            </Card>
            <Card variant="default">
              <LineChartDisplay
                data={userGrowthData}
                lines={[{ dataKey: 'users', name: 'Users', color: '#06c0d7' }]}
                xAxisKey="year"
                title="User Growth Trajectory"
              />
            </Card>
            <Card variant="default" className="md:col-span-2">
              <BarChartDisplay
                data={financialData}
                bars={[{ dataKey: 'revenue', name: 'Revenue ($K)', color: '#117297' }]}
                xAxisKey="year"
                title="5-Year Revenue Progression"
              />
            </Card>
          </div>
        </Container>
      </Section>

      {/* Comparison Table */}
      <Section background="white">
        <Container>
          <Heading level="h2" className="mb-8">Comparison Tables</Heading>
          <ComparisonTable
            columns={['FactrAI', 'Apple News+', 'Traditional Subs']}
            data={comparisonData}
            title="Competitive Analysis"
          />
        </Container>
      </Section>

      {/* Footer */}
      <Section background="dark" className="py-12">
        <Container>
          <div className="text-center text-white/80">
            <Text variant="small">
              FactrAI Design System · Georgetown Capstone Project · 2026
            </Text>
          </div>
        </Container>
      </Section>
    </main>
  );
}
