import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - Fetch all news articles
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('news_articles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch news articles' },
        { status: 500 }
      );
    }

    return NextResponse.json({ articles: data });
  } catch (error) {
    console.error('News articles fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create new news article
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
      .from('news_articles')
      .insert([
        {
          title: body.title,
          content: body.content,
          excerpt: body.excerpt,
          author: body.author,
          category: body.category || 'general',
          featured_image: body.featured_image || null,
          status: body.status || 'draft',
          published_at: body.status === 'published' ? new Date().toISOString() : null
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to create news article' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'News article created successfully',
        article: data[0]
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('News article creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
