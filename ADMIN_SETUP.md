# Admin System Setup Guide

## Overview
This guide explains how to set up the secure admin system for your Zemenay website.

## 1. Environment Variables
Create a `.env.local` file in your project root with the following variables:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# JWT Secret for Admin Authentication (CHANGE THIS IN PRODUCTION!)
JWT_SECRET=your-super-secret-jwt-key-change-this-immediately

# Admin Default Credentials (CHANGE THESE IN PRODUCTION!)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
ADMIN_EMAIL=admin@zemenay.com
ADMIN_NAME=Administrator
```

## 2. Database Setup
You need to create the following tables in your Supabase database:

### Admin Users Table
```sql
CREATE TABLE admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(20) DEFAULT 'admin' CHECK (role IN ('admin', 'editor', 'moderator')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE
);
```

### Blog Posts Table
```sql
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author VARCHAR(100) NOT NULL,
  tags TEXT[] DEFAULT '{}',
  featured_image VARCHAR(500),
  status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### News Articles Table
```sql
CREATE TABLE news_articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author VARCHAR(100) NOT NULL,
  category VARCHAR(50) DEFAULT 'general',
  featured_image VARCHAR(500),
  status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 3. Insert Default Admin User
After creating the tables, insert a default admin user:

```sql
INSERT INTO admin_users (username, password, name, email, role, is_active)
VALUES (
  'admin',
  'admin123',
  'Administrator',
  'admin@zemenay.com',
  'admin',
  true
);
```

## 4. Security Features Implemented

### ✅ Authentication Required
- All admin routes (`/admin/*`) require login
- JWT token-based authentication
- HTTP-only cookies for security

### ✅ Protected Routes
- `/admin` - Main dashboard
- `/admin/blog` - Blog management
- `/admin/news` - News management
- `/admin/users` - User management
- `/admin/settings` - System settings

### ✅ API Protection
- All `/api/admin/*` endpoints require valid JWT token
- Middleware automatically checks authentication
- Automatic redirect to login for unauthorized access

## 5. How to Access

1. **Navigate to**: `yourdomain.com/admin/login`
2. **Login with**: 
   - Username: `admin`
   - Password: `admin123`
3. **After login**: You'll be redirected to `/admin` dashboard

## 6. Production Security Checklist

- [ ] Change default admin credentials
- [ ] Use a strong, unique JWT_SECRET
- [ ] Enable HTTPS in production
- [ ] Consider implementing rate limiting
- [ ] Add two-factor authentication
- [ ] Regular security audits
- [ ] Monitor login attempts

## 7. Features Available

### Blog Management
- Create, edit, and delete blog posts
- Draft and publish functionality
- Tag management
- Featured image support

### News Management
- Create, edit, and delete news articles
- Category organization
- Draft and publish functionality
- Featured image support

### User Management
- View all users
- Manage user roles
- Track user activity

### Analytics Dashboard
- View site statistics
- Monitor user engagement
- Track content performance

## 8. API Endpoints

### Public APIs (No Auth Required)
- `GET /api/blog` - Fetch published blog posts
- `GET /api/news` - Fetch published news articles

### Admin APIs (Auth Required)
- `POST /api/admin/auth` - Admin login
- `DELETE /api/admin/auth` - Admin logout
- `GET /api/admin/blog` - Fetch all blog posts
- `POST /api/admin/blog` - Create blog post
- `GET /api/admin/news` - Fetch all news articles
- `POST /api/admin/news` - Create news article

## 9. Troubleshooting

### Common Issues
1. **"Invalid credentials"** - Check username/password in database
2. **"Token expired"** - Re-login to admin panel
3. **"Access denied"** - Ensure you're logged in and token is valid

### Database Connection Issues
1. Verify Supabase URL and keys in `.env.local`
2. Check if tables exist in Supabase dashboard
3. Ensure RLS policies allow necessary operations

## 10. Support
For technical support or questions about the admin system, please contact your development team.
