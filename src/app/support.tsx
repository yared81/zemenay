import React from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Customer <span className="text-primary">Support</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We&apos;re here to help you succeed with our technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 border border-border rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Live Chat</h3>
              <p className="text-muted-foreground mb-4">
                Get instant help from our support team through live chat.
              </p>
              <Button variant="outline">Start Chat</Button>
            </div>

            <div className="text-center p-6 border border-border rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Phone Support</h3>
              <p className="text-muted-foreground mb-4">
                Call us directly for immediate assistance.
              </p>
              <Button variant="outline">Call Now</Button>
            </div>

            <div className="text-center p-6 border border-border rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Email Support</h3>
              <p className="text-muted-foreground mb-4">
                Send us a detailed message and we&apos;ll respond within 24 hours.
              </p>
              <Link href="/contact">
                <Button variant="outline">Send Email</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                How do I get started with your services?
              </h3>
              <p className="text-muted-foreground">
                Contact our team through any of the support channels above, and we&apos;ll guide you 
                through the onboarding process.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What are your response times?
              </h3>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within 24 hours, with live chat and phone support 
                available for immediate assistance.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Do you provide 24/7 support?
              </h3>
              <p className="text-muted-foreground">
                Our standard support hours are Monday-Friday, 8:00 AM - 6:00 PM EAT. For urgent 
                issues outside these hours, please contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
