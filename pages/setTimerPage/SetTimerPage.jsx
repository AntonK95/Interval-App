import Navigation from '../../components/navigation/Navigation'
import './settimerpage.css'
import SetTimer from '../../components/setTimerFunc/setTimer'

import React from 'react'

function SetTimerPage() {
  return (
    
        <section className='setTimer-wrapper'
          // style={{
          //     backgroundColor : "white",
          //     color : 'black',
          //     display : 'flex',
          //     placeContent : 'center',
          // }}
          ><SetTimer />
        </section>
    
  )
}

export default SetTimerPage