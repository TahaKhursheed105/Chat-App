import React, { useState } from 'react'
import "../ChatList/ChatList.css"
import Search from "../../../Image/search.png"
import Plus from "../../../Image/plus.png"
import Minus from "../../../Image/minus.png"
import Avatar from "../../../Image/avatar.png"
import AddUser from './AddUser/AddUser'


const ChatList = () => {

    const [addMode , setAddMode] = useState(false)

  return (
    <div className='chatlist'>
      <div className='search'>
        <div className='searchBar'>
            <img src={Search} alt="" />
            <input type="text" placeholder='Search'/>
        </div>

            <img src={ addMode ? Minus : Plus } alt="" className='add' onClick={() => setAddMode (prev => !prev)}/>

      </div>
      <div className='item'>
        <img src={Avatar} alt="" />
        <div className='texts'>
            <span>Jahngir</span>
            <p>Hello</p>
        </div>

      </div>
      <div className='item'>
        <img src={Avatar} alt="" />
        <div className='texts'>
            <span>Hannan</span>
            <p>Hello</p>
        </div>
      </div>

      <div className='item'>
        <img src={Avatar} alt="" />
        <div className='texts'>
            <span>Umar</span>
            <p>Hello</p>
        </div>
      </div>

      <div className='item'>
        <img src={Avatar} alt="" />
        <div className='texts'>
            <span>Usaid</span>
            <p>Hello</p>
        </div>
      </div>

      <div className='item'>
        <img src={Avatar} alt="" />
        <div className='texts'>
            <span>Maaz Abid</span>
            <p>Hello</p>
        </div>
      </div>

      <div className='item'>
        <img src={Avatar} alt="" />
        <div className='texts'>
            <span>Ashraf Baloch</span>
            <p>Hello</p>
        </div>
      </div>
     {addMode && <AddUser  />}
    </div>
  )
}

export default ChatList
