import React from 'react';
import { Shield, Cookie, Settings, Eye, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CookiePolicyPage = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly',
      examples: ['Authentication', 'Security', 'Basic functionality']
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization',
      examples: ['Language preferences', 'User settings', 'Form data']
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors use our website',
      examples: ['Page views', 'User behavior', 'Performance metrics']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Cookie className="h-4 w-4" />
              <span className="text-sm font-medium">Cookie Policy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Cookie
              <span className="block text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              This policy explains how we use cookies and similar technologies on our website 
              to provide you with the best possible experience.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the different categories of cookies and their purposes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="mb-6 p-4 bg-primary/10 rounded-xl text-primary w-fit">
                  <type.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Cookie Policy Details
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h3>
                <p className="text-muted-foreground mb-4">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>To ensure our website functions properly</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To improve our website and services</li>
                  <li>To provide personalized content and recommendations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  Some cookies on our website are set by third-party services that we use, such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing functionality</li>
                  <li>Payment processors for secure transactions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Managing Your Cookie Preferences</h3>
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                  <li>Cookie consent: Use our cookie consent banner to manage preferences</li>
                  <li>Third-party opt-outs: Visit third-party websites to opt out of their cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Cookie Duration</h3>
                <p className="text-muted-foreground mb-4">
                  Cookies on our website have different lifespans:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain on your device for a set period</li>
                  <li><strong>Third-party cookies:</strong> Duration set by the third-party service</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h3>
                <p className="text-muted-foreground mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on our website.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-card p-6 rounded-xl border border-border/50">
                  <p className="text-muted-foreground mb-2">
                    <strong>Email:</strong> privacy@zemenay.com
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <strong>Phone:</strong> +251 911 123 456
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Address:</strong> Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-darker/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're here to help clarify any concerns about our use of cookies and tracking technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
