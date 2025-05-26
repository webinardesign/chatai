import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, Mic } from 'lucide-react';
import { useChat } from '../hooks/useChat';

const ChatGPT = () => {
  const [input, setInput] = useState('');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  const { messages, sendMessage, loading } = useChat();

  // Setup speech recognition
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) return;

    const SpeechRecognition = (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
    setListening(!listening);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 h-[600px] flex flex-col"
        >
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Chat with AI</h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <Message key={index} {...message} />
            ))}
            {loading && (
              <div className="text-gray-400 animate-pulse">AI is thinking...</div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type or speak your message..."
                className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={toggleListening}
               className={`px-4 py-2 rounded-lg flex items-center justify-center ${
  listening ? 'bg-red-600' : 'bg-gray-700'
} text-white hover:opacity-80`}

              >
                <Mic size={18} />
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 disabled:opacity-50"
              >
                <Send size={18} />
                <span>Send</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const Message = ({ role, content }: { role: 'user' | 'assistant'; content: string }) => {
  // Speak assistant's reply
  useEffect(() => {
    if (role === 'assistant' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(content);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  }, [content, role]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex space-x-3 ${role === 'user' ? 'justify-end' : ''}`}
    >
      <div className={`flex space-x-3 max-w-[80%] ${role === 'user' ? 'flex-row-reverse' : ''}`}>
        <div className={`p-2 rounded-full ${role === 'user' ? 'bg-blue-600' : 'bg-gray-700'}`}>
          {role === 'user' ? <User size={20} /> : <Bot size={20} />}
        </div>
        <div
          className={`p-3 rounded-lg ${
            role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'
          }`}
        >
          {content}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatGPT;
