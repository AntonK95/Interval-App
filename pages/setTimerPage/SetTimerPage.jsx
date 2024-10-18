// import Navigation from '../../components/navigation/Navigation'
import './settimerpage.css'
import SetTimer from '../../components/setTimerFunc/setTimer'

import React from 'react'
import StartTimerBtn from '../../components/startTimerBtn/StartTimerBtn'

function SetTimerPage({ setTimeValues}) {
  return (
    
        <section className='setTimer-wrapper'
          // style={{
          //     backgroundColor : "white",
          //     color : 'black',
          //     display : 'flex',
          //     placeContent : 'center',
          // }}
          ><SetTimer setTimeValues={setTimeValues}/> {/* Skickar setTimeValues till SetTimer */}
          <StartTimerBtn />
        </section>
    
  )
}

export default SetTimerPage