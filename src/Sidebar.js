// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>NTwins</h3> 
      <Link to="/">Home</Link>
      <Link to="/industries">Industries</Link>
      <Link to="/ai-software">AI Software</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact-us">Contact Us</Link>
      
    </div>
  
  );
};

export default Sidebar;

