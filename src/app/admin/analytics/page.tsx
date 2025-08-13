import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer, 
  BarChart3,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

const AnalyticsPage = () => {
  // Mock data - in real app this would come from API/database
  const stats = [
    { title: 'Total Page Views', value: '45,892', change: '+12.5%', changeType: 'positive', icon: Eye },
    { title: 'Unique Visitors', value: '12,847', change: '+8.2%', changeType: 'positive', icon: Users },
    { title: 'News Articles', value: '89', change: '+5.1%', changeType: 'positive', icon: MousePointer },
    { title: 'Blog Posts', value: '156', change: '+3.7%', changeType: 'positive', icon: MousePointer },
  ];

  const topPages = [
    { page: '/', views: 12450, change: '+15%' },
    { page: '/services', views: 8920, change: '+8%' },
    { page: '/about', views: 6540, change: '+12%' },
    { page: '/contact', views: 5430, change: '+5%' },
    { page: '/news', views: 4320, change: '+18%' },
  ];

  const trafficSources = [
    { source: 'Direct', percentage: 45, color: 'bg-blue-500' },
    { source: 'Organic Search', percentage: 30, color: 'bg-green-500' },
    { source: 'Social Media', percentage: 15, color: 'bg-purple-500' },
    { source: 'Referral', percentage: 10, color: 'bg-orange-500' },
  ];

  const recentActivity = [
    { action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { action: 'News article published', time: '15 minutes ago', type: 'news' },
    { action: 'Blog post updated', time: '1 hour ago', type: 'blog' },
    { action: 'Contact form submitted', time: '2 hours ago', type: 'contact' },
    { action: 'Newsletter subscription', time: '3 hours ago', type: 'newsletter' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
              <p className="text-muted-foreground">Monitor your website performance and insights</p>
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="7d">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">Last 24h</SelectItem>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
              <Link href="/admin">
                <Button variant="outline">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-muted-foreground ml-2">from last period</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Top Pages */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Top Pages by Views
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{page.page}</p>
                          <p className="text-sm text-muted-foreground">{page.views.toLocaleString()} views</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-green-600">{page.change}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Traffic Sources */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {/* PieChart icon was removed, so it's commented out or removed */}
                  Traffic Sources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trafficSources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
                        <span className="text-sm font-medium">{source.source}</span>
                      </div>
                      <span className="text-sm font-bold">{source.percentage}%</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Total Traffic</span>
                    <span>100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                {/* Activity icon was removed, so it's commented out or removed */}
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'user' ? 'bg-blue-500' :
                      activity.type === 'news' ? 'bg-green-500' :
                      activity.type === 'blog' ? 'bg-purple-500' :
                      activity.type === 'contact' ? 'bg-orange-500' :
                      'bg-indigo-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Quick Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-800 dark:text-green-200">Traffic Growth</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                    Your website traffic has increased by 12.5% compared to last week.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-800 dark:text-blue-200">User Engagement</span>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                    Average session duration is 4 minutes 32 seconds.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <MousePointer className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-purple-800 dark:text-purple-200">Content Performance</span>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mt-2">
                    Blog posts about cybersecurity are performing best.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Export Options */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Export Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Export Daily Report
                </Button>
                <Button variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Export Analytics Data
                </Button>
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Export User Data
                </Button>
                <Button variant="outline">
                  <MousePointer className="h-4 w-4 mr-2" />
                  Export Content Stats
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
