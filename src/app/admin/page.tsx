"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  FileText, 
  Newspaper, 
  Settings, 
  BarChart3, 
  Shield,
  Plus,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AdminDashboard = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', {
        method: 'DELETE',
      });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Mock data - in real app this would come from API/database
  const stats = [
    { title: 'Total Users', value: '1,247', icon: Users, change: '+12%', changeType: 'positive' },
    { title: 'News Articles', value: '89', icon: Newspaper, change: '+5%', changeType: 'positive' },
    { title: 'Blog Posts', value: '156', icon: FileText, change: '+8%', changeType: 'positive' },
    { title: 'Active Sessions', value: '23', icon: BarChart3, change: '-3%', changeType: 'negative' },
  ];

  const recentActivities = [
    { action: 'New user registered', user: 'John Doe', time: '2 minutes ago', type: 'user' },
    { action: 'News article published', user: 'Admin', time: '15 minutes ago', type: 'news' },
    { action: 'Blog post updated', user: 'Editor', time: '1 hour ago', type: 'blog' },
    { action: 'User role changed', user: 'Admin', time: '2 hours ago', type: 'admin' },
  ];

  const quickActions = [
    { title: 'Create News Article', icon: Plus, href: '/admin/news/create', color: 'bg-blue-500' },
    { title: 'Write Blog Post', icon: Plus, href: '/admin/blog/create', color: 'bg-green-500' },
    { title: 'Manage Users', icon: Users, href: '/admin/users', color: 'bg-purple-500' },
    { title: 'System Settings', icon: Settings, href: '/admin/settings', color: 'bg-gray-500' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage your content and users</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-primary/10 text-primary px-3 py-2 rounded-lg">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Admin</span>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.icon === Users ? 'bg-blue-100 text-blue-600' : 
                      stat.icon === Newspaper ? 'bg-green-100 text-green-600' : 
                      stat.icon === FileText ? 'bg-purple-100 text-purple-600' : 
                      'bg-orange-100 text-orange-600'}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">from last month</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <Link key={index} href={action.href}>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <div className={`w-3 h-3 rounded-full mr-3 ${action.color}`}></div>
                        <IconComponent className="h-4 w-4 mr-2" />
                        {action.title}
                      </Button>
                    </Link>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === 'user' ? 'bg-blue-500' :
                          activity.type === 'news' ? 'bg-green-500' :
                          activity.type === 'blog' ? 'bg-purple-500' :
                          'bg-orange-500'
                        }`}></div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">by {activity.user}</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Admin Navigation */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Admin Functions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/admin/news">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Newspaper className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                      <h3 className="text-lg font-semibold mb-2">News Management</h3>
                      <p className="text-sm text-muted-foreground">Create, edit, and manage news articles</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/admin/blog">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <FileText className="h-12 w-12 mx-auto mb-4 text-green-600" />
                      <h3 className="text-lg font-semibold mb-2">Blog Management</h3>
                      <p className="text-sm text-muted-foreground">Write and manage blog posts</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/admin/users">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Users className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                      <h3 className="text-lg font-semibold mb-2">User Management</h3>
                      <p className="text-sm text-muted-foreground">Manage user accounts and roles</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/admin/analytics">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                      <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                      <p className="text-sm text-muted-foreground">View site statistics and insights</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/admin/settings">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Settings className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                      <h3 className="text-lg font-semibold mb-2">System Settings</h3>
                      <p className="text-sm text-muted-foreground">Configure system preferences</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/admin/backup">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Shield className="h-12 w-12 mx-auto mb-4 text-red-600" />
                      <h3 className="text-lg font-semibold mb-2">Backup & Security</h3>
                      <p className="text-sm text-muted-foreground">Manage backups and security settings</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
