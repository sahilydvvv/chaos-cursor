import React from 'react'
import { socket } from './socket.io.js'
import {useEffect} from 'react'
import Loading from './components/loading.jsx'
function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log(socket.id);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  }, []);

  return (
    <div>
      
      <Loading />

    </div>
  )
}

export default App