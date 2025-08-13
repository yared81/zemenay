import React from 'react';
import { Users, Award, Globe, Zap } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Natnael Alemayehu Hailu',
      role: 'CEO & Founder',
      image: '/assets/images/executive_members/Natnael_Alemayehu_Hailu.jpg',
      description: 'Leading our vision for digital transformation in Ethiopia.'
    },
    {
      name: 'Tihitina Askal',
      role: 'CTO',
      image: '/assets/images/executive_members/Tihitina_Askal.jpg',
      description: 'Driving technological innovation and strategic development.'
    },
    {
      name: 'Yared Endale',
      role: 'Head of Operations',
      image: '/assets/images/executive_members/Yared_Endale.jpg',
      description: 'Ensuring operational excellence across all projects.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dedicated professionals committed to driving Ethiopia&apos;s digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Team Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our team&apos;s work and collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                Working together to achieve exceptional results
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Striving for the highest quality in everything we do
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Embracing new ideas and technologies
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Impact</h3>
              <p className="text-muted-foreground">
                Making a positive difference in our community
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
