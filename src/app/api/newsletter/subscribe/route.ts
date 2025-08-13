import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { NewsletterSubscription } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body: NewsletterSubscription = await request.json();
    
    // Validate required fields
    if (!body.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .eq('email', body.email)
      .single();

    if (existing && existing.subscribed) {
      return NextResponse.json(
        { error: 'Email is already subscribed' },
        { status: 400 }
      );
    }

    // Insert or update in Supabase
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .upsert([
        {
          email: body.email,
          first_name: body.first_name || null,
          last_name: body.last_name || null,
          company: body.company || null,
          interests: body.interests || [],
          subscribed: true,
          unsubscribed_at: null
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to newsletter',
        data: data[0]
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Update subscription status
    const { error } = await supabase
      .from('newsletter_subscriptions')
      .update({
        subscribed: false,
        unsubscribed_at: new Date().toISOString()
      })
      .eq('email', email);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to unsubscribe' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully unsubscribed from newsletter' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter unsubscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
