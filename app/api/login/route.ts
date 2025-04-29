import { NextResponse } from 'next/server';
import { signIn } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Basic validation
    if (!data.email || !data.password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    // Sign in the user
    const result = await signIn({
      email: data.email,
      password: data.password,
    });
    
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 401 }
      );
    }
    
    // Return success response
    return NextResponse.json({
      success: true,
      user: {
        id: result.user?.id,
        email: result.user?.email,
      }
    });
    
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
