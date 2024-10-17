
import React, { useContext } from 'react'
import TimerContext from '../../context/TimerContext'

function DigitalCountDown() {

  const { timeValues } = useContext(TimerContext); // Hämta timeValues från context
  return (
    <section className='digital-wrapper'>
        <div 
        style={{ 
          color : 'black' 
        }}>{timeValues}</div>
    </section>
  )
}

export default DigitalCountDown