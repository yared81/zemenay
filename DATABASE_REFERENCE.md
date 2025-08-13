# Database Reference Guide

## Quick Table Overview

| Table | Purpose | Key Fields | Relationships |
|-------|---------|------------|---------------|
| `users` | Admin users | id, email, role_id, status | roles, blog_posts, media_library |
| `roles` | User permissions | id, name, permissions | users |
| `blog_posts` | Blog content | id, slug, title, author_id, category | users, content_categories |
| `content_categories` | Content organization | id, name, slug, parent_id | blog_posts, self-referencing |
| `media_library` | File management | id, filename, file_path, uploaded_by | users |
| `system_settings` | Configuration | id, setting_key, setting_value | users |
| `admin_activity_logs` | Audit trail | id, user_id, action, table_name | users |
| `backup_logs` | Backup tracking | id, backup_type, status, initiated_by | users |

## Field Types and Constraints

### Common Field Types
- **UUID**: Primary keys using `uuid_generate_v4()`
- **VARCHAR**: String fields with length limits
- **TEXT**: Unlimited text fields
- **TIMESTAMP WITH TIME ZONE**: Date/time with timezone
- **JSONB**: JSON data for flexible schemas
- **TEXT[]**: Array of strings
- **BOOLEAN**: True/false values
- **INTEGER**: Whole numbers
- **DECIMAL**: Decimal numbers with precision

### Common Constraints
- **NOT NULL**: Field cannot be empty
- **UNIQUE**: Field value must be unique
- **CHECK**: Custom validation rules
- **DEFAULT**: Default value if none provided
- **REFERENCES**: Foreign key relationships

## Indexes for Performance

### Primary Indexes
- All tables have primary key indexes on `id`

### Secondary Indexes
- **users**: email, role_id, status
- **blog_posts**: slug, author_id, category, published
- **content_categories**: slug, parent_id
- **media_library**: filename, uploaded_by, status
- **system_settings**: setting_key
- **admin_activity_logs**: user_id, action, created_at

## Row Level Security (RLS)

### Enabled Tables
All admin tables have RLS enabled for security.

### Policies
- **Public Read**: Published content only
- **Admin Access**: Full access for authenticated users
- **User Management**: Role-based access control

## Triggers

### Updated At Trigger
All tables with `updated_at` fields automatically update timestamps.

```sql
CREATE TRIGGER update_table_updated_at 
BEFORE UPDATE ON table_name 
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

## Sample Data

### Default Roles
1. **super_admin**: Full access to all features
2. **admin**: Access to most features
3. **content_manager**: Content creation and editing
4. **moderator**: Limited content and user management
5. **user**: Basic read access

### Default Admin User
- **Email**: admin@zemenay.com
- **Role**: super_admin
- **Status**: active

### Default System Settings
- Site name, description, contact info
- Maintenance mode status
- File upload limits and allowed types

## API Endpoints

### REST API
- **Base URL**: `https://your-project.supabase.co/rest/v1/`
- **Authentication**: Bearer token in Authorization header
- **Tables**: All tables accessible via REST API

### Storage API
- **Base URL**: `https://your-project.supabase.co/storage/v1/`
- **Buckets**: `media` bucket for file uploads
- **Permissions**: Controlled via RLS policies

## Common Queries

### Get User with Role
```sql
SELECT u.*, r.name as role_name 
FROM users u 
JOIN roles r ON u.role_id = r.id 
WHERE u.email = 'user@example.com';
```

### Get Published Blog Posts
```sql
SELECT bp.*, u.first_name, u.last_name, cc.name as category_name
FROM blog_posts bp
JOIN users u ON bp.author_id = u.id
JOIN content_categories cc ON bp.category = cc.slug
WHERE bp.published = true
ORDER BY bp.created_at DESC;
```

### Get Media Files by User
```sql
SELECT ml.*, u.first_name, u.last_name
FROM media_library ml
JOIN users u ON ml.uploaded_by = u.id
WHERE ml.status = 'active'
ORDER BY ml.created_at DESC;
```

## Backup and Maintenance

### Backup Types
1. **Database**: Full database backup
2. **Files**: Storage bucket backup
3. **Full**: Complete system backup

### Maintenance Tasks
- Regular index optimization
- Cleanup of old activity logs
- Archive old backup logs
- Monitor table sizes and performance

## Security Best Practices

### Authentication
- Use strong passwords
- Enable 2FA for admin accounts
- Regular password rotation
- Monitor login attempts

### Data Protection
- Encrypt sensitive data
- Regular security audits
- Monitor access patterns
- Backup encryption

### Access Control
- Principle of least privilege
- Regular role reviews
- Audit trail monitoring
- Session management

## Troubleshooting

### Common Issues
1. **Permission Denied**: Check RLS policies and user roles
2. **Connection Errors**: Verify environment variables
3. **Upload Failures**: Check storage bucket permissions
4. **Performance Issues**: Review indexes and query optimization

### Debug Queries
```sql
-- Check user permissions
SELECT u.email, r.name as role, r.permissions
FROM users u
JOIN roles r ON u.role_id = r.id;

-- Check RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE schemaname = 'public';

-- Check table sizes
SELECT 
    schemaname,
    tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```
