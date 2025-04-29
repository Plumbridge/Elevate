import { NextRequest, NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req: NextRequest) {
  // Create a Supabase client configured to use cookies
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If there's no session and the user is trying to access a protected route
  const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard');
  
  if (!session && isProtectedRoute) {
    // Redirect to the login page
    const redirectUrl = new URL('/login', req.url);
    redirectUrl.searchParams.set('redirect', req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // If there's a session and the user is trying to access auth routes
  const isAuthRoute = req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/signup';
  
  if (session && isAuthRoute) {
    // Redirect to the dashboard
    const redirectUrl = new URL('/dashboard', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

// Configure which paths should be protected
export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
};