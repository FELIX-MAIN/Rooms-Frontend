import React, { useState, useEffect }  from 'react';
import RoomCard from './RoomCard';

function Home() {
    const [ newMinis, setNewMinis ] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4567/rooms/new')
        .then(res => res.json())
        .then(data => setNewMinis(data))
      }, [])

    const roomCards = newMinis.map((room, index)  => <RoomCard key={ index } room={ room }/>)

    return (
        <div className="set-page">
            <div className="quote"><b>
                <p><i>"Stop using Excel spreadsheets. Room Tracker exists!"</i></p></b>
                <p>- Felo, creator of the Room Tracker</p></div>
            <h3>Latest rooms:</h3>
            <div className="card-grid">{ roomCards }</div>
        </div>
    )
}

export default Home;