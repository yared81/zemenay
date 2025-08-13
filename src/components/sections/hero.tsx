// src/components/home-ui/hero.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Globe, Zap, Shield, Users, TrendingUp, Play } from 'lucide-react';

const HeroSection = () => {

  const features = [
    { icon: Code, text: 'Software Development', color: 'from-blue-500 to-blue-600' },
    { icon: Globe, text: 'Digital Transformation', color: 'from-purple-500 to-purple-600' },
    { icon: Zap, text: 'Innovation', color: 'from-yellow-500 to-yellow-600' },
    { icon: Shield, text: 'Security First', color: 'from-green-500 to-green-600' },
    { icon: Users, text: 'Expert Team', color: 'from-red-500 to-red-600' },
    { icon: TrendingUp, text: 'Growth Focused', color: 'from-indigo-500 to-indigo-600' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 animate-pulse"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
      </div>

      <div 
        className="container mx-auto px-6 relative z-10 text-center"
      >
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full border border-blue-500/20 mb-8 shadow-lg"
          >
            <Zap className="h-5 w-5" />
            <span className="text-sm font-semibold">Leading Tech Company in Ethiopia</span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight"
          >
            <span 
              className="block text-slate-800 dark:text-slate-100"
            >
              Empowering
            </span>
            <span 
              className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2"
            >
              Ethiopia&apos;s Digital
            </span>
            <span 
              className="block text-slate-800 dark:text-slate-100 mt-2"
            >
              Future
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="max-w-4xl mx-auto text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed text-balance"
          >
            We are a leading technology company delivering innovative digital solutions, 
            software development, and IT consulting services that drive growth and transformation 
            across Ethiopia and beyond.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Button asChild size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl rounded-xl">
              <Link href="/contact">
                <span className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 rounded-xl">
              <Link href="/services">
                <span className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  View Services
                </span>
              </Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 group shadow-lg hover:shadow-xl"
              >
                <div 
                  className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white group-hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-300 text-center font-medium group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;