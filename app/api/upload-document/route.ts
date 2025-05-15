import { NextRequest, NextResponse } from 'next/server';
import { uploadFile } from '@/lib/google-cloud';
import { createClient } from '@/lib/supabase';

interface DocumentRecord {
  id?: string;
  user_id: string;
  application_id?: string;
  name: string;
  original_name: string;
  file_path: string;
  file_url: string;
  file_size: number;
  mime_type: string;
  document_type: string;
  uploaded_at: string;
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient();
    
    // Get user from session (you'll need to implement this based on your auth)
    // For now, I'll use a placeholder
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const documentType = formData.get('documentType') as string;
    const applicationId = formData.get('applicationId') as string;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'File too large. Maximum size is 10MB' }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
      'text/plain'
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Upload to Google Cloud Storage
    const fileUrl = await uploadFile(buffer, file.name, file.type, user.id);

    // Save document metadata to database
    const documentRecord: DocumentRecord = {
      user_id: user.id,
      application_id: applicationId || null,
      name: file.name,
      original_name: file.name,
      file_path: `${user.id}/${Date.now()}-${file.name}`,
      file_url: fileUrl,
      file_size: file.size,
      mime_type: file.type,
      document_type: documentType || 'other',
      uploaded_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('documents')
      .insert([documentRecord])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json({ error: 'Failed to save document metadata' }, { status: 500 });
    }

    return NextResponse.json({ 
      message: 'Document uploaded successfully', 
      document: data 
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}