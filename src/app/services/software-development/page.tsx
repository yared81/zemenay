import React from 'react';
import { Code, Database, Cloud, Shield, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SoftwareDevelopmentPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Applications',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Development']
    },
    {
      icon: Database,
      title: 'Enterprise Software',
      description: 'Scalable enterprise solutions for complex business processes',
      features: ['Microservices Architecture', 'Cloud-Native Design', 'Security First', 'Performance Optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud-native applications and migration services',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'DevOps Automation']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Secure software development with industry best practices',
      features: ['OWASP Guidelines', 'Penetration Testing', 'Code Security', 'Compliance Standards']
    }
  ];

  const technologies = [
    'React & Next.js', 'Node.js', 'Python', 'Java', 'C#', 'PostgreSQL', 'MongoDB', 'Redis',
    'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Terraform', 'Jenkins', 'Git'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and creating a detailed project plan'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Creating the technical architecture and UI/UX design'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular updates and testing'
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Comprehensive testing and smooth deployment to production'
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance services'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Code className="h-4 w-4" />
              <span className="text-sm font-medium">Software Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Custom Software
              <span className="block text-primary">Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We build scalable, secure, and innovative software solutions that transform businesses. 
              From web applications to enterprise software, we deliver cutting-edge technology that drives growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Link href="/case-studies">View Case Studies</Link>
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
              Our Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
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

      {/* Development Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern, reliable technologies for building robust software solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="p-4 bg-card rounded-xl border border-border/50 text-center hover:border-primary/30 transition-all duration-300">
                <span className="text-sm font-medium text-muted-foreground">{tech}</span>
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom software solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">
                  Get Started Today
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

export default SoftwareDevelopmentPage;
