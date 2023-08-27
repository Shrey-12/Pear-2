import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useSocket } from '../context/SocketProvider';
import './Video.css';

function Video() {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const handleUserJoin = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined the room`);
    setRemoteSocketId(id);
  }, []);

  const [myStream, setMyStream] = useState(null);
  const videoRef = useRef(null);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    setMyStream(stream);
  }, []);

  useEffect(() => {
    socket.on('user:join', handleUserJoin);
    return () => {
      socket.off('user:join', handleUserJoin);
    };
  }, [socket, handleUserJoin]);

  useEffect(() => {
    if (myStream) {
      videoRef.current.srcObject = myStream;
    }
  }, [myStream]);

  return (
    <div className='wrapper'>
      <h1>{remoteSocketId ? '' : 'No one in room'}</h1>
      {remoteSocketId && <button onClick={handleCallUser}>call</button>}
      <div className='video-container'>
        <video ref={videoRef} playsInline autoPlay muted className='rotated-video' />
      </div>
    </div>
  );
}

export default Video;
