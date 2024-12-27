import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Home, Info, Phone,User } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <nav className="bg-gray-800/50 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Link to="/" className="text-white text-xl font-bold">Thoughtbot Chat</Link>
            </motion.div>
            <div className="flex space-x-4">
              <NavLink to="/" icon={<Home size={18} />} text="Home" />
              <NavLink to="/chatgpt" icon={<MessageSquare size={18} />} text="ChatGPT" />
              <NavLink to="/about" icon={<Info size={18} />} text="About" />
              <NavLink to="/team" icon={<User size={18} />} text="Team" />
              <NavLink to="/contact" icon={<Phone size={18} />} text="Contact" />
              
              
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium 
               flex items-center space-x-1 transition-colors duration-200"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Layout;