import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./interface.css";
import Pictures from '../../assets/assets';

function Interface() {
  const [expanded, setExpanded] = useState({
    fruits: false,
    vegetables: false,
    everydayObject: false
  });

  const toggleExpand = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className='intrefacecontainer' style={{ backgroundImage : Pictures.BackImage ,backgroundRepeat : "no-repeat"}}>
      <div className='grailmaker-animation'>GRAILMAKER INNOVATIONS</div>
      
      <Link to="/animals" style={{ textDecoration: "none" }} >
        <div className='interface'>
          <h1>🐾 ANIMALS</h1>
          <div>This tool helps recognize different animal species, their habitats, and unique characteristics.</div>
        </div>
      </Link>

      <Link to="/birds" style={{ textDecoration: "none" }} >
        <div className='interface'>
          <h1>🐦 BIRDS</h1>
          <div>This tool aids in recognizing bird species, their colors, sounds, and flight patterns.</div>
        </div>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/shapes" >
        <div className='interface'>
          <h1>🔷 SHAPES</h1>
          <div>An interactive tool designed to develop spatial awareness and problem-solving skills.</div>
        </div>
      </Link>

      <div className={`interface ${expanded.fruits ? 'expanded' : ''}`} onClick={() => toggleExpand('fruits')}>
        Fruits
        {expanded.fruits && <div className="subscribed">Subscribed</div>}
      </div>

      <div className={`interface ${expanded.vegetables ? 'expanded' : ''}`} onClick={() => toggleExpand('vegetables')}>
        Vegetables
        {expanded.vegetables && <div className="subscribed">Subscribed</div>}
      </div>

      <div className={`interface ${expanded.everydayObject ? 'expanded' : ''}`} onClick={() => toggleExpand('everydayObject')}>
        Everyday Object
        {expanded.everydayObject && <div className="subscribed">Subscribed</div>}
      </div>
    </div>
  );
}

export default Interface;