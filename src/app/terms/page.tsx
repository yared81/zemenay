import React from 'react';
import { FileText, Shield, Users, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const TermsPage = () => {
  const termsSections = [
    {
      icon: Users,
      title: 'Acceptance of Terms',
      description: 'By using our services, you agree to these terms and conditions'
    },
    {
      icon: Shield,
      title: 'Service Description',
      description: 'Clear explanation of what services we provide and how they work'
    },
    {
      icon: FileText,
      title: 'User Responsibilities',
      description: 'Your obligations and responsibilities when using our services'
    },
    {
      icon: CheckCircle,
      title: 'Intellectual Property',
      description: 'Information about ownership and usage rights of our content'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Terms of Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Terms of
              <span className="block text-primary">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              These terms and conditions govern your use of our services. 
              Please read them carefully before engaging with our company.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Terms Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key sections of our terms and conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {termsSections.map((section, index) => (
              <div key={index} className="text-center p-6">
                <div className="mb-4 p-4 bg-primary/10 rounded-xl text-primary w-fit mx-auto">
                  <section.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{section.title}</h3>
                <p className="text-muted-foreground text-sm">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Terms of Service Details
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h3>
                <p className="text-muted-foreground mb-4">
                  By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">2. Service Description</h3>
                <p className="text-muted-foreground mb-4">
                  Zemenay provides technology consulting, software development, digital transformation, and related services. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Custom software development</li>
                  <li>Digital transformation consulting</li>
                  <li>Cybersecurity services</li>
                  <li>Cloud migration and infrastructure</li>
                  <li>Data analytics and business intelligence</li>
                  <li>Mobile application development</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h3>
                <p className="text-muted-foreground mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account and credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not attempt to reverse engineer or compromise our systems</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">4. Payment Terms</h3>
                <p className="text-muted-foreground mb-4">
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Invoices are due within 30 days of issue</li>
                  <li>Late payments may incur additional charges</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>All fees are quoted in Ethiopian Birr unless otherwise specified</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h3>
                <p className="text-muted-foreground mb-4">
                  All content, features, and functionality of our services are owned by Zemenay and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h3>
                <p className="text-muted-foreground mb-4">
                  Zemenay shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">7. Termination</h3>
                <p className="text-muted-foreground mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">8. Governing Law</h3>
                <p className="text-muted-foreground mb-4">
                  These Terms shall be interpreted and governed by the laws of Ethiopia, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h3>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-card p-6 rounded-xl border border-border/50">
                  <p className="text-muted-foreground mb-2">
                    <strong>Email:</strong> legal@zemenay.com
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
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're here to help clarify any questions about our terms and conditions.
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

export default TermsPage;
