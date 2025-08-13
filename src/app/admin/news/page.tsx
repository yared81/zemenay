'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar,
  User
} from 'lucide-react';
import Link from 'next/link';

// Mock data - in real app this would come from API/database
const mockNews = [
  {
    id: 1,
    title: 'Zemenay Expands Cybersecurity Services Portfolio',
    slug: 'zemenay-expands-cybersecurity-services',
    excerpt: 'Zemenay is expanding its cybersecurity services portfolio to address the growing need for comprehensive digital security solutions in Ethiopia.',
    content: 'Full article content here...',
    author: 'Admin',
    status: 'published',
    category: 'Business',
    publishDate: '2024-01-15',
    views: 1247,
    featured: true
  },
  {
    id: 2,
    title: 'New Partnership with Ethiopian Airlines',
    slug: 'partnership-ethiopian-airlines',
    excerpt: 'Zemenay announces strategic partnership with Ethiopian Airlines to provide digital transformation services.',
    content: 'Full article content here...',
    author: 'Editor',
    status: 'draft',
    category: 'Partnerships',
    publishDate: '2024-01-20',
    views: 0,
    featured: false
  },
  {
    id: 3,
    title: 'AI-Powered Solutions Launch',
    slug: 'ai-powered-solutions-launch',
    excerpt: 'Introducing our new AI-powered business intelligence and automation solutions.',
    content: 'Full article content here...',
    author: 'Admin',
    status: 'published',
    category: 'Technology',
    publishDate: '2024-01-10',
    views: 892,
    featured: true
  }
];

const NewsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredNews = mockNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || news.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || news.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Business': return 'bg-blue-100 text-blue-800';
      case 'Technology': return 'bg-purple-100 text-purple-800';
      case 'Partnerships': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">News Management</h1>
              <p className="text-muted-foreground">Create and manage news articles</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/admin/news/create">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create News
                </Button>
              </Link>
              <Link href="/admin">
                <Button variant="outline">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Partnerships">Partnerships</SelectItem>
              <SelectItem value="Announcements">Announcements</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="flex items-center justify-center">
            <Filter className="h-4 w-4 mr-2" />
            Clear Filters
          </Button>
        </div>

        {/* News Articles List */}
        <div className="space-y-4">
          {filteredNews.map((news) => (
            <Card key={news.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{news.title}</h3>
                      {news.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{news.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{news.publishDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-4 w-4" />
                        <span>{news.views} views</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(news.status)}`}>
                      {news.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                      {news.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="text-muted-foreground">
                <p className="text-lg mb-2">No news articles found</p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default NewsManagement;
