import React from 'react';
import { Smartphone, Code, Zap, CheckCircle, ArrowRight, Shield, Globe, Users, SmartphoneIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const MobileSolutionsPage = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps']
    },
    {
      icon: Globe,
      title: 'Progressive Web Apps',
      description: 'Web applications that work like native mobile apps',
      features: ['Offline Support', 'Push Notifications', 'App-like Experience', 'Cross-platform']
    },
    {
      icon: Shield,
      title: 'Mobile Security',
      description: 'Secure mobile applications with enterprise-grade security',
      features: ['Data Encryption', 'Secure Authentication', 'App Hardening', 'Compliance']
    },
    {
      icon: Users,
      title: 'Mobile Strategy',
      description: 'Comprehensive mobile strategy and consulting services',
      features: ['Platform Selection', 'User Experience Design', 'Performance Optimization', 'Analytics']
    }
  ];

  const platforms = [
    'iOS', 'Android', 'React Native', 'Flutter', 'Xamarin', 'Progressive Web Apps'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Smartphone className="h-4 w-4" />
              <span className="text-sm font-medium">Mobile Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Mobile
              <span className="block text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Create powerful mobile experiences that engage users and drive business growth. 
              We develop innovative mobile solutions for iOS, Android, and cross-platform platforms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">Start Mobile Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Link href="/case-studies">View Mobile Cases</Link>
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
              Our Mobile Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mobile development solutions for modern businesses
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

      {/* Platforms Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Platforms We Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We develop for all major mobile platforms and technologies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border/50 text-center hover:border-primary/30 transition-all duration-300">
                <span className="text-sm font-medium text-muted-foreground">{platform}</span>
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
              Ready to Go Mobile?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how mobile solutions can transform your business and engage your customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">
                  Start Mobile Journey
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

export default MobileSolutionsPage;
