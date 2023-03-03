import React from 'react'
import { Link } from 'react-router-dom';

function RoomCard({ room }) {
  return (
     <Link to={`/rooms/${room.id}`}>
        <div className="card">
            <div className="card-image">
                <img src={room.img_url} alt="Image not found."/>
            </div>
            <div className="card-name">{room.name}</div>
        </div>
    </Link>
  )
}

export default RoomCard