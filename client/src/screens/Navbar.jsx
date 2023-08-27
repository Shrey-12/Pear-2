import React from 'react';
import './Navbar.css';
import pear from '../assets/images/pear.png';
import person from '../assets/images/person.png';
import home from '../assets/images/home.gif';
import video from '../assets/images/video.gif';
import notification from '../assets/images/notification.gif';
import message from '../assets/images/chat.gif';
import home_ from '../assets/images/home.png';
import video_ from '../assets/images/video.png';
import notification_ from '../assets/images/notification.png';
import message_ from '../assets/images/chat.png';

const Navbar = () => {
  return (
    <>
      <div className='logo'>
        <img id='pear' src={pear} alt='pear' />
        <p>Pear<sup>2</sup></p>
      </div>
      <div className='out'>
        <div className='container'>
          <img id='home' src={home_} alt='home' />
          <img id='home-gif' src={home} alt='home gif' className='hovergif' />
        </div>
        <div className='container'>
          <img id='video' src={video_} alt='video' />
          <img id='video-gif' src={video} alt='video gif' className='hovergif' />
        </div>
        <div className='container'>
          <img id='notification' src={notification_} alt='notification'/>
          <img id='notification-gif' src={notification} alt='notification gif' className='hovergif' />
        </div>
        <div className='container'>
          <img id='message' src={message_} alt='message'  />
          <img id='message-gif' src={message} alt='message gif' className='hovergif' />
        </div>
        <div className='last'>
          <img id='person' src={person} alt='person' />
        </div>
      </div>
    </>
  );
};

export default Navbar;
