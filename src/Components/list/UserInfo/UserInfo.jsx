import React from 'react'
import "../UserInfo/UserInfo.css"
import Avatar from "../../../Image/avatar.png"
import More from "../../../Image/more.png"
import Video from "../../../Image/video.png"
import Edit from "../../../Image/edit.png"


const UserInfo = () => {
  return (
    <div className='userinfo'>
      <div className='user'>
        <img src={Avatar} alt="avatar" />
        <h2 className='h2'>Chat-App</h2>
      </div>
      <div className='icons'>
        <img src={More} alt="" />
        <img src={Video} alt="" />
        <img src={Edit} alt="" />
      </div>

    </div>
  )
}


export default UserInfo
