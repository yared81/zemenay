import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using our website and services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Zemenay&apos;s 
              website for personal, non-commercial transitory viewing only.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The materials on Zemenay&apos;s website are provided on an &apos;as is&apos; basis. 
              Zemenay makes no warranties, expressed or implied, and hereby disclaims and negates 
              all other warranties including without limitation, implied warranties or conditions of 
              merchantability, fitness for a particular purpose, or non-infringement of intellectual 
              property or other violation of rights.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall Zemenay or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on Zemenay&apos;s website.
            </p>

            <h2>Revisions and Errata</h2>
            <p>
              The materials appearing on Zemenay&apos;s website could include technical, typographical, 
              or photographic errors. Zemenay does not warrant that any of the materials on its 
              website are accurate, complete or current.
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

export default TermsPage;
