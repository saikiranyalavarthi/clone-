import React from 'react';
import './App.css'
const Image = () => {
  const imageUrl = 'https://www.cxoinsightme.com/wp-content/uploads/2020/07/AI_shutterstock_1722492775-scaled.jpg'
  return (
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Sustainability</h2>
        <p>
        Environmental stewardship is a priority for NTWIST. We help our customers 
        to minimize their sustainability    impact on the planet.
        Emissions or environmental targets are used alongside productivity targets to
        define success for our customers. With the increasing relevance
        carbon accounting and emissions tracking,
        NTWIST offers a suite of tools to increase visibility into 
        environmental performance and help processing plants track, manage, optimize, and report key metrics.
        </p>
        <button className='btn'>Read More</button>
      </div>
      <div style={{ flex: 1 }}>
        <img src={imageUrl} alt="Example" style={{ maxWidth: '100%', height: 'auto' }} />
       
      </div>
    </div>
  );
};
export default Image;
