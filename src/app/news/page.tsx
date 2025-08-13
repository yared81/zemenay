"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, FolderOpen, ArrowRight } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  published_at: string;
  featured_image?: string;
}

const NewsPage = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNewsArticles();
  }, []);

  const fetchNewsArticles = async () => {
    try {
      const response = await fetch('/api/news');
      const data = await response.json();
      
      if (response.ok) {
        setArticles(data.articles || []);
      } else {
        setError(data.error || 'Failed to fetch news articles');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Latest <span className="text-primary">News</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest developments and announcements from Zemenay.
            </p>
          </div>
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading news articles...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <Button onClick={fetchNewsArticles} variant="outline">
                Try Again
              </Button>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No news articles available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  {article.featured_image && (
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img 
                        src={article.featured_image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {formatDate(article.published_at)}
                      </span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{article.author}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        <FolderOpen className="h-3 w-3 mr-1" />
                        {article.category}
                      </Badge>
                    </div>

                    <Button className="w-full" variant="outline">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
