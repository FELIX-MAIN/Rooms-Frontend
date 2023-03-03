import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import RoomCard from './RoomCard';

function SetPage({ sets, setSets, rooms, setRooms }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const set = sets.find(set => set.id===parseInt(id))
    // const [ set, setSet ] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:9292/miniature_sets/${id}`)
    //     .then(res => res.json())
    //     .then(data => setSet(data))
    // }, [])
    
    const roomCards = set?.rooms?.map((room, index)  => <RoomCard key={ index } room={ room }/>)

    const handleDelete = () => {
        fetch(`http://localhost:4567/room_sets/${id}`, 
            { method: "DELETE" })
        .then(() => removeSet(id))
        .then(() => navigate("/sets"));
    }

    const removeSet = id => {
        setSets(sets.filter(s => s.id !=id))
        setRooms(rooms.filter(mini => mini.room_set_id !=id))
    }

  return (
    <div className="set-page">
        <h2>{ set?.name }</h2>
        <h3>Open Date: { set?.year }</h3>
        <Link to={`/sets/${id}/rooms/new`}>
            <button className="form-link" >Add Room</button>
        </Link>
        <Link to={`/sets/${id}/edit`}>
            <button className="form-link" >Edit Set</button>
        </Link>
        <button className="form-link" onClick={handleDelete}>Delete Set</button><br /><br />
        <div className="card-grid">{roomCards}</div>
    </div>
  )
}

export default SetPage;