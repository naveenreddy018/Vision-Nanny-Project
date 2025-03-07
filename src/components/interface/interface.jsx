import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './interface.css';

function Interface() {
  const [expanded, setExpanded] = useState({
    fruits: false,
    vegetables: false,
    everydayObject: false,
  });

  const toggleExpand = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className='interface-container'>
      <h1 className='company-heading'>GrailMaker Innovations</h1>

      <div className='cards-wrapper'>
        <Link to='/animals' className='interface-link'>
          <div className='interface-card'>
            <h1>🐾 ANIMALS</h1>
            <p>
              This tool helps recognize different animal species, their habitats, and unique characteristics.
            </p>
          </div>
        </Link>

        <Link to='/birds' className='interface-link'>
          <div className='interface-card'>
            <h1>🐦 BIRDS</h1>
            <p>
              This tool aids in recognizing bird species, their colors, sounds, and flight patterns.
            </p>
          </div>
        </Link>

        <Link to='/shapes' className='interface-link'>
          <div className='interface-card'>
            <h1>🔷 SHAPES</h1>
            <p>
              An interactive tool designed to develop spatial awareness and problem-solving skills.
            </p>
          </div>
        </Link>

        <div
          className={`interface-card ${expanded.fruits ? 'expanded' : ''}`}
          onClick={() => toggleExpand('fruits')}
        >
          <h1>🍎 FRUITS</h1>
          <p>
            Explore various fruit species, their nutritional values
          </p>
          {expanded.fruits && <div className='subscribed'>Subscribe</div>}
        </div>

        <div
          className={`interface-card ${expanded.vegetables ? 'expanded' : ''}`}
          onClick={() => toggleExpand('vegetables')}
        >
          <h1>🥦 VEGETABLES</h1>
          <p>
            Discover different vegetables, their health benefits
          </p>
          {expanded.vegetables && <div className='subscribed'>Subscribe</div>}
        </div>

        <div
          className={`interface-card ${expanded.everydayObject ? 'expanded' : ''}`}
          onClick={() => toggleExpand('everydayObject')}
        >
          <h1>🛍️ EVERYDAY OBJECTS</h1>
          <p>
            Learn about common objects, their history, and interesting facts.
          </p>
          {expanded.everydayObject && <div className='subscribed'>Subscribe</div>}
        </div>
      </div>
    </div>
  );
}

export default Interface;
