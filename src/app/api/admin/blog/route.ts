import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - Fetch all blog posts
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch blog posts' },
        { status: 500 }
      );
    }

    return NextResponse.json({ posts: data });
  } catch (error) {
    console.error('Blog posts fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create new blog post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.title || !body.content || !body.excerpt || !body.author) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([
        {
          title: body.title,
          content: body.content,
          excerpt: body.excerpt,
          author: body.author,
          tags: body.tags || [],
          featured_image: body.featured_image || null,
          status: body.status || 'draft',
          published_at: body.status === 'published' ? new Date().toISOString() : null
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to create blog post' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Blog post created successfully',
        post: data[0]
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Blog post creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
