import React from 'react';
import { BarChart3, Database, TrendingUp, CheckCircle, ArrowRight, PieChart, LineChart, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const DataAnalyticsPage = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Strategy',
      description: 'Develop comprehensive data strategies aligned with business goals',
      features: ['Data Assessment', 'Architecture Design', 'Governance Framework', 'ROI Planning']
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Transform data into actionable insights with powerful BI tools',
      features: ['Interactive Dashboards', 'Real-time Reports', 'KPI Tracking', 'Data Visualization']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning for future insights and forecasting',
      features: ['Trend Analysis', 'Forecasting Models', 'Risk Assessment', 'Pattern Recognition']
    },
    {
      icon: Target,
      title: 'Performance Analytics',
      description: 'Monitor and optimize business performance with data-driven insights',
      features: ['Performance Metrics', 'Optimization Strategies', 'Benchmarking', 'Continuous Improvement']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
              <BarChart3 className="h-4 w-4" />
              <span className="text-sm font-medium">Data Analytics</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Data
              <span className="block text-primary">Analytics</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of your data with advanced analytics solutions. 
              We help you transform raw data into actionable insights that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">Start Analytics Journey</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Link href="/case-studies">View Analytics Cases</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Analytics Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive data analytics solutions to drive informed decision-making
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="mb-6 p-4 bg-primary/10 rounded-xl text-primary w-fit">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-darker/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Harness Your Data?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how data analytics can transform your business insights and decision-making.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">
                  Get Analytics Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalyticsPage;
