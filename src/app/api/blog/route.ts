import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - Fetch published blog posts for public viewing
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    // Fetch only published posts
    const { data, error, count } = await supabase
      .from('blog_posts')
      .select('*', { count: 'exact' })
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch blog posts' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      posts: data,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit)
      }
    });
  } catch (error) {
    console.error('Blog posts fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
