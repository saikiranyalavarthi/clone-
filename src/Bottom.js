import React from 'react'
import './App.css'
const Bottom = () => {
  return (
    <div style={styles.container}>
      <h4>N Twins</h4>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Site Map</li>
      </ul>
      <div style={styles.address}>
        <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
        <p>© 2022. Ntwist Inc.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'black',
    color: 'white', 
    padding: '20px',
    maxWidth: '1500px', 
    margin: '0 auto', 

  },
  address: {
    marginTop: '20px', 
  },
};

  

export default Bottom
