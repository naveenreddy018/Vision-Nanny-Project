import React, { useState } from 'react'
import Pictures from '../assets/assets'
import "./image.css"

function Shapes() {

    const [index,setindex] = useState(0)
      const [editbox, setEditBox] = useState(false);
      const [bgColor, setBgColor] = useState("#0000000");
        const [animate, setAnimate] = useState(false);


    const array = [Pictures.rectangle,Pictures.circle,Pictures.sqaure,Pictures.star,Pictures.moon]


    
  const nextbtn = ()=>{
    setindex(prev => prev +1)
   }
   const prevbtn = ()=>{
     setindex(prev => prev-1)
   }
   const editbtn = () => {
    setEditBox((prev) => !prev);
  };

  const closebtn = () => {
    setEditBox(false);
  };

  const resetSettings = () => {
    setBgColor("#000000");
  };
  
  const handleImageClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 800); 
  };

  return (
    <>
     <button className="hamburger" onClick={editbtn}>
        ☰
      </button>

      
      {editbox && (
        <div className="editbox1">
          <div>
            <button className="close" onClick={closebtn}>×</button>
          </div>

          <div className="colorpicker">
            <label htmlFor="colorpicker">Pick a Background Color:</label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>

      
          <div>
            <button className="resetbtn"  onClick={resetSettings}>Reset Settings</button>
          </div>
        </div>
      )}

    <div className='container'>
          <button className='btn'  disabled={index<=0} onClick={prevbtn}>&lt;</button>
    
        
    
          <button  className='btn' disabled={index>=array.length-1} onClick={nextbtn}>&gt;</button>
        
        </div>
          <div className='imagecontainer' style={{ backgroundColor: bgColor }}>
          <img src={array[index]} width="300px" alt=""  className={animate ? "cross-move" : ""}
          onClick={handleImageClick} />
        </div>
    </>
  )
}

export default Shapes
