import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Vikas',
    role: 'B.tech(CSE)',
    photo: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Dishant',
    role: 'B.tech(CSE)',
    photo: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Abhishek',
    role: 'B.tech(CSE)',
    photo: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
 
  {
    name: 'Arif',
    role: 'B.tech(CSE)',
    photo: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Gudiya',
    role: 'B.tech(CSE)',
    photo: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

export const Team = () => {
  return (
    <div className="min-h-screen bg-black py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-white">Meet Our Team</h1>
        <p className="text-gray-400 mb-8">
          A group of passionate individuals dedicated to making an impact.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-600">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-white">{member.name}</h2>
            <p className="text-gray-400">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
