import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Database, Shield, Cloud, Smartphone, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const DocsPage = () => {
  const documentationSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: BookOpen,
      items: [
        { name: 'Installation Guide', href: '#', status: 'Available' },
        { name: 'First Steps', href: '#', status: 'Available' },
        { name: 'Configuration', href: '#', status: 'Coming Soon' },
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      items: [
        { name: 'Authentication', href: '#', status: 'Available' },
        { name: 'Endpoints', href: '#', status: 'Available' },
        { name: 'Error Codes', href: '#', status: 'Available' },
      ]
    },
    {
      title: 'Database',
      description: 'Database schemas and query examples',
      icon: Database,
      items: [
        { name: 'Schema Overview', href: '#', status: 'Available' },
        { name: 'Query Examples', href: '#', status: 'Coming Soon' },
        { name: 'Migrations', href: '#', status: 'Coming Soon' },
      ]
    },
    {
      title: 'Security',
      description: 'Security best practices and guidelines',
      icon: Shield,
      items: [
        { name: 'Authentication', href: '#', status: 'Available' },
        { name: 'Authorization', href: '#', status: 'Available' },
        { name: 'Data Protection', href: '#', status: 'Coming Soon' },
      ]
    },
    {
      title: 'Cloud Services',
      description: 'Cloud deployment and configuration',
      icon: Cloud,
      items: [
        { name: 'AWS Setup', href: '#', status: 'Available' },
        { name: 'Azure Configuration', href: '#', status: 'Coming Soon' },
        { name: 'Google Cloud', href: '#', status: 'Coming Soon' },
      ]
    },
    {
      title: 'Mobile Development',
      description: 'Mobile app development guides',
      icon: Smartphone,
      items: [
        { name: 'React Native', href: '#', status: 'Available' },
        { name: 'Flutter', href: '#', status: 'Coming Soon' },
        { name: 'Native iOS/Android', href: '#', status: 'Coming Soon' },
      ]
    },
    {
      title: 'Analytics',
      description: 'Data analytics and reporting tools',
      icon: BarChart3,
      items: [
        { name: 'Dashboard Setup', href: '#', status: 'Available' },
        { name: 'Custom Reports', href: '#', status: 'Coming Soon' },
        { name: 'Data Export', href: '#', status: 'Coming Soon' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive guides, tutorials, and reference materials to help you build with Zemenay
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="#getting-started">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="#api-reference">API Reference</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentationSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{section.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between">
                        <Link 
                          href={item.href} 
                          className="text-primary hover:underline font-medium"
                        >
                          {item.name}
                        </Link>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.status === 'Available' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Need Help?</CardTitle>
              <p className="text-muted-foreground">
                Can&apos;t find what you&apos;re looking for? Our team is here to help.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/support">Support Center</Link>
                </Button>
                <Button asChild>
                  <Link href="mailto:support@zemenay.com">Email Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
