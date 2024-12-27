import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">About Thoughtbot</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A bridge between human thoughts and AI intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
          In this project, I developed a cutting-edge AI conversational model designed to function like ChatGPT. This model represents a breakthrough in natural language processing (NLP), leveraging advanced algorithms to deliver dynamic, context-aware, and human-like interactions. My goal was to create a versatile, efficient, and user-friendly AI system capable of addressing complex queries, generating creative content, and assisting users across various domains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 mb-16"
        >
        <h2 className="text-2xl font-bold text-white mb-4">Applications</h2>
      
<ul>
<li  className="text-gray-300 leading-relaxed"><strong>Customer Support</strong>: Offers instant responses and personalized solutions.</li>
<li  className="text-gray-300 leading-relaxed"><strong>Education</strong>: Acts as a virtual tutor for students, answering questions and providing explanations.</li>
<li  className="text-gray-300 leading-relaxed"><strong>Creative Writing</strong>: Assists in generating ideas for stories, blogs, and articles.</li>
<li  className="text-gray-300 leading-relaxed"><strong>Healthcare</strong>: Provides information about symptoms, medications, and healthcare resources.</li>
<li  className="text-gray-300 leading-relaxed"><strong>Coding Assistant</strong>: Helps developers debug code, write scripts, and explore new programming concepts.</li>
</ul>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ValueCard
            icon={<Shield className="w-8 h-8" />}
            title="Privacy First"
            description="Your conversations are private and secure"
          />
          <ValueCard
            icon={<Users className="w-8 h-8" />}
            title="Community Driven"
            description="Built with user feedback and needs in mind"
          />
          <ValueCard
            icon={<Globe className="w-8 h-8" />}
            title="Global Access"
            description="Available worldwide, 24/7 support"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            At AI Chat, we believe in the power of artificial intelligence to enhance human capabilities.
            Our mission is to provide an accessible, intuitive, and powerful AI chat interface that helps
            people learn, create, and solve problems more effectively.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const ValueCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
  >
    <div className="text-purple-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default About;