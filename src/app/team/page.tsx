import React from 'react';
import { Users, Award, Heart, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Natnael Alemayehu',
      role: 'CEO & Founder',
      image: '/assets/images/executive_members/Natnael_Alemayehu_Hailu.jpg',
      bio: 'Visionary leader with 15+ years in technology and business transformation',
      expertise: ['Strategic Planning', 'Business Development', 'Technology Innovation']
    },
    {
      name: 'Tihitina Askal',
      role: 'CTO',
      image: '/assets/images/executive_members/Tihitina_Askal.jpg',
      bio: 'Technology expert specializing in software architecture and digital transformation',
      expertise: ['Software Architecture', 'Cloud Solutions', 'Digital Innovation']
    },
    {
      name: 'Yared Endale',
      role: 'Head of Operations',
      image: '/assets/images/executive_members/Yared_Endale.jpg',
      bio: 'Operations specialist focused on delivering excellence and client satisfaction',
      expertise: ['Project Management', 'Client Relations', 'Process Optimization']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We are passionate about delivering exceptional results that exceed expectations'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We embrace new technologies and creative solutions to solve complex challenges'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards of quality in everything we deliver'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Our Team</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Meet Our
              <span className="block text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate technologists, innovators, and problem-solvers 
              dedicated to transforming businesses through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders driving our company's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="mb-6 w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-6">{member.bio}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="mb-4 p-4 bg-primary/10 rounded-xl text-primary w-fit mx-auto">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
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
              Join Our Team
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/careers">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
