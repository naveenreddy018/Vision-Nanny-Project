import React, { useState } from "react";
import Pictures from "../assets/assets";
import "./image.css";

function Image1() {
  const [inde, setInd] = useState(0);
  const [editbox, setEditBox] = useState(false);
  const [bgColor, setBgColor] = useState("#000000");
  const [animate, setAnimate] = useState(false);

  const array = [
    Pictures.dog,
    Pictures.horse,
    Pictures.horse1,
    Pictures.forg,
    Pictures.hippopotamus,
    Pictures.rabbit,
    Pictures.fish,
    Pictures.elephant,
    Pictures.cow,
    Pictures.pig,
  ];

  const nextbtn = () => {
    setInd((prev) => (prev < array.length - 1 ? prev + 1 : prev));
  };

  const prevbtn = () => {
    setInd((prev) => (prev > 0 ? prev - 1 : prev));
  };

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
      <button className="hamburger" onClick={editbtn}>☰</button>

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
            <button className="resetbtn" onClick={resetSettings}>Reset Settings</button>
          </div>
        </div>
      )}

      <div className="container">
        <button className="btn" disabled={inde <= 0} onClick={prevbtn}>&lt;</button>
        <button className="btn" disabled={inde >= array.length - 1} onClick={nextbtn}>&gt;</button>
      </div>

      <div className="imagecontainer" style={{ backgroundColor: bgColor }}>
        <img
          src={array[inde]}
          width="300px"
          alt="animal"
          className={animate ? "cross-move" : ""}
          onClick={handleImageClick}
        />
      </div>
    </>
  );
}

export default Image1;