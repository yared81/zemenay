import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Cookie <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Understanding how we use cookies and tracking technologies to improve your experience.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              analyzing how you use our site.
            </p>

            <h2>How We Use Cookies</h2>
            <p>
              We use cookies for several purposes, including:
            </p>
            <ul>
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand site usage</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies for personalized content</li>
            </ul>

            <h2>Your Cookie Choices</h2>
            <p>
              You can control and manage cookies through your browser settings. You can also opt out 
              of certain types of cookies through our cookie consent manager.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please don&apos;t hesitate to 
              contact us. We&apos;re here to help clarify any concerns about our use of cookies and tracking technologies.
            </p>

            <div className="mt-8 flex justify-center">
              <Link href="/contact">
                <Button>
                  Contact Us
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;
