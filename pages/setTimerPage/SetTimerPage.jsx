import Navigation from '../../components/navigation/Navigation'
import './settimerpage.css'
import SetTimer from '../../components/setTimerFunc/setTimer'

import React from 'react'

function SetTimerPage() {
  return (
    <>
        <Navigation />
        <div className='timerPage'
        style={{
            height : "100vh",
            width : "100vw",
            backgroundColor : "white",
            color : 'black',
        }}
        ><SetTimer />
        </div>
    </>
  )
}

export default SetTimerPage