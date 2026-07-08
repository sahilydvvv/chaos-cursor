import React, { useEffect } from "react";
import { socket } from "./socket.io.js";
import Loading from "./components/loading.jsx";
import Canvas from "./components/canvas.jsx";
import "./index.css";
function App() {
  

  return (
    <div>
      {/* <Loading /> */}
      <Canvas />
    </div>
  );
}

export default App;