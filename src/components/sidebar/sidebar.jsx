import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)


    return (
        <div className='sidebar d-flex flex-column justify-content-between'>
            <div className="top">
                <img onClick={()=>setExtended(prev =>!prev)} className='menu d-block' src={assets.menu_icon} alt="" />
                <div className="newchat d-inline-flex align-items-center gap-3">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p className='mb-0'>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent d-flex flex-column">
                        <p className='recenttitle mb-0'>Recent</p>
                        <div className='recententry d-flex align-items-start gap-2'>
                            <img src={assets.message_icon} alt="" />
                            <p className='mb-0'>What is react</p>
                        </div>
                    </div>
                    : null}
            </div>
            <div className="bottom d-flex flex-column">
                <div className="bottomitems recententry d-flex align-items-start gap-2">
                    <img src={assets.question_icon} alt="" />
                    {extended?<p className='mb-0'>Help</p>:null}
                </div>
                <div className="bottomitems recententry d-flex align-items-start gap-2">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p className='mb-0'>Activity</p>:null}
                </div>
                <div className="bottomitems recententry d-flex align-items-start gap-2">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p className='mb-0'>Setting</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
