import React from 'react';
import { Users, Heart, Zap, CheckCircle, ArrowRight, Award, Globe, Shield, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CareersPage = () => {
  const openPositions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Addis Ababa, Ethiopia',
      experience: '5+ years',
      description: 'We are looking for a talented Senior Software Engineer to join our team and help build innovative solutions.',
      requirements: [
        'Strong experience with React, Node.js, and modern web technologies',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of software architecture and design patterns',
        'Excellent problem-solving and communication skills'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Operations',
      type: 'Full-time',
      location: 'Addis Ababa, Ethiopia',
      experience: '3+ years',
      description: 'Join our DevOps team to help build and maintain our infrastructure and deployment pipelines.',
      requirements: [
        'Experience with Docker, Kubernetes, and CI/CD pipelines',
        'Knowledge of cloud platforms and infrastructure as code',
        'Experience with monitoring and logging tools',
        'Strong automation and scripting skills'
      ]
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Addis Ababa, Ethiopia',
      experience: '3+ years',
      description: 'Help us create beautiful and intuitive user experiences for our digital products.',
      requirements: [
        'Strong portfolio showcasing web and mobile design work',
        'Experience with design tools (Figma, Sketch, Adobe Creative Suite)',
        'Understanding of user-centered design principles',
        'Experience with design systems and component libraries'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: Zap,
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities and career development'
    },
    {
      icon: Users,
      title: 'Team Environment',
      description: 'Collaborative and supportive team culture'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance-based rewards and recognition programs'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm font-medium">Careers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Join Our
              <span className="block text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We're looking for passionate individuals who want to make a difference in Ethiopia's digital future. 
              Join us in building innovative technology solutions that transform businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities to join our growing team
            </p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{position.department}</span>
                      </span>
                      <span>{position.type}</span>
                      <span>{position.location}</span>
                      <span>{position.experience}</span>
                    </div>
                  </div>
                  <Button asChild className="mt-4 lg:mt-0">
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </div>
                
                <p className="text-muted-foreground mb-6">{position.description}</p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer competitive benefits and a great work environment
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-darker/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">
                  Send Your Resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
