'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Save, Eye, Tag } from 'lucide-react';
import Link from 'next/link';

const CreateBlogPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    author: '',
    tags: '',
    featured: false,
    status: 'draft'
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : [],
          status: formData.status
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Blog post created successfully!');
        // Reset form
        setFormData({
          title: '',
          excerpt: '',
          content: '',
          category: '',
          author: '',
          tags: '',
          featured: false,
          status: 'draft'
        });
        // Redirect to blog list after 2 seconds
        setTimeout(() => {
          window.location.href = '/admin/blog';
        }, 2000);
      } else {
        setSubmitMessage(data.error || 'Failed to create blog post');
      }
    } catch {
      setSubmitMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin/blog">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Create Blog Post</h1>
                <p className="text-muted-foreground">Write a new blog post for your audience</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button onClick={handleSubmit} size="sm" disabled={isSubmitting}>
                <Save className="h-4 w-4 mr-2" />
                {isSubmitting ? 'Saving...' : 'Publish'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {submitMessage && (
              <div className={`mb-4 p-4 rounded-lg ${
                submitMessage.includes('successfully') 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {submitMessage}
              </div>
            )}
            <Card>
              <CardHeader>
                <CardTitle>Post Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="Enter blog post title"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => handleChange('excerpt', e.target.value)}
                    placeholder="Brief summary of the blog post"
                    className="mt-2"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => handleChange('content', e.target.value)}
                    placeholder="Write your blog post content here..."
                    className="mt-2"
                    rows={15}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Post Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="tutorials">Tutorials</SelectItem>
                      <SelectItem value="industry-insights">Industry Insights</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => handleChange('author', e.target.value)}
                    placeholder="Author name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <div className="relative mt-2">
                    <Tag className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => handleChange('tags', e.target.value)}
                      placeholder="Enter tags separated by commas"
                      className="pl-10"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Separate multiple tags with commas
                  </p>
                </div>

                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => handleChange('status', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => handleChange('featured', checked)}
                  />
                  <Label htmlFor="featured">Featured Post</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPage;
