import React,{ useCallback, useState,useEffect } from 'react'
import './Lobby.css';
import { useNavigate } from 'react-router-dom';
import {useSocket} from '../context/SocketProvider'


const Lobby=()=> {
  const [email, setemail] = useState('')
  const [room, setroom] = useState('')

  const socket = useSocket()

  const navigate = useNavigate()

  const handleSubmitForm = useCallback((e) => {
    e.preventDefault()
    socket.emit("room:join",{ email,room })
   
  },[email,room,socket])

  const handleJoinRoom = useCallback((data) =>{
    const { email, room } = data
    navigate(`/room/${room}`)
  },[navigate])

  useEffect(() =>{
    socket.on('room:join',handleJoinRoom)
      return () =>{
        socket.off('room:join',handleJoinRoom)
      }
  },[socket,handleJoinRoom]
  )

  return (
    <div className='outer-wrapper'>
    <div className="login-page">
  <div className="form">
    <form className="login-form" onSubmit={handleSubmitForm}>
      <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email ID"/>
      <input type="text" value={room} onChange={(e)=>setroom(e.target.value)} placeholder="Room ID"/>
      <button>Join</button>
      <p className="message">Not registered? <a href="/">Create an account</a></p>
    </form>
  </div>
</div>
    </div>

  )
}
 
export default Lobby