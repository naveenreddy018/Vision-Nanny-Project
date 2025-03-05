import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Interface from "./components/interface/interface";
import Birds from "./components/fruit";
import Shapes from "./components/shapes";
import Image1 from "./components/image";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Interface />} />
        <Route path="/animals" element={<Image1 />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/shapes" element={<Shapes />} />
      </Routes>
    </Router>
  );
}

export default App;

