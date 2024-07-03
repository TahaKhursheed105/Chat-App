import React, { useEffect, useRef, useState } from 'react'
import "./Chat.css"
import EmojiPicker from "emoji-picker-react"
import Avatar from "../../Image/avatar.png"
import Phone from "../../Image/phone.png"
import Video from "../../Image/video.png"
import Info from "../../Image/info.png"
import Emoji from "../../Image/emoji.png"
import Images from "../../Image/img.png"
import Camera from "../../Image/camera.png"
import Mic from "../../Image/mic.png"
import ChatImg from "../../Image/Chat.png"
import ChatImag from "../../Image/chatImage.webp"





const Chat = () => {

    const [open,setOpen]=useState(false);
    const [text,setText]=useState("");

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior:"smooth"});
    }, []);

    const handleEmoji = e =>{
       setText(prev=>prev + e.emoji);
       setOpen(false)
    }




    return (
        <div className='chat'>
           <div className='top'>
                <div className='user'>
                    <img src={Avatar} alt="" />
                
                <div className='texts'>
                    <span>Jahngir</span>
                    <p>Last seen today at 10pm</p>
                </div>
                </div>
                <div className='icons'>
                    <img src={Phone} alt="" />
                    <img src={Video} alt="" />
                    <img src={Info} alt="" />

                </div>
           </div>
           <div className='center'>

            
            <div className='message own'>
               
                <div className='texts'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellat fugiat vero in nemo fuga doloribus sed quas vel veniam.</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className='message'>
              <img src={Avatar} alt="" />
                <div className='texts'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellat fugiat vero in nemo fuga doloribus sed quas vel veniam.</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className='message own'>
              
                <div className='texts'>
                    <p>Loxkznkas ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellat fugiat vero in nemo fuga doloribus sed quas vel veniam.</p>
                    <span>2 min ago</span>
                </div>
            </div>
            <div className='message'>
               <img src={Avatar} alt="" />
                <div className='texts'>
                    <img src={ChatImag} alt="" />
                    <p>Loaksj ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellat fugiat vero in nemo fuga doloribus sed quas vel veniam.</p>
                    <span>3 min ago</span>
                </div>
            </div>
            <div ref={endRef}></div>
           </div>
           <div className='bottom'>

                <div className='icons'>
                    <img src={Images} alt="" />
                    <img src={Camera} alt="" />
                    <img src={Mic} alt="" />
                </div>
                <input type="text" placeholder='Type a Message...' 
                value={text}
                onChange={e =>setText(e.target.value)} />

                <div className='emoji'>
                    <img src={Emoji} alt="" onClick={() => setOpen ((prev) => !prev)} />
                    <div className='picker'>

                    <EmojiPicker open={open} onEmojiClick={handleEmoji} />

                    </div>
                </div>
                <button className='sendButton'>Send</button>
           </div>
        </div>
    )
}

export default Chat
