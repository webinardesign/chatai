import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to Thoughtbot Chat
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
        A bridge between human thoughts and AI intelligence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        <FeatureCard
          icon={<Bot className="w-8 h-8" />}
          title="Smart Conversations"
          description="Engage in natural conversations with our AI assistant"
        />
        <FeatureCard
          icon={<Sparkles className="w-8 h-8" />}
          title="Advanced AI"
          description="Powered by the latest GPT technology"
        />
        <FeatureCard
          icon={<Zap className="w-8 h-8" />}
          title="Real-time Responses"
          description="Get instant answers to your questions"
        />
      </div>
        <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 mt-16"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                In this project, I developed a cutting-edge AI conversational model designed to function like ChatGPT. This model represents a breakthrough in natural language processing (NLP), leveraging advanced algorithms to deliver dynamic, context-aware, and human-like interactions. My goal was to create a versatile, efficient, and user-friendly AI system capable of addressing complex queries, generating creative content, and assisting users across various domains.
                </p>
              </motion.div>


    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
  >
    <div className="text-blue-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default Home;