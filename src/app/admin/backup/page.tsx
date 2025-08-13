'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Download, 
  Upload, 
  RefreshCw, 
  CheckCircle, 
  AlertCircle,
  HardDrive,
  Cloud,
  Database,
  Shield
} from 'lucide-react';
import Link from 'next/link';

const BackupSecurityPage = () => {
  const [backupProgress, setBackupProgress] = useState(0);
  const [isBackingUp, setIsBackingUp] = useState(false);

  // Mock data - in real app this would come from API/database
  const backupHistory = [
    {
      id: 1,
      name: 'Full Backup - 2024-01-20',
      type: 'full',
      size: '2.4 GB',
      status: 'completed',
      date: '2024-01-20 02:00',
      duration: '15 min'
    },
    {
      id: 2,
      name: 'Incremental Backup - 2024-01-19',
      type: 'incremental',
      size: '156 MB',
      status: 'completed',
      date: '2024-01-19 02:00',
      duration: '3 min'
    },
    {
      id: 3,
      name: 'Full Backup - 2024-01-18',
      type: 'full',
      size: '2.3 GB',
      status: 'failed',
      date: '2024-01-18 02:00',
      duration: '0 min'
    }
  ];

  const securityAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Multiple failed login attempts detected',
      severity: 'medium',
      time: '2 hours ago',
      resolved: false
    },
    {
      id: 2,
      type: 'info',
      message: 'New user registration from unknown IP',
      severity: 'low',
      time: '4 hours ago',
      resolved: true
    },
    {
      id: 3,
      type: 'critical',
      message: 'Database connection timeout',
      severity: 'high',
      time: '6 hours ago',
      resolved: false
    }
  ];

  const systemHealth = {
    database: { status: 'healthy', uptime: '99.9%', connections: 45 },
    storage: { status: 'healthy', used: '68%', free: '32%' },
    security: { status: 'healthy', threats: 0, lastScan: '2 hours ago' },
    performance: { status: 'warning', responseTime: '450ms', load: '75%' }
  };

  const startBackup = () => {
    setIsBackingUp(true);
    setBackupProgress(0);
    
    const interval = setInterval(() => {
      setBackupProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsBackingUp(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical': return <AlertCircle className="h-5 w-5 text-red-600" />;
      case 'warning': return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case 'info': return <Cloud className="h-5 w-5 text-blue-600" />;
      default: return <Cloud className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Backup & Security</h1>
              <p className="text-muted-foreground">Manage backups and monitor security</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button onClick={startBackup} disabled={isBackingUp}>
                <RefreshCw className={`h-4 w-4 mr-2 ${isBackingUp ? 'animate-spin' : ''}`} />
                {isBackingUp ? 'Backing Up...' : 'Start Backup'}
              </Button>
              <Link href="/admin">
                <Button variant="outline">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* System Health Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Database</p>
                  <p className="text-2xl font-bold text-foreground">{systemHealth.database.uptime}</p>
                </div>
                <div className="p-3 rounded-lg bg-green-100 text-green-600">
                  <Database className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  {systemHealth.database.connections} active connections
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Storage</p>
                  <p className="text-2xl font-bold text-foreground">{systemHealth.storage.used}</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                  <HardDrive className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  {systemHealth.storage.free} free space
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Security</p>
                  <p className="text-2xl font-bold text-foreground">{systemHealth.security.threats}</p>
                </div>
                <div className="p-3 rounded-lg bg-green-100 text-green-600">
                  <Shield className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Last scan: {systemHealth.security.lastScan}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Performance</p>
                  <p className="text-2xl font-bold text-foreground">{systemHealth.performance.responseTime}</p>
                </div>
                <div className="p-3 rounded-lg bg-yellow-100 text-yellow-600">
                  <RefreshCw className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Load: {systemHealth.performance.load}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Backup Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2" />
                Backup Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Backup Progress */}
              {isBackingUp && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Backup Progress</span>
                    <span className="text-sm text-muted-foreground">{backupProgress}%</span>
                  </div>
                  <Progress value={backupProgress} className="w-full" />
                </div>
              )}

              {/* Backup Actions */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Backup
                </Button>
                <Button variant="outline" className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Restore Backup
                </Button>
              </div>

              {/* Backup History */}
              <div className="space-y-3">
                <h4 className="font-medium">Recent Backups</h4>
                {backupHistory.map((backup) => (
                  <div key={backup.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{backup.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {backup.size} • {backup.duration}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        backup.status === 'completed' ? 'bg-green-100 text-green-800' :
                        backup.status === 'failed' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {backup.status}
                      </span>
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Security Monitoring */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityAlerts.map((alert) => (
                  <div key={alert.id} className={`p-4 rounded-lg border ${
                    alert.type === 'critical' ? 'border-red-200 bg-red-50 dark:bg-red-950' :
                    alert.type === 'warning' ? 'border-yellow-200 bg-yellow-50 dark:bg-yellow-950' :
                    'border-blue-200 bg-blue-50 dark:bg-blue-950'
                  }`}>
                    <div className="flex items-start space-x-3">
                      {getAlertIcon(alert.type)}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{alert.message}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-xs text-muted-foreground">{alert.time}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            alert.severity === 'high' ? 'bg-red-100 text-red-800' :
                            alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {alert.severity}
                          </span>
                          {!alert.resolved && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              Unresolved
                            </span>
                          )}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {alert.resolved ? <CheckCircle className="h-3 w-3" /> : <Cloud className="h-3 w-3" />}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Access Control */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Access Control
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">IP Whitelist</p>
                  <p className="text-xs text-muted-foreground">Restrict admin access to specific IPs</p>
                </div>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Session Management</p>
                  <p className="text-xs text-muted-foreground">View and manage active sessions</p>
                </div>
                <Button variant="outline" size="sm">
                  View Sessions
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Audit Log</p>
                  <p className="text-xs text-muted-foreground">Review system activity logs</p>
                </div>
                <Button variant="outline" size="sm">
                  View Logs
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Threat Prevention */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Threat Prevention
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Firewall Rules</p>
                  <p className="text-xs text-muted-foreground">Configure network security rules</p>
                </div>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Malware Scanning</p>
                  <p className="text-xs text-muted-foreground">Scan for malicious files</p>
                </div>
                <Button variant="outline" size="sm">
                  Start Scan
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Vulnerability Assessment</p>
                  <p className="text-xs text-muted-foreground">Check for security vulnerabilities</p>
                </div>
                <Button variant="outline" size="sm">
                  Run Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Button variant="outline" className="flex items-center justify-center">
                  <Database className="h-4 w-4 mr-2" />
                  Database Backup
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <HardDrive className="h-4 w-4 mr-2" />
                  File Backup
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Security Scan
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  System Check
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BackupSecurityPage;
