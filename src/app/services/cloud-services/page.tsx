import React from 'react';
import { Cloud, Server, Database, Zap, CheckCircle, ArrowRight, Shield, Globe, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CloudServicesPage = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of your infrastructure to the cloud',
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Testing & Validation']
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable cloud infrastructure',
      features: ['Auto-scaling', 'Load Balancing', 'High Availability', 'Disaster Recovery']
    },
    {
      icon: Database,
      title: 'Cloud Databases',
      description: 'Managed database services in the cloud',
      features: ['SQL & NoSQL', 'Backup & Recovery', 'Performance Tuning', 'Monitoring']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security for your cloud environment',
      features: ['Identity Management', 'Access Control', 'Encryption', 'Compliance']
    }
  ];

  const platforms = [
    { name: 'Amazon Web Services', icon: 'AWS' },
    { name: 'Microsoft Azure', icon: 'Azure' },
    { name: 'Google Cloud Platform', icon: 'GCP' },
    { name: 'Digital Ocean', icon: 'DO' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Cloud className="h-4 w-4" />
              <span className="text-sm font-medium">Cloud Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Cloud
              <span className="block text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with scalable, secure, and cost-effective cloud solutions. 
              We help you leverage the power of the cloud to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">Start Cloud Journey</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Link href="/case-studies">View Cloud Cases</Link>
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
              Our Cloud Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end cloud solutions to modernize your infrastructure
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

      {/* Cloud Platforms */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cloud Platforms We Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We work with leading cloud providers to deliver the best solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center p-6">
                <div className="mb-4 p-4 bg-primary/10 rounded-xl text-primary w-fit mx-auto">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{platform.name}</h3>
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
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how cloud solutions can transform your business operations and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">
                  Get Cloud Assessment
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

export default CloudServicesPage;
