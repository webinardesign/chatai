import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ChatGPT from './pages/ChatGPTS';
import Team from './pages/Team';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="chatgpt" element={<ChatGPT />} />
        <Route path="team" element={<Team />} />
      </Route>
    </Routes>
  );
}

export default App;
