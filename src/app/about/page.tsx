import React from 'react';
import { Building2, Users, Target, Award, Globe, Zap, Shield, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Building2, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '200+', label: 'Team Members' },
    { icon: Target, value: '500+', label: 'Projects Completed' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Globe, value: '10+', label: 'Countries Served' },
    { icon: Zap, value: '95%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality solutions that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative thinking to solve complex business challenges.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We&apos;re committed to making a positive impact on Ethiopia&apos;s digital transformation and economic growth.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We foster continuous learning and development, both for our team and our clients.'
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Zemenay was established with a vision to transform Ethiopia through technology.'
    },
    {
      year: '2012',
      title: 'First Major Project',
      description: 'Successfully delivered our first enterprise software solution for a leading Ethiopian company.'
    },
    {
      year: '2015',
      title: 'Regional Expansion',
      description: 'Expanded services to neighboring countries and established regional partnerships.'
    },
    {
      year: '2018',
      title: 'Digital Transformation Focus',
      description: 'Launched our comprehensive digital transformation practice to help businesses modernize.'
    },
    {
      year: '2021',
      title: 'AI & Cloud Services',
      description: 'Introduced AI-powered solutions and cloud services to our portfolio.'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Established as the leading technology company in Ethiopia with 500+ successful projects.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div 
          className="container mx-auto px-6 text-center"
        >
          <div 
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6"
          >
            <Building2 className="h-4 w-4" />
            <span className="text-sm font-medium">About Zemenay</span>
          </div>
          <h1 
            className="text-5xl md:text-6xl font-bold text-foreground mb-6"
          >
            Empowering Ethiopia&apos;s
            <span className="block gradient-text mt-2">Digital Future</span>
          </h1>
          <p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            For over 15 years, Zemenay has been at the forefront of Ethiopia&apos;s technology revolution, 
            delivering innovative solutions that drive business growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift group"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-xl text-primary w-fit mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To accelerate Ethiopia&apos;s digital transformation by providing innovative, 
                    reliable, and scalable technology solutions that empower businesses to thrive 
                    in the digital economy.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be the leading technology partner in East Africa, driving innovation, 
                    creating opportunities, and building a sustainable digital future for our region.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-primary-darker/10 rounded-2xl border border-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="h-24 w-24 text-primary/40 mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">
                    Building the future, one innovation at a time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift group"
              >
                <div className="mb-6 p-4 bg-primary/10 rounded-2xl text-primary w-fit mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones that have shaped Zemenay&apos;s growth and success over the years.
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden lg:block"></div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-primary-darker/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how Zemenay can help transform your business with innovative 
            technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-primary hover:bg-primary-darker text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;