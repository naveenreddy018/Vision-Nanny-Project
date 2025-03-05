// import React, { useState } from 'react';
// import "./strip.css";
// import Toggle from './toggle';

// function Strips() {
//   const [stiplen, setsriplen] = useState(false);
//   const [direc, setdirec] = useState("right");
//   const [strwidth, setstrwidth] = useState(30);
//   const [gapwid, setgapwid] = useState(50);
//   const [speed, setspeed] = useState(1);
// const [animate,setanimate] = useState(false)
//   const change = () => {
//     setsriplen(prev => !prev);
//   };

//   const setAnimate = (val)=>{
//     setanimate(val)
//   }
//   return (
//     <div className='main'>
//       <div 
//       className={ ` container ${direc === "right" ? "righ" : ""} `}
//         // className={`container ${stiplen ? "scroll" : ""}`} 
//         style={{
//           animation:animate
//             ? `scrollBg ${speed}s linear infinite ${direc === "left" ? "reverse" : ""}`
//             : "none",
//             display : "flex",gap : `${gapwid}px` 
//         }}
//       >
//         {direc === "right" ? (
//           [...Array(stiplen ? 23 : 20).keys()].map((item, index) => (
//             <div className='strips' style={{ backgroundColor : "red", width:"100vw",height : `${strwidth}px`,}} key={index}>
//               {item}
//             </div>
//           ))
//         ) : (
//           [...Array(stiplen ? 80 : 20).keys()].map((item, index) => (
//             <div className='strips' style={{ backgroundColor : "red", width: `${strwidth}px` }} key={index}>
//               {item}
//             </div>
//           ))
//         )}
//       </div>
//       {stiplen ? (
//         <div className='options'>
//           <h1 className='closebtn' onClick={change}>×</h1>
//           <div className='animate'><div>Animate strips </div>: <Toggle  status={setAnimate} /></div>
//           <div className='direction'>
//             <div>Direction:</div>
//             <form>
//               <label>
//                 Right
//                 <input type="radio" name="option" value="right" checked={direc === "right"} onChange={(e) => setdirec(e.target.value)} />
//               </label>
//               <label>
//                 Left
//                 <input type="radio" name="option" value="left" checked={direc === "left"} onChange={(e) => setdirec(e.target.value)} />
//               </label>
//             </form>
//           </div>
//           <div className='str1'>Stripe width {strwidth}</div>
//           <div className='str1child'><input type="range" value={strwidth} min="10" max="100" onChange={(e) => setstrwidth(Number(e.target.value))} /></div>
//           <div className='gap'>Gap width {gapwid}</div>
//           <div className='gapchild'><input type="range" value={gapwid} onChange={(e) => setgapwid(Number(e.target.value))} /></div>
//           <div className='speed'>Speed {speed}</div>
//           <div className='speedchild'><input type="range" value={speed} min="1" max="10" onChange={(e) => setspeed(Number(e.target.value))} /></div>
//           {/* <div className='reverse'>Reverse Direction <Toggle /></div> */}
//         </div>
//       ) : (
//         <button className='btn' onClick={change}>☰</button>
//       )}
//     </div>
//   );
// }

// export default Strips;