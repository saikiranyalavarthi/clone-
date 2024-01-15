import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
const Nav = () => {
  return (
    <div style={styles.container}>
        <div className="sidebar">
      <h3>NTwins</h3> 
      <Link to="/">Home</Link>
      <Link to="/industries">Industries</Link>
      <Link to="/ai-software">AI Software</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact-us">Contact Us</Link>
      
    </div>
  <br/>
      <div className='left'>
        <h1>Data Powered - Solution <br/>For Industrial Excellance <br/> <button className='nbt'> Read More</button></h1><br/><br/>
      </div>
      <div style={styles.right}>
        <img
          src="home-image-icons-v6 (1).png"
          alt="Your "
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh', // Set the height as needed
    background: 'url(https://th.bing.com/th/id/OIP.3VpvsuxZAUGxQ9jY9WRhygHaE8?rs=1&pid=ImgDetMain) center/cover',
  },
  right: {
    flex: 1,
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '60%', 
    maxHeight: '60%', 
}
}

export default Nav;
