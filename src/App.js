import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Sets from './components/Sets';
import SetPage from './components/SetPage';
import NewSet from './components/NewSet';
import EditSet from './components/EditSet';
import Rooms from './components/Rooms';
import RoomPage from './components/RoomPage';
import NewRoom from './components/NewRoom';
import EditRoom from './components/EditRoom';

function App() {
  const [ sets, setSets ] = useState([]);
  const [ rooms, setRooms ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4566/room_sets')
        .then(res => res.json())
        .then(data => setSets(data))
      }, [])

    useEffect(() => {
        fetch('http://localhost:4566/rooms')
        .then(res => res.json())
        .then(data => setRooms(data))
      }, [])

    return (
    <div className = "App">
      <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/sets" element={<Sets sets={ sets }/>}/>
          <Route exact path="/sets/:id" element={<SetPage sets={ sets } setSets={ setSets } miniatures={ rooms } setMiniatures={ setRooms } />}/>
          <Route exact path="/newset" element={<NewSet sets={ sets } setSets={ setSets } />}/>
          <Route exact path="/sets/:id/edit" element={<EditSet sets={ sets } setSets={ setSets } />}/>
          <Route exact path="/rooms" element={<Rooms rooms={ rooms }/>}/>
          <Route exact path="/rooms/:id" element={<RoomPage rooms={ rooms } setRooms={ setRooms } sets={ sets } setSets={ setSets }/>}/>
          <Route exact path="/sets/:roomSetId/rooms/new" element={<NewRoom rooms={ rooms } setRooms={ setRooms } sets={ sets } setSets={ setSets } />}/>
          <Route exact path="/rooms/:id/edit" element={<EditRoom rooms={ rooms } setRooms={ setRooms } sets={ sets } setSets={ setSets } />}/>
        </Routes>
    </div>

)
}

export default App;
