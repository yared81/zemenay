import React from 'react';
import { FileText, Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Transformation in Ethiopia',
      excerpt: 'Exploring how Ethiopian businesses can leverage technology to drive growth and innovation in the digital age.',
      author: 'Natnael Alemayehu',
      date: 'December 20, 2024',
      category: 'Digital Transformation',
      readTime: '5 min read',
      image: '/assets/images/events/cs_championship.webp'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Ethiopian Businesses',
      excerpt: 'Essential security measures that every Ethiopian business should implement to protect against cyber threats.',
      author: 'Tihitina Askal',
      date: 'December 18, 2024',
      category: 'Cybersecurity',
      readTime: '7 min read',
      image: '/assets/images/events/EA_Sport_FC_24_championship.webp'
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies for Enterprise',
      excerpt: 'A comprehensive guide to successfully migrating your business infrastructure to the cloud.',
      author: 'Yared Endale',
      date: 'December 15, 2024',
      category: 'Cloud Services',
      readTime: '6 min read',
      image: '/assets/images/events/mobile_legend_championship.webp'
    },
    {
      id: 4,
      title: 'Building Scalable Software Solutions',
      excerpt: 'Key principles and practices for developing software that grows with your business needs.',
      author: 'Natnael Alemayehu',
      date: 'December 12, 2024',
      category: 'Software Development',
      readTime: '8 min read',
      image: '/assets/images/events/cs_championship.webp'
    },
    {
      id: 5,
      title: 'Data Analytics for Business Growth',
      excerpt: 'How Ethiopian companies can use data analytics to make informed decisions and drive business growth.',
      author: 'Tihitina Askal',
      date: 'December 10, 2024',
      category: 'Data Analytics',
      readTime: '6 min read',
      image: '/assets/images/events/EA_Sport_FC_24_championship.webp'
    },
    {
      id: 6,
      title: 'Mobile App Development Trends 2024',
      excerpt: 'The latest trends and technologies shaping the future of mobile application development.',
      author: 'Yared Endale',
      date: 'December 8, 2024',
      category: 'Mobile Solutions',
      readTime: '5 min read',
      image: '/assets/images/events/mobile_legend_championship.webp'
    }
  ];

  const categories = [
    'All', 'Digital Transformation', 'Cybersecurity', 'Cloud Services', 'Software Development', 'Data Analytics', 'Mobile Solutions'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Blog</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Insights &
              <span className="block text-primary">Knowledge</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights, trends, and best practices in technology, 
              digital transformation, and business innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-border/50 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by:</span>
              <div className="flex space-x-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      category === 'All' 
                        ? 'bg-primary text-white' 
                        : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift overflow-hidden">
                <div className="h-48 bg-muted/50 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-muted-foreground" />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm text-primary font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest insights and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border/50 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <Button size="lg" className="px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
