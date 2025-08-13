import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Users, Database, Network, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CybersecurityPage = () => {
  const services = [
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Comprehensive security audits and vulnerability assessments',
      features: ['Penetration Testing', 'Security Audits', 'Risk Assessment', 'Compliance Reviews']
    },
    {
      icon: Lock,
      title: 'Security Architecture',
      description: 'Design and implement robust security frameworks',
      features: ['Zero Trust Architecture', 'Identity Management', 'Access Control', 'Security Policies']
    },
    {
      icon: Eye,
      title: 'Threat Detection',
      description: 'Advanced threat detection and incident response',
      features: ['SIEM Implementation', 'Real-time Monitoring', 'Incident Response', 'Forensic Analysis']
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Secure your sensitive data with encryption and access controls',
      features: ['Data Encryption', 'Backup Security', 'Privacy Compliance', 'Data Loss Prevention']
    }
  ];

  const solutions = [
    {
      icon: Network,
      title: 'Network Security',
      description: 'Protect your network infrastructure from cyber threats'
    },
    {
      icon: Smartphone,
      title: 'Mobile Security',
      description: 'Secure mobile devices and applications'
    },
    {
      icon: Users,
      title: 'Employee Training',
      description: 'Security awareness training for your team'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: '24/7 security monitoring and response services'
    }
  ];

  const compliance = [
    'ISO 27001', 'SOC 2', 'GDPR', 'HIPAA', 'PCI DSS', 'NIST Framework', 'Ethiopian Data Protection'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Cybersecurity</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Cybersecurity
              <span className="block text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your business from evolving cyber threats with our comprehensive cybersecurity services. 
              We provide advanced security solutions that safeguard your digital assets and ensure compliance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">Secure Your Business</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Link href="/case-studies">View Security Cases</Link>
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
              Our Security Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions to protect your business from all angles
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

      {/* Security Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Security Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored security solutions for your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="text-center p-6">
                <div className="mb-4 p-4 bg-primary/10 rounded-xl text-primary w-fit mx-auto">
                  <solution.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We help you meet industry standards and regulatory requirements
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {compliance.map((standard, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border/50 text-center hover:border-primary/30 transition-all duration-300">
                <span className="text-sm font-medium text-muted-foreground">{standard}</span>
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
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait until it's too late. Let's discuss how we can protect your business from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">
                  Get Security Assessment
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

export default CybersecurityPage;
