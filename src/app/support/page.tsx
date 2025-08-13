import React from 'react';
import { HelpCircle, MessageCircle, Phone, Mail, Clock, ArrowRight, BookOpen, Video, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SupportPage = () => {
  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      response: 'Instant'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri, 9AM-6PM EAT',
      response: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed inquiries and get comprehensive responses',
      availability: '24/7',
      response: 'Within 4 hours'
    }
  ];

  const helpResources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation',
      link: '/docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common tasks',
      link: '/tutorials'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and share solutions',
      link: '/community'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. Our team will schedule a consultation to understand your needs and provide a customized solution.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on complexity and scope. Small projects typically take 4-8 weeks, while larger enterprise solutions may take 3-6 months. We provide detailed timelines during the planning phase.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer comprehensive post-launch support including maintenance, updates, and technical assistance. We also provide training for your team to ensure smooth operations.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Node.js, Python, Java, and cloud platforms like AWS, Azure, and GCP. We also have expertise in mobile development and cybersecurity.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Support</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              We're Here to
              <span className="block text-primary">Help</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our dedicated support team is ready to assist you with any questions, 
              technical issues, or guidance you need to succeed with our solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach our support team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift text-center">
                <div className="mb-6 p-4 bg-primary/10 rounded-xl text-primary w-fit mx-auto">
                  <channel.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{channel.title}</h3>
                <p className="text-muted-foreground mb-6">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Available: {channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Response: {channel.response}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Self-Help Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions and learn at your own pace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {helpResources.map((resource, index) => (
              <div key={index} className="p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift text-center">
                <div className="mb-6 p-4 bg-primary/10 rounded-xl text-primary w-fit mx-auto">
                  <resource.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{resource.title}</h3>
                <p className="text-muted-foreground mb-6">{resource.description}</p>
                <Button variant="outline" asChild>
                  <Link href={resource.link}>Access Resource</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-darker/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is ready to assist you with any questions or technical issues.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">
                  Contact Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
