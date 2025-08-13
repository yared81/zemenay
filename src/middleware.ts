import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip authentication for login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Check if admin is logged in via simple cookie
    const isLoggedIn = request.cookies.get('admin_logged_in')?.value === 'true';

    if (!isLoggedIn) {
      // Redirect to login if not logged in
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Admin is logged in, continue
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*'
  ]
};
