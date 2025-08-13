// src/components/home-ui/services-overview.tsx
import React from 'react';
import Link from 'next/link';
import { Code, Globe, Shield, Database, Smartphone, Cloud, TrendingUp, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon: Icon, title, description, features, className }) => {
  return (
    <div className={cn("group relative p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl", className)}>
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl text-white w-fit group-hover:scale-110 transition-all duration-300 shadow-lg">
          <Icon className="h-8 w-8" />
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{description}</p>
        
        {/* Features List */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Hover Effect Line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-b-2xl group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

const ServicesOverview = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs, from web applications to enterprise systems.',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development', 'Database Design']
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital solutions that streamline operations and boost efficiency.',
      features: ['Process Automation', 'Cloud Migration', 'Legacy System Modernization', 'Digital Workflows', 'Integration Services']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response', 'Security Training']
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Harness the power of your data with advanced analytics, BI tools, and data management solutions.',
      features: ['Data Analytics', 'Business Intelligence', 'Data Warehousing', 'Machine Learning', 'Predictive Analytics']
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps', 'Mobile Strategy']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and services to power your applications and business operations.',
      features: ['AWS/Azure/GCP', 'Cloud Architecture', 'DevOps Services', 'Serverless Solutions', 'Cloud Security']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full border border-blue-500/20 mb-6">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Comprehensive Tech
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We deliver end-to-end technology solutions that drive innovation, 
            efficiency, and growth for businesses across Ethiopia and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              className="animate-fade-in-up"
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our technology solutions can help you achieve your goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;