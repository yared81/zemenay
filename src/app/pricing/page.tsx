import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses getting started with digital transformation',
      features: [
        'Basic website development',
        'Email support',
        'Basic analytics',
        'Mobile responsive design',
        'SEO optimization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing businesses with advanced technology needs',
      features: [
        'Custom web application development',
        'Priority support',
        'Advanced analytics',
        'Database integration',
        'API development',
        'Security implementation',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [
        'Full-stack development',
        '24/7 dedicated support',
        'Custom integrations',
        'Scalable architecture',
        'Advanced security',
        'Performance monitoring',
        'Training & documentation',
        'Ongoing maintenance'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Simple <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the perfect plan for your business needs. All plans include our core services 
              with transparent pricing and no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative p-8 border rounded-2xl ${
                  plan.popular 
                    ? 'border-primary bg-primary/5 shadow-xl scale-105' 
                    : 'border-border hover:border-primary/30'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  {plan.name === 'Enterprise' ? (
                    <Link href="/contact">
                      <Button size="lg" className="w-full">
                        Contact Sales
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button size="lg" className="w-full">
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team can create a tailored package that perfectly fits your specific requirements 
            and budget. Let&apos;s discuss your project.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
