// src/app/news/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, User, Tag, ArrowRight, Newspaper } from 'lucide-react';

const NewsPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const newsItems = [
    {
      id: 1,
      slug: 'zemenay-launches-ai-powered-analytics-platform',
      title: 'Zemenay Launches AI-Powered Analytics Platform',
      date: 'December 15, 2024',
      author: 'Zemenay Team',
      excerpt: 'Revolutionary business intelligence platform helps Ethiopian companies make data-driven decisions and achieve unprecedented growth.',
      imageUrl: '/src/assets/images/events/cs_championship.webp',
      category: 'Product Launch',
      readTime: '5 min read'
    },
    {
      id: 2,
      slug: 'zemenay-partners-with-ethiopian-universities',
      title: 'Zemenay Partners with Ethiopian Universities for Tech Education',
      date: 'December 10, 2024',
      author: 'Zemenay Team',
      excerpt: 'Strategic partnership aims to bridge the digital skills gap and prepare students for the future of work in Ethiopia.',
      imageUrl: '/src/assets/images/events/EA_Sport_FC_24_championship.webp',
      category: 'Partnership',
      readTime: '4 min read'
    },
    {
      id: 3,
      slug: 'zemenay-expands-cybersecurity-services',
      title: 'Zemenay Expands Cybersecurity Services Portfolio',
      date: 'December 5, 2024',
      author: 'Zemenay Team',
      excerpt: 'New comprehensive security solutions address growing cyber threats in the digital landscape.',
      imageUrl: '/src/assets/images/events/mobile_legend_championship.webp',
      category: 'Service Expansion',
      readTime: '6 min read'
    },
    {
      id: 4,
      slug: 'zemenay-wins-best-tech-company-award',
      title: 'Zemenay Wins Best Tech Company Award 2024',
      date: 'November 28, 2024',
      author: 'Zemenay Team',
      excerpt: 'Recognized for outstanding contributions to Ethiopia\'s digital transformation and technology innovation.',
      imageUrl: '/src/assets/images/events/cs_championship.webp',
      category: 'Awards',
      readTime: '3 min read'
    },
    {
      id: 5,
      slug: 'zemenay-completes-major-banking-project',
      title: 'Zemenay Completes Major Banking Digital Transformation Project',
      date: 'November 20, 2024',
      author: 'Zemenay Team',
      excerpt: 'Successfully delivered core banking system upgrade for leading Ethiopian financial institution.',
      imageUrl: '/src/assets/images/events/EA_Sport_FC_24_championship.webp',
      category: 'Case Study',
      readTime: '7 min read'
    },
    {
      id: 6,
      slug: 'zemenay-hosts-tech-innovation-summit',
      title: 'Zemenay Hosts Tech Innovation Summit in Addis Ababa',
      date: 'November 15, 2024',
      author: 'Zemenay Team',
      excerpt: 'Bringing together industry leaders to discuss the future of technology in Ethiopia and East Africa.',
      imageUrl: '/src/assets/images/events/mobile_legend_championship.webp',
      category: 'Events',
      readTime: '4 min read'
    }
  ];

  const categories = ['All', 'Product Launch', 'Partnership', 'Service Expansion', 'Awards', 'Case Study', 'Events'];

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
            <Newspaper className="h-4 w-4" />
            <span className="text-sm font-medium">Latest News</span>
          </div>
          <h1 
            className="text-5xl md:text-6xl font-bold text-foreground mb-6"
          >
            Stay Updated with
            <span className="block gradient-text mt-2">Zemenay</span>
          </h1>
          <p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Get the latest updates on our projects, partnerships, innovations, and insights 
            into the technology landscape in Ethiopia and beyond.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  index === 0
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {newsItems.map((news) => (
              <article
                key={news.id}
                className="bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift group overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary-darker/10 flex items-center justify-center">
                    <Newspaper className="h-16 w-16 text-primary/40" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{news.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center space-x-1">
                      <Tag className="h-4 w-4" />
                      <span>{news.readTime}</span>
                    </span>
                    <Link
                      href={`/news/${news.slug}`}
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary-darker font-medium transition-colors duration-200 group-hover:translate-x-1"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-primary hover:bg-primary-darker text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-primary-darker/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Never Miss an Update
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and stay informed about the latest technology trends, 
            company updates, and industry insights.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary hover:bg-primary-darker text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
