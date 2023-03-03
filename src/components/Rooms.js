import React from "react";
import RoomCard from "./RoomCard";

function Rooms({ rooms }) {
    const roomCards = () => rooms.map((room, index) => <RoomCard key={index} room={room}/>)

    return (
        <div>
            <div className="mini-header">
                <h3 className="counter">You have {rooms.length} unique rooms.</h3>
            </div>
            <div className="card-grid">{roomCards()}</div>
        </div>
    )
}

export default Rooms;