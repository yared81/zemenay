import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { JobApplication } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body: JobApplication = await request.json();
    
    // Validate required fields
    if (!body.job_title || !body.first_name || !body.last_name || !body.email || !body.phone || !body.experience_years || !body.skills) {
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

    // Validate experience years
    if (body.experience_years < 0 || body.experience_years > 50) {
      return NextResponse.json(
        { error: 'Invalid experience years' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('job_applications')
      .insert([
        {
          job_title: body.job_title,
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          phone: body.phone,
          resume_url: body.resume_url || null,
          cover_letter: body.cover_letter || null,
          experience_years: body.experience_years,
          skills: body.skills,
          status: 'applied'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Job application submitted successfully',
        data: data[0]
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Job application error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
