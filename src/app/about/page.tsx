import React from 'react';
import { Building2, Users, Target, Award, Globe, Zap, Shield, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Building2, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Target, value: '1000+', label: 'Projects Completed' },
    { icon: Award, value: '25+', label: 'Industry Awards' },
  ];

  const values = [
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We bring international best practices while maintaining deep local market understanding.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Constantly exploring cutting-edge technologies to deliver exceptional solutions.'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Building long-term partnerships based on transparency and consistent delivery.'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'We&apos;re committed to making a positive impact on Ethiopia&apos;s digital transformation and economic growth.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">Zemenay</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Leading Ethiopia&apos;s digital transformation through innovative technology solutions, 
              strategic partnerships, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower Ethiopian businesses and organizations with cutting-edge technology solutions 
                that drive innovation, efficiency, and sustainable growth in the digital economy.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading technology partner in Ethiopia, recognized for excellence, 
                innovation, and our commitment to transforming the nation&apos;s digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Leadership Team</h3>
              <p className="text-muted-foreground">
                Seasoned professionals with decades of combined experience in technology and business.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Expert Consultants</h3>
              <p className="text-muted-foreground">
                Specialized consultants who understand your industry and business challenges.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Certified Professionals</h3>
              <p className="text-muted-foreground">
                Certified professionals committed to delivering excellence in every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
