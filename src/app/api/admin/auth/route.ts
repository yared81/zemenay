import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

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

    // Temporary hardcoded admin credentials for demo purposes
    // In production, this should use a proper database with hashed passwords
    if (username === 'admin' && password === 'admin123') {
      const userData = {
        id: '1',
        username: 'admin',
        role: 'admin',
        name: 'Zemenay Admin'
      };
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = sign(
      { 
        userId: userData.id, 
        username: userData.username, 
        role: userData.role,
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
      },
      JWT_SECRET
    );

    // Set HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 // 24 hours
    });

    return NextResponse.json({
      message: 'Login successful',
      user: {
        id: userData.id,
        username: userData.username,
        role: userData.role,
        name: userData.name
      }
    });

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
      cookieStore.delete('admin_token');

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
