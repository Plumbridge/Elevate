import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// User-related functions
export async function createUser({
  firstName,
  lastName,
  email,
  password,
  packageId,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  packageId: string;
}) {
  try {
    // Step 1: Sign up the user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          package_id: packageId,
        },
      },
    });

    if (authError) throw authError;

    return { success: true, user: authData.user };
  } catch (error) {
    console.error('Error creating user:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
}

// Package-related functions
export async function getPackages() {
  try {
    const { data, error } = await supabase
      .from('packages')
      .select('*')
      .order('price');

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching packages:', error);
    return [];
  }
}