import React from 'react'
import "../details/Detail.css"
import ArrowUp from "../../Image/arrowUp.png"
import Avatar from "../../Image/avatar.png"
import ArrowDown from "../../Image/arrowDown.png"
import Download from "../../Image/download.png"
import Laptop from "../../Image/laptop.jpg"

const Details = () => {
  return (
    <div className='detail'>
      <div className='user'>
        <img src={Avatar} alt="" />
        <h2>Jahngir</h2>
        <p>Lorem ipsum dolor sit.</p>
      </div>


      <div className='info'>
        <div className='option'>
          <div className='title'>
            <span>Chat Setting</span>
            <img src={ArrowUp} alt="" />
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Privacy & help</span>
            <img src={ArrowUp} alt="" />
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Shared Photos</span>
            <img src={ArrowDown} alt="" />
          </div>
          <div className='photos'>
            <div className="photoItem">

              <div className='photoDetail'>

                <img src={Laptop} width={100} alt="" />
                <span>photo_2023_2.png</span>

              </div>

              <img src={Download} className='icon' alt="" />
            </div>
            <div className="photoItem">

              <div className='photoDetail'>

                <img src={Laptop} width={100} alt="" />
                <span>photo_2023_2.png</span>

              </div>

              <img src={Download} className='icon' alt="" />
            </div>
            <div className="photoItem">

              <div className='photoDetail'>

                <img src={Laptop} width={100} alt="" />
                <span>photo_2023_2.png</span>

              </div>

              <img src={Download} className='icon' alt="" />
            </div>
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Shared Files</span>
            <img src={ArrowUp} alt="" />
          </div>
        </div>

        <button>Block User</button>

      </div>

    </div>
  )
}

export default Details
