import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone as PhoneIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <ContactInfo
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              content="support@ThoughtbotChat.com"
            />
            <ContactInfo
              icon={<PhoneIcon className="w-6 h-6" />}
              title="Phone"
              content="+1 (111) 123-4567"
            />
            <ContactInfo
              icon={<MapPin className="w-6 h-6" />}
              title="Address"
              content="Lucknow"
            />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 
                         text-white rounded-md transition-colors duration-200"
            >
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, content }: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="text-blue-400">{icon}</div>
    <div>
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </div>
  </div>
);

export default Contact;