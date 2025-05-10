import { create } from 'zustand';

// Define the ChatMessage type if not already defined in your types file
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isLoading: false,
  error: null,
  
  sendMessage: async (content: string) => {
    // Add user message to state immediately
    set((state) => ({
      messages: [
        ...state.messages,
        { role: 'user', content, timestamp: new Date() }
      ],
      isLoading: true,
      error: null,
    }));
    
    try {
      // Call your Next.js API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: content }),
      });
      
      if (!response.ok) {
        throw new Error(`API returned status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      // Add AI response to state
      set((state) => ({
        messages: [
          ...state.messages, 
          { 
            role: 'assistant', 
            content: data.answer,
            timestamp: new Date()
          }
        ],
        isLoading: false,
      }));
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message as assistant response
      set((state) => ({
        messages: [
          ...state.messages, 
          { 
            role: 'assistant', 
            content: 'Sorry, I encountered an error processing your request. Please try again later.',
            timestamp: new Date()
          }
        ],
        isLoading: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }));
    }
  },
  
  clearMessages: () => set({ messages: [], error: null }),
}));