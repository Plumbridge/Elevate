import { NextResponse } from 'next/server';

// Replace this with your actual Cloud Function or Cloud Run URL
const RAG_API_URL = process.env.RAG_API_URL || 'https://your-rag-service-url.a.run.app/query';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }
    
    console.log(`Processing chat request: "${message.substring(0, 50)}${message.length > 50 ? '...' : ''}"`);
    
    // Call your deployed RAG handler
    const response = await fetch(RAG_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: message }),
    });
    
    if (!response.ok) {
      console.error(`API error: ${response.status}`);
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.answer && !data.response) {
      console.error('Invalid response format from RAG API:', data);
      throw new Error('Invalid response format from RAG API');
    }
    
    return NextResponse.json({ 
      answer: data.answer || data.response
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI assistant' },
      { status: 500 }
    );
  }
}