import { Avatar } from '@mui/material';
import db from '../firebase';
import React, { useEffect, useState } from 'react';
import '../Componentes/hojas-de-estilo/SidebarChat.css'
import { Link } from 'react-router-dom';

function SidebarChat({id, name, addNewChat}) {
const [seed, setSeed] = useState('')

useEffect(() => {
  setSeed(Math.floor(Math.random() * 5000));
}, []); // esta funcion hace que los avatars vayan cambiando en cada perfil del chat. Que no sea el mismo avatar. Cada vez que se refresca sale un nuevo avatar.

const createChat = () => {
  const roomName = prompt("Please enter name for chat");

  if(roomName) {
    // do some clever database stuff..
    db.collection('rooms').add({
      name: roomName,
    })
  }
};

  return !addNewChat? (
    <Link to={`/rooms/${id}`}>
    <div className='sidebarChat'>
      <Avatar src={`https://avatars.dicebear.com/api/bottts/:${seed}.svg`}/>
      <div className='sidebarChat__info'>
        <h2>{name}</h2>
        <p>Last message...</p>
      </div>
    </div>
    </Link>
  ): (
    <div onClick={createChat}
    className="sidebarChat">
      <h2> Add new chat</h2>
    </div>
  );
}

export default SidebarChat