import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - Fetch published news articles for public viewing
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const offset = (page - 1) * limit;

    let query = supabase
      .from('news_articles')
      .select('*', { count: 'exact' })
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    // Add category filter if specified
    if (category && category !== 'all') {
      query = query.eq('category', category);
    }

    const { data, error, count } = await query.range(offset, offset + limit - 1);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch news articles' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      articles: data,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit)
      }
    });
  } catch (error) {
    console.error('News articles fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
