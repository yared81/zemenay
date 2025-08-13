import React from 'react';
import { Building2, Users, TrendingUp, Award, Globe, Shield } from 'lucide-react';

const ClientShowcase = () => {
  const stats = [
    { icon: Building2, value: '50+', label: 'Companies Served' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Globe, value: '10+', label: 'Countries Reached' },
    { icon: Shield, value: '100%', label: 'Security Focused' },
  ];

  const clients = [
    {
      name: 'Ethio Telecom',
      industry: 'Telecommunications',
      logo: '/assets/images/partners/efuye_gela.png',
      description: 'Digital transformation and network modernization project',
      results: '40% efficiency improvement'
    },
    {
      name: 'Commercial Bank of Ethiopia',
      industry: 'Banking & Finance',
      logo: '/assets/images/partners/chewata_awaqi.png',
      description: 'Core banking system upgrade and digital banking platform',
      results: '60% faster transaction processing'
    },
    {
      name: 'Ethiopian Airlines',
      industry: 'Aviation',
      logo: '/assets/images/partners/busara.webp',
      description: 'Customer management system and booking platform',
      results: '25% increase in customer satisfaction'
    },
    {
      name: 'Ethiopian Electric Power',
      industry: 'Energy',
      logo: '/assets/images/partners/efuye_gela.png',
      description: 'Smart grid implementation and monitoring systems',
      results: '30% reduction in power outages'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Success
            <span className="block gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We've helped leading Ethiopian companies transform their businesses 
            with innovative technology solutions that drive real results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift group"
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

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift"
            >
              <div className="mb-4 p-4 bg-muted/50 rounded-xl">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {client.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-2">{client.industry}</p>
              <p className="text-sm text-muted-foreground mb-3">{client.description}</p>
              <div className="text-sm font-semibold text-success">
                {client.results}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary-darker/10 rounded-2xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology solutions? 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-primary hover:bg-primary-darker text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;