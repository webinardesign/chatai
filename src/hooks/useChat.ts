import { useState } from 'react';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const useChat = () => {
const apiKey = import.meta.env.VITE_API_KEY;
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return; // Prevent sending empty messages

    const userMessage: Message = { role: 'user', content };

    // Optimistically add user's message to the state
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const requestPayload = {
        model: 'gpt-4o-mini', // Ensure model is specified
        messages: [...messages, userMessage].map(msg => ({
          role: msg.role,
          content: msg.content,
        })),
      };

      console.log('Request payload:', requestPayload); // Debugging

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        requestPayload,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Response received:', response.data); // Debugging

      const assistantMessageContent = response.data?.choices?.[0]?.message?.content;
      if (assistantMessageContent) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: assistantMessageContent,
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error('No content in response');
      }
    } catch (error: any) {
      console.error('Error sending message:', error);

      if (error.response) {
        console.error('Response Data:', error.response.data);
        console.error('Status Code:', error.response.status);
      } else if (error.request) {
        console.error('Request Error:', error.request);
      } else {
        console.error('Error Message:', error.message);
      }

      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again later.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, sendMessage, loading };
};
