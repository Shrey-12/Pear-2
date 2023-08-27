import React from 'react'
import './Room.css'
import Video from './Video'
import Navbar from './Navbar'

function RoomPage() {
    
  return (
    <div className="container-room-page">
        <div className="column-1">
            <Navbar />
        </div>
        <div className="column-2">
            <Video />
            
        </div>
        <div className="column-3">
            {/* <Chat /> */}
        </div>
    </div>

  )
}

export default RoomPage