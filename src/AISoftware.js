import React from 'react'
import './App.css'


const AISoftware = () => {
    const imageUrl = 'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?cs=srgb&dl=buildings-industry-architecture-247763.jpg&fm=jpg'
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
     
      <div style={{ flex: 1 }}>
        <img src={imageUrl} alt="Example" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Mine-To-Mill-To-Mine Optimization</h2>
        <p>
        NTWIST’s newest product unlocks up to $250/oz in previously
inaccessible value in open pit gold mines by connecting siloed
data sources like block models, fleet management systems, stockpile surveys,
and plant instruments. This allows your company to better track material flow, and feed properties,
identify plan/production discrepancies,
and correct resource models and production plans.
        </p>
        <button className='btn'>Read More</button>
      </div>
    </div>
  );
};



export default AISoftware

