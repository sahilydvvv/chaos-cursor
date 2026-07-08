import { useEffect } from 'react';
import React from 'react'
import { socket } from '../socket.io.js';
function Canvas() {

    useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      const box = document.querySelector(".cursor");
      box.style.left = `${clientX}px`;
      box.style.top = `${clientY}px`;
      console.log("Sending:", clientX, clientY);

      socket.emit("mousemove", {
        x: clientX,
        y: clientY,
      });
    };

    const handleConnect = () => {
      console.log("Connected:", socket.id);
    };

    const handleDisconnect = () => {
      console.log("Disconnected");
    };

    const handleConnectError = (err) => {
      console.error("Connect Error:", err);
    };

    window.addEventListener("mousemove", handleMouseMove);
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("connect_error", handleConnectError);
    socket.on("mousemoveall", (data) => {
      const box = document.querySelector(".cursor-socket");
      box.style.left = `${data.x}px`;
      box.style.top = `${data.y}px`;
      
      console.log("Received:", data.x, data.y);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("connect_error", handleConnectError);
        socket.off("mousemoveall");
    };
  }, []);
  return (
    <div className="canvas">
      <div className="cursor"> 
        <h3>first</h3>
      </div>
      <div className="cursor-socket"> 
        <h3>second</h3>  
      </div>
    </div>
  )
}

export default Canvas