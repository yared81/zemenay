import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// POST - Admin login
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Validate required fields
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Hardcoded admin credentials
    if (username === 'admin' && password === 'admin123') {
      // Set a simple session cookie
      const cookieStore = await cookies();
      cookieStore.set('admin_logged_in', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 // 24 hours
      });

      return NextResponse.json({
        message: 'Login successful',
        user: {
          id: '1',
          username: 'admin',
          role: 'admin',
          name: 'Zemenay Admin'
        }
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE - Admin logout
export async function DELETE() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('admin_logged_in');

    return NextResponse.json({
      message: 'Logout successful'
    });
  } catch (error) {
    console.error('Admin logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
