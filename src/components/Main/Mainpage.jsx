import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Mainpage.css'
import { Context } from '../../Context/Context'

const Mainpage = () => {


  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

  return (
    <div className="mainpage position-relative">
      <div className="navpage d-flex align-items-center justify-content-between">
        <p className='mb-0'>Horizon AI</p>
        <img src={assets.user_icon} alt="" className='rounded-circle' />
      </div>
      <div className="horizoncontainer">

        {!showResult
          ? <>
            <div className="respect">
              <p className='mb-0'><span className='fw-bold'>Hello, Developer</span></p>
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
          </>
          :<div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p className='mb-0'>{recentPrompt}</p>
            </div>
            <div className="result-data">
              {loading
              ?<div className='loader'>
                <hr />
                <hr />
                <hr />
              </div>
              :<p></p>
              }
              <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            </div>
          </div>
          }
        <div className="mainbottom">
          <div className="boxsearch">
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder='Enter a text here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className='bottominfo mb-0'>Horizon AI is an advanced conversational AI model, similar to ChatGPT, designed to assist users with a wide range of queries.</p>
        </div>
      </div>
    </div>
  )
}

export default Mainpage
