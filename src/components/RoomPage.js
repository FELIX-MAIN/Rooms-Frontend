import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function RoomPage({ miniatures: rooms, setMiniatures, sets, setSets }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const room = rooms.find(mini => mini.id===parseInt(id))
    const set = sets.find(s => s.id===parseInt(room?.room_set_id))

    const handleDelete = () => {
        fetch(`http://localhost:4566/rooms/${id}`, 
            { method: "DELETE" })
        .then(() => removeRoom(id))
        .then(() => navigate(`/sets/${room.room_set_id}`));
    }

    const removeRoom = id => {
        setMiniatures(rooms.filter(mini => mini.id !=id));
        const updatedSet = {...set, rooms: [...(set.rooms.filter(mini => mini.id !=id))]};
        setSets(sets.map(s => s.id===updatedSet.id ? updatedSet : s));
    }

  return (
    <div className="mini-container">
        <div className="mini-image">
             <img src={room?.img_url} alt=""/>
        </div>
        <h2>{ room?.name }</h2>
        <div className="mini-details">
            <p>Rarity: {room?.rarity}</p>
            <p>Size: {room?.size}</p>
            <p className="set-link">Set: 
                <Link to={`/sets/${room?.miniature_set_id}`}> {set?.name}</Link>
            </p>
            <p>Opening date: {set?.year}</p>
            <p>Number of units: {room?.units}</p>
            <Link to={`/rooms/${id}/edit`}>
                <button className="mini-btn">Edit Room</button>
            </Link>
            <button className="mini-btn" onClick={handleDelete}>Delete Room</button>
        </div>
    </div>
  )
}

export default RoomPage