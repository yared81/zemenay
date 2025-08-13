import React from 'react';
import { Building2, Users, TrendingUp, CheckCircle, ArrowRight, Award, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'Ethio Telecom Digital Transformation',
      company: 'Ethio Telecom',
      industry: 'Telecommunications',
      image: '/assets/images/partners/efuye_gela.png',
      challenge: 'Modernize legacy systems and improve customer experience',
      solution: 'Implemented cloud-based customer management system with mobile app',
      results: ['40% efficiency improvement', '25% increase in customer satisfaction', '30% reduction in operational costs'],
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL']
    },
    {
      title: 'Commercial Bank Core Banking Upgrade',
      company: 'Commercial Bank of Ethiopia',
      industry: 'Banking & Finance',
      image: '/assets/images/partners/chewata_awaqi.png',
      challenge: 'Upgrade core banking system and implement digital banking platform',
      solution: 'Modernized core banking infrastructure with secure digital channels',
      results: ['60% faster transaction processing', 'Enhanced security compliance', 'Improved customer experience'],
      technologies: ['Java', 'Spring Boot', 'Oracle', 'React Native']
    },
    {
      title: 'Ethiopian Airlines Customer Management',
      company: 'Ethiopian Airlines',
      industry: 'Aviation',
      image: '/assets/images/partners/busara.webp',
      challenge: 'Streamline customer management and booking processes',
      solution: 'Integrated customer management system with booking platform',
      results: ['25% increase in customer satisfaction', 'Improved booking efficiency', 'Better customer insights'],
      technologies: ['Python', 'Django', 'React', 'MongoDB']
    }
  ];

  const industries = [
    'Banking & Finance', 'Telecommunications', 'Healthcare', 'Manufacturing', 'Retail', 'Education', 'Government'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Case Studies</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Success
              <span className="block text-primary">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped leading Ethiopian companies transform their businesses 
              with innovative technology solutions that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real projects with measurable business impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift overflow-hidden">
                <div className="h-48 bg-muted/50 flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-muted-foreground" />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-sm text-primary font-medium">{study.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.company}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We have experience across various industries and business domains
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
