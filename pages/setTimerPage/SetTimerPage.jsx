import Navigation from '../../components/navigation/Navigation'
import './settimerpage.css'
import SetTimer from '../../components/setTimerFunc/setTimer'

import React from 'react'

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
        </section>
    
  )
}

export default SetTimerPage