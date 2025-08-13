import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip authentication for login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Get the admin token from cookies
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      // Verify the JWT token
      const decoded = verify(token, JWT_SECRET) as { exp?: number };
      
      // Check if token is expired
      if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        // Token expired, redirect to login
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }

      // Token is valid, continue
      return NextResponse.next();
    } catch {
      // Invalid token, redirect to login
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*'
  ]
};
