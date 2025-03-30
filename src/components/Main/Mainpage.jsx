import React from 'react'
import { assets } from '../../assets/assets'
import './Mainpage.css'

const Mainpage = () => {
  return (
      <div className="mainpage position-relative">
        <div className="navpage d-flex align-items-center justify-content-between">
            <p className='mb-0'>Horizon AI</p>
            <img src={assets.user_icon} alt="" className='rounded-circle' />
        </div>
        <div className="horizoncontainer">
          <div className="respect">
            <p className='mb-0'><span className='fw-bold'>Hello, Prahlad</span></p>
            <p className='text-uppercase'>How can I help today ?</p>
          </div>
          <div className="horizoncards">
            <div className="horizoncard">
              <p className='text-capitalize mb-0'>Suggest beautiful places to see on an upcoming road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="horizoncard">
              <p className='text-capitalize mb-0'>Briefly Summarize this concept Project Mangament</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="horizoncard">
              <p className='text-capitalize mb-0'>Strong team bond for our work</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="horizoncard">
              <p className='text-capitalize mb-0'>Improve the readability of the following code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
          <div className="mainbottom">
            <div className="boxsearch">
              <input type="text" value="" placeholder='Enter a text here' />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className='bottominfo mb-0'>Horizon AI is an advanced conversational AI model, similar to ChatGPT, designed to assist users with a wide range of queries.</p>
          </div>
        </div>
      </div>
  )
}

export default Mainpage
