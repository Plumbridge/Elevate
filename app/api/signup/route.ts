import { NextResponse } from 'next/server';
import { createUser } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.password || !data.confirmPassword) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    if (data.password !== data.confirmPassword) {
      return NextResponse.json(
        { success: false, error: 'Passwords do not match' },
        { status: 400 }
      );
    }

    if (!data.package) {
      return NextResponse.json(
        { success: false, error: 'Please select a package' },
        { status: 400 }
      );
    }
    
    // Create the user using Supabase
    const result = await createUser({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      packageId: data.package,
    });
    
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }
    
    // Return success response
    return NextResponse.json({
      success: true,
      user: {
        id: result.user?.id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        packageId: data.package,
      }
    });
    
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
