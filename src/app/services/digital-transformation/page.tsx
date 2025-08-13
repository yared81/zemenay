import React from 'react';
import { TrendingUp, Users, Database, Cloud, Shield, Zap, CheckCircle, ArrowRight, BarChart3, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const DigitalTransformationPage = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Business Process Automation',
      description: 'Streamline operations and eliminate manual processes with intelligent automation',
      features: ['Workflow Automation', 'Process Optimization', 'Efficiency Metrics', 'ROI Tracking']
    },
    {
      icon: Database,
      title: 'Data Strategy & Analytics',
      description: 'Transform raw data into actionable insights for better decision-making',
      features: ['Data Architecture', 'Business Intelligence', 'Predictive Analytics', 'Real-time Dashboards']
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Modernize your infrastructure with secure cloud solutions',
      features: ['Migration Planning', 'Security Assessment', 'Performance Optimization', 'Cost Management']
    },
    {
      icon: Smartphone,
      title: 'Digital Customer Experience',
      description: 'Create seamless digital experiences that delight your customers',
      features: ['UX/UI Design', 'Mobile Optimization', 'Customer Journey Mapping', 'Feedback Systems']
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize workflows for better productivity'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on real-time data and analytics'
    },
    {
      icon: Users,
      title: 'Improved Customer Experience',
      description: 'Deliver seamless digital experiences that increase customer satisfaction'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Implement modern security measures to protect your digital assets'
    }
  ];

  const industries = [
    'Banking & Finance', 'Healthcare', 'Manufacturing', 'Retail', 'Education', 'Government', 'Telecommunications', 'Transportation'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Digital Transformation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Digital
              <span className="block text-primary">Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business for the digital age with our comprehensive digital transformation services. 
              We help organizations modernize, automate, and innovate to stay competitive in today's fast-paced world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">Start Transformation</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Link href="/case-studies">View Success Stories</Link>
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
              Our Transformation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital transformation solutions tailored to your industry and business needs
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Digital Transformation?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The benefits of embracing digital transformation for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="mb-4 p-4 bg-primary/10 rounded-xl text-primary w-fit mx-auto">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We have experience transforming businesses across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border/50 text-center hover:border-primary/30 transition-all duration-300">
                <span className="text-sm font-medium text-muted-foreground">{industry}</span>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how digital transformation can revolutionize your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">
                  Start Your Journey
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

export default DigitalTransformationPage;
