import React, { useState } from 'react'
import "./image.css"
import Pictures from '../assets/assets'

function  Birds() {
    const [inde,setind] = useState(0)
  const [editbox, setEditBox] = useState(false);
      const [bgColor, setBgColor] = useState("#0000000");
const [animate, setAnimate] = useState(false);

    const fruit = [Pictures.bird,Pictures.hen,Pictures.butterfly,Pictures.duck,Pictures.snail]
    console.log(fruit)
      

  const nextbtn = ()=>{
    setind(prev => prev +1)
   }
   const prevbtn = ()=>{
     setind(prev => prev-1)
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
      <button className='btn'  disabled={inde<=0} onClick={prevbtn}>&lt;</button>

    

      <button  className='btn' disabled={inde>=fruit.length-1} onClick={nextbtn}>&gt;</button>
    
    </div>
      <div className='imagecontainer' style={{backgroundColor : bgColor}}>
      <img src={fruit[inde]} width="300px" alt=""  className={animate ? "cross-move" : ""}   onClick={handleImageClick} />
    </div>
</>
  )
}

export default Birds
