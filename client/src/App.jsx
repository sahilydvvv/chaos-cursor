import React, { useEffect } from "react";
import { socket } from "./socket.io.js";
import Loading from "./components/loading.jsx";

function App() {
  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("connect_error", handleConnectError);
    };
  }, []);

  return (
    <div>
      <Loading />
    </div>
  );
}

export default App;