import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
    const [extended, setextended] = useState(false)
    return (
        <div>
            <div className='sidebar d-inline-flex flex-column justify-content-between'>
                <div className='top'>
                    <img onClick={()=>setextended(prev => !prev)} src={assets.menu_icon} alt="" className='menu d-block ' />
                    <div className='newchat d-inline-flex gap-2 align-items-center rounded-pill'>
                        <img src={assets.plus_icon} alt="" />
                        {extended ? <p className='text-capitalize fw-bold m-0'>new chat</p> : null}
                    </div>
                    {extended ?
                        <div className='recent d-flex flex-column'>
                            <p className='title mb-0'>Recent</p>
                            <div className='recententry d-flex align-items-center gap-2 rounded-pill'>
                                <img src={assets.message_icon} alt="" />
                                <p className='text-capitalize fw-bold mb-0'>what is react</p>
                            </div>
                        </div> : null}
                </div>
                <div className='bottom d-flex flex-column'>
                    <div className='bottomitems recententry d-flex align-items-center gap-2 rounded-pill'>
                        <img src={assets.question_icon} alt="" />
                        {extended?<p className='text-capitalize mb-0'>Help</p>:null}
                    </div>
                    <div className='bottomitems recententry d-flex align-items-center gap-2 rounded-pill'>
                        <img src={assets.history_icon} alt="" />
                        {extended? <p className='text-capitalize mb-0'>activity</p>:null}
                    </div>
                    <div className='bottomitems recententry d-flex align-items-center gap-2 rounded-pill'>
                        <img src={assets.setting_icon} alt="" />
                        {extended? <p className='text-capitalize mb-0'>Setting</p> :null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
