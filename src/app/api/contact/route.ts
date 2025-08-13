import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { ContactForm } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();
    
    // Validate required fields
    if (!body.first_name || !body.last_name || !body.email || !body.service || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contact_forms')
      .insert([
        {
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          phone: body.phone || null,
          company: body.company || null,
          service: body.service,
          message: body.message,
          newsletter: body.newsletter || false,
          status: 'new'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      );
    }

    // If newsletter subscription is requested
    if (body.newsletter) {
      await supabase
        .from('newsletter_subscriptions')
        .upsert([
          {
            email: body.email,
            first_name: body.first_name,
            last_name: body.last_name,
            company: body.company || null,
            interests: [body.service],
            subscribed: true
          }
        ]);
    }

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        data: data[0]
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
