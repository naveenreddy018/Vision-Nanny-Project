// import React, { useState } from "react";
// import Pictures from "../assets/assets";
// import "./image.css";
// import Toggle from "./toggle";

// function Image1() {
//   const [inde, setInd] = useState(0);
//   const [editbox, setEditBox] = useState(false);
//   const [bgColor, setBgColor] = useState("#000000");
//   const [animate, setAnimate] = useState(false);
//   const [toggle,settoggle] = useState(false)

//   const array = [
//     Pictures.dog,
//     Pictures.horse,
//     Pictures.horse1,
//     Pictures.forg,
//     Pictures.hippopotamus,
//     Pictures.rabbit,
//     Pictures.fish,
//     Pictures.elephant,
//     Pictures.cow,
//     Pictures.pig,
//   ];

//   const nextbtn = () => {
//     setInd((prev) => (prev < array.length - 1 ? prev + 1 : prev));
//   };

//   const prevbtn = () => {
//     setInd((prev) => (prev > 0 ? prev - 1 : prev));
//   };

//   const editbtn = () => {
//     setEditBox((prev) => !prev);
//   };

//   const closebtn = () => {
//     setEditBox(false);
//   };

//   const resetSettings = () => {
//     settoggle(false)
//   };

//   const handleImageClick = () => {
//     setAnimate(true);
//     setTimeout(() => setAnimate(false), 800); 
//   };
  
//   const togglebtn = (val)=>{
//     settoggle(val)
//   }

//   return (
//     <div style={{backgroundColor :  toggle ?  "white" : "black",height : "100vh",transition : "all 1s "}}>
//       <button className="hamburger" onClick={editbtn}>☰</button>

//       {editbox && (
//         <div className="editbox1" style={{transition : "all 2s"}}>
//           <div>
//             <button className="close" onClick={closebtn}>×</button>
//           </div>
//           <div className="colorpicker">
//             <label htmlFor="colorpicker">Pick a Background Color:</label>
//             <input
//               type="color"
//               value={bgColor}
//               onChange={(e) => setBgColor(e.target.value)}
//             />
//           </div>
//           <div className="settoggle">
//             <h1>Dark Mode </h1>
//           <Toggle  status={togglebtn}/>
//           </div>
//           <div>
//             <button className="resetbtn"  onClick={resetSettings}>Reset Settings</button>
//           </div>
          
//         </div>
//       )}

//       <div className="container">
//         <button className="btn" disabled={inde <= 0}  style={{ backgroundColor : toggle ? "white" : "black" ,color : toggle ? "black" : "red"}} onClick={prevbtn}>&lt;</button>
//         <button className="btn" disabled={inde >= array.length - 1} style={{ backgroundColor : toggle ? "white" : "black",color : toggle ? "black" : "red"}} onClick={nextbtn}>&gt;</button>
//       </div>

//       <div className="imagecontainer" >
//         <img
//           src={array[inde]}
//           width="300px"
//           alt="animal"
//           className={animate ? "cross-move" : ""}
//           onClick={handleImageClick}
//         />
//       </div>
//     </div>
//   );
// }

// export default Image1;

// import { useEffect, useRef, useState } from "react";
// import Pictures from "../assets/assets";
// import "./image1.css"

// const ImageColorChanger = () => {
//   const canvasRef = useRef(null);
//   const [color, setColor] = useState("#ff0000");
//   const [image, setImage] = useState(null);
//   const [editbox, setEditBox] = useState(false);
//   const [bgColor, setBgColor] = useState("#000000");
//   const [animate, setAnimate] = useState(false);
//   const [toggle,settoggle] = useState(false)
//   const [inde, setInd] = useState(0);

//   useEffect(() => {
//     const img = new Image();
//     img.src = Pictures.dog; // Ensure this path is correct
//     img.crossOrigin = "Anonymous";

//     img.onload = () => {
//       setImage(img); // Store image in state when loaded
//     };
//   }, []);

//     const nextbtn = () => {
//     setInd((prev) => (prev < ImageColorChanger.length - 1 ? prev + 1 : prev));
//   };

//   const prevbtn = () => {
//     setInd((prev) => (prev > 0 ? prev - 1 : prev));
//   };

//   const editbtn = () => {
//     setEditBox((prev) => !prev);
//   };

//   const closebtn = () => {
//     setEditBox(false);
//   };

//   const resetSettings = () => {
//     settoggle(false)
//   };

//   const handleImageClick = () => {
//     setAnimate(true);
//     setTimeout(() => setAnimate(false), 800); 
//   };
  
//   const togglebtn = (val)=>{
//     settoggle(val)
//   }


//   useEffect(() => {
//     if (!image) return; 
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     canvas.width = image.width;
//     canvas.height = image.height;
//     drawImage(ctx, image, color);
//   }, [color, image]);

//   const drawImage = (ctx, image, color) => {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     ctx.drawImage(image, 0, 0);

//     const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
//     const data = imageData.data;
//     const rgb = hexToRgb(color);

//     for (let i = 0; i < data.length; i += 4) {
//       if (data[i + 3] > 0) {
//         data[i] = (data[i] + rgb.r) / 2;
//         data[i + 1] = (data[i + 1] + rgb.g) / 2;
//         data[i + 2] = (data[i + 2] + rgb.b) / 2;
//       }
//     }
//     ctx.putImageData(imageData, 0, 0);
//   };

//   const hexToRgb = (hex) => {
//     hex = hex.replace(/^#/, "");
//     let bigint = parseInt(hex, 16);
//     return {
//       r: (bigint >> 16) & 255,
//       g: (bigint >> 8) & 255,
//       b: bigint & 255
//     };
//   };

//   return (
//     <div className="text-center font-sans">
//     <div className="edit">
//     <h2>Select a Color to Apply to the Image</h2>
//     <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="my-4" />
//     </div>
     
//     <div className="container">
// //         <button className="btn" disabled={inde <= 0}  style={{ backgroundColor : toggle ? "white" : "black" ,color : toggle ? "black" : "red"}} onClick={prevbtn}>&lt;</button>
// //         <button className="btn" disabled={inde >= ImageColorChanger.length - 1} style={{ backgroundColor : toggle ? "white" : "black",color : toggle ? "black" : "red"}} onClick={nextbtn}>&gt;</button>
// //       </div>

//       <canvas  ref={canvasRef} className="border-2 border-black mt-4 imagecontainer"></canvas>
//     </div>
//   );
// };

// export default ImageColorChanger;
import { useEffect, useRef, useState } from "react";
import Pictures from "../assets/assets";
import "./image.css";
import Toggle from "./toggle";

const ImageColorChanger = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("#ff0000"); // Default red tint
  const [image, setImage] = useState(null);
  const [editbox, setEditBox] = useState(false);
  const [bgColor, setBgColor] = useState("#000000");
  const [animate, setAnimate] = useState(false);
  const [toggle, settoggle] = useState(false);
  const [inde, setInd] = useState(0);
  const [shake,setshake] = useState(false)

  const imagesArray = [
    Pictures.dog,
    Pictures.horse,
    Pictures.rat,
    Pictures.forg,
    Pictures.hippopotamus,
    Pictures.rabbit,
    Pictures.fish,
    Pictures.elephant,
    Pictures.cow,
    Pictures.pig,
  ];

  useEffect(() => {
    const img = new Image();
    img.src = imagesArray[inde];
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      setImage(img);
    };
  }, [inde]);

  useEffect(() => {
    if (!image) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;
    drawImage(ctx, image, color);
  }, [color, image]);

  const drawImage = (ctx, image, color) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const rgb = hexToRgb(color);

    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] > 0) {
        data[i] = (data[i] + rgb.r) / 2;
        data[i + 1] = (data[i + 1] + rgb.g) / 2;
        data[i + 2] = (data[i + 2] + rgb.b) / 2;
      }
    }
    ctx.putImageData(imageData, 0, 0);
  };

  const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, "");
    let bigint = parseInt(hex, 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  const nextbtn = () => {
    setInd((prev) => (prev < imagesArray.length - 1 ? prev + 1 : prev));
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
    settoggle(false);
    setBgColor("#000000");
    setColor("#ff0000"); // Reset image color to full red
};


  const handleImageClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 900); 
  };

  const togglebtn = (val) => {
    settoggle(val);
  };

  const shakeimage = () => {
    setshake(true); 
    setTimeout(() => {
        setshake(false);
    }, 900);
};
  return (
    <div
      style={{
        backgroundColor: toggle ? "white" : "black",
        height: "100vh",
        transition: "all 1s",
      }}
    >
      <button className="hamburger" onClick={editbtn}>
        ☰
      </button>

      {editbox && (
        <div className="editbox1">
          <button className="close" onClick={closebtn}>
            ×
          </button>

          <div className="text-center font-sans">
            <h2>Select a Color to Apply to the Image</h2>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="my-4"
            />
          </div>

          <div className="settoggle">
            <h1>Dark Mode</h1>
            <Toggle status={togglebtn} />
          </div>

          <button className="resetbtn" onClick={resetSettings}>
            Reset Settings
          </button>
        </div>
      )}

      <div className="container">
        <button
          className="btn"
          disabled={inde <= 0}
          style={{
            backgroundColor: toggle ? "white" : "black",
            color: toggle ? "black" : "red",
          }}
          onClick={prevbtn}
        >
          &lt;
        </button>

        <button
          className="btn"
          disabled={inde >= imagesArray.length - 1}
          style={{
            backgroundColor: toggle ? "white" : "black",
            color: toggle ? "black" : "red",
          }}
          onClick={nextbtn}
        >
          &gt;
        </button>
      </div>

      <div onClick={shakeimage} className={`imagecontainer ${shake ? "imagem" : ""}`}>
        <canvas
          ref={canvasRef}
          className={`border-2 border-black mt-4 `}
          onClick={handleImageClick}
        ></canvas>
      </div>
    </div>
  );
};

export default ImageColorChanger;
