import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { InternshipApplication } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body: InternshipApplication = await request.json();
    
    // Validate required fields
    if (!body.program_title || !body.first_name || !body.last_name || !body.email || !body.phone || !body.university || !body.graduation_year || !body.skills) {
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

    // Validate graduation year
    const currentYear = new Date().getFullYear();
    if (body.graduation_year < currentYear - 10 || body.graduation_year > currentYear + 5) {
      return NextResponse.json(
        { error: 'Invalid graduation year' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('internship_applications')
      .insert([
        {
          program_title: body.program_title,
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          phone: body.phone,
          university: body.university,
          graduation_year: body.graduation_year,
          resume_url: body.resume_url || null,
          motivation_letter: body.motivation_letter || null,
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
        message: 'Internship application submitted successfully',
        data: data[0]
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Internship application error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
