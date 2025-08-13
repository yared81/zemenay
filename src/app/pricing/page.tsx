import React from 'react';
import { Check, Star, Zap, Building2, Crown, Users, Code, Globe, Shield, Database, Smartphone, Cloud } from 'lucide-react';

const PricingPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses starting their digital journey',
      price: '50,000',
      period: 'ETB/month',
      icon: Zap,
      features: [
        'Basic website development',
        'Email hosting setup',
        'Basic SEO optimization',
        '5 hours of support/month',
        'Basic analytics dashboard',
        'Mobile responsive design'
      ],
      popular: false,
      cta: 'Get Started',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses needing comprehensive solutions',
      price: '150,000',
      period: 'ETB/month',
      icon: Building2,
      features: [
        'Custom web application development',
        'Database design & setup',
        'API development & integration',
        'Advanced SEO & marketing tools',
        '20 hours of support/month',
        'Performance optimization',
        'Security implementation',
        'Backup & maintenance'
      ],
      popular: true,
      cta: 'Most Popular',
      color: 'from-primary to-primary-darker'
    },
    {
      name: 'Enterprise',
      description: 'Full-service solutions for large organizations',
      price: '500,000',
      period: 'ETB/month',
      icon: Crown,
      features: [
        'Full-stack application development',
        'Cloud infrastructure setup',
        'Advanced security & compliance',
        'AI & machine learning integration',
        'Unlimited support hours',
        'Custom integrations',
        'Performance monitoring',
        '24/7 system monitoring',
        'Dedicated project manager',
        'Training & documentation'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored solutions built specifically for your business needs',
      pricing: 'From 200,000 ETB'
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      pricing: 'From 500,000 ETB'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security audits, implementation, and monitoring',
      pricing: 'From 100,000 ETB'
    },
    {
      icon: Database,
      title: 'Data Analytics & BI',
      description: 'Advanced analytics, reporting, and business intelligence solutions',
      pricing: 'From 150,000 ETB'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      pricing: 'From 300,000 ETB'
    },
    {
      icon: Cloud,
      title: 'Cloud Services & DevOps',
      description: 'Cloud migration, infrastructure, and DevOps implementation',
      pricing: 'From 250,000 ETB'
    }
  ];

  const faqs = [
    {
      question: 'What payment terms do you offer?',
      answer: 'We offer flexible payment terms including monthly, quarterly, and annual billing. Enterprise clients can discuss custom payment arrangements.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, all our plans include ongoing support and maintenance. The level of support varies by plan, and we also offer additional support packages.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of modern technologies including React, Node.js, Python, .NET, AWS, Azure, and many others. We choose the best tech stack for your specific needs.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during project planning.'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training for your team to ensure they can effectively use and maintain the solutions we build for you.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div 
          className="container mx-auto px-6 text-center"
        >
          <div 
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6"
          >
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">Pricing Plans</span>
          </div>
          <h1 
            className="text-5xl md:text-6xl font-bold text-foreground mb-6"
          >
            Transparent
            <span className="block gradient-text mt-2">Pricing</span>
          </h1>
          <p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Choose the perfect plan for your business needs. All plans include our commitment 
            to quality, support, and your success.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 bg-background rounded-2xl border-2 transition-all duration-300 hover-lift ${
                  plan.popular 
                    ? 'border-primary shadow-2xl scale-105' 
                    : 'border-border/50 hover:border-primary/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      {plan.cta}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} text-white rounded-2xl mb-4`}>
                    <plan.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary-darker text-white shadow-lg hover:shadow-xl'
                    : 'bg-muted hover:bg-primary hover:text-primary-foreground'
                }`}>
                  {plan.popular ? 'Get Started' : plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Custom Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Need something specific? We offer custom solutions tailored to your exact requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift group"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-xl text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-lg font-semibold text-primary">
                  {service.pricing}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-primary-darker/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-primary hover:bg-primary-darker text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Download Pricing Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
