// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Industries from './Industries';
import AISoftware from './AISoftware';
import Blog from './Blog';
import ContactUs from './ContactUs';
import ImageWithContent from './ImageWithContent';
import Image from './Image';
import Nav from './Nav';
import Bottom from './Bottom';

const App = () => {
  return (
    <Router>
      <div className="app"><Nav/><br/>
         <div className="content"> 
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/industries" element={<Industries/>} />
            <Route path="/ai-software" element={<AISoftware/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            </Routes>
            <ImageWithContent />
            <Image/>
            <ImageWithContent />
            <Image/>
            <Bottom/>
        </div>

      </div>
    </Router>
  );
};

export default App;
