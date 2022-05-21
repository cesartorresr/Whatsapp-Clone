import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon, Mic} from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import db from '../firebase';
import './hojas-de-estilo/Chat.css'

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState('')
  const {roomId} = useParams('');
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([])


useEffect(() => {
  if(roomId) {
    db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
      setRoomName(snapshot.data().name)
    });

    db.collection('rooms')
    .doc(roomId)
    .collection("messages")
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot) => 
      setMessages(snapshot.docs.map((doc) =>
      doc.data()))
    )
  }
}, [roomId]);

useEffect(() => {
  setSeed(Math.floor(Math.random() * 5000));
}, [roomId]);

const sendMessage = (e) => {
  e.preventDefault()
  console.log('you typed>>>', input);



  setInput('');
}

  return (
    <div className='chat'>

      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/bottts/:${seed}.svg`}/>

        <div className='chat__headerInfo'>
          <h3> falcao{roomName}</h3>
          <p>Last seen at...</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>

        </div>
      </div>

      <div className='chat__body'>
        {messages.map(message => (
           <p className='chat__message
           chat__receiver'>
             <span className='chat__name'> 
             {message.name} CAPO</span>
             {message.message} HEYYYY
             <span className='chat__timestamp'> 05:45am
              {new Date (message.timestamp?.toDate()). toUTCString()}
             </span>
             
             </p>
        ))}
     
      </div>

      <div className='chat__footer'>
        <InsertEmoticon/>
        <form>
          <input value={input}
          onChange={e => setInput(e.target.value)} 
          placeholder="type a message"
          type='text'/>
          <button onClick={sendMessage}
          type='submit'> Send a Message</button>
        </form>
        <Mic/>
      </div>

    </div>
  )
}

export default Chat