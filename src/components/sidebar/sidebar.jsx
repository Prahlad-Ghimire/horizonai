import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async(prompt) =>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }


    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu d-block' src={assets.menu_icon} alt="" />
                <div onClick={()=>newChat()} className="newchat d-inline-flex align-items-center gap-3">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p className='mb-0'>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent d-flex flex-column">
                        <p className='recenttitle mb-0'>Recent</p>
                        {previousPrompt && previousPrompt.length > 0 ? (
                            previousPrompt.map((item, index) => (
                                <div key={index} onClick={()=>loadPrompt(item)} className='recententry d-flex align-items-start gap-2'>
                                    <img src={assets.message_icon} alt="" />
                                    <p className='mb-0'>{item.slice(0,18)}..</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-muted">No recent searches</p>
                        )}
                    </div>
                    : null}
            </div>
            <div className="bottom d-flex flex-column">
                <div className="bottomitems recententry d-flex align-items-start gap-2">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p className='mb-0'>Help</p> : null}
                </div>
                <div className="bottomitems recententry d-flex align-items-start gap-2">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p className='mb-0'>Activity</p> : null}
                </div>
                <div className="bottomitems recententry d-flex align-items-start gap-2">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p className='mb-0'>Setting</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
