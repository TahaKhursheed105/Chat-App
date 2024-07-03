import React from 'react'
import "./AddUser.css"
import Avatar from "../../../../Image/avatar.png"




const AddUser = () => {
  return (
    <div className='addUser'>
        <form>
                <input type="text " placeholder='Username' name='username'/>
                <button>Search</button>
        </form>
        <div className='user'>
            <div className='detail'>
                <img src={Avatar} alt="" />
                <span>jahngir</span>
            </div>
            <button>Add User</button>
        </div>
      
    </div>
  )
}

export default AddUser
