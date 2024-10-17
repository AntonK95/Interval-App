
import React, { useContext } from 'react'
import TimerContext from '../../context/TimerContext'

function DigitalCountDown() {

  const { timeValues, restartTimer, stopTimer } = useContext(TimerContext); // Hämta timeValues från context

  return (
    <section className='digital-wrapper'>
      <div
        style={{
          color: 'black',
          fontFamily: 'PT sans',
          fontSize: 80,
          fontWeight: 'bold',
          display : 'flex',

        }}>{timeValues}
      </div>

        {/* Gör en komponent av denna knapp */}
      <button onClick={stopTimer}
        style={{
          padding: '1rem 3rem',
          backgroundColor: 'white',
          border: '3px solid black',
          color: 'black',
          fontFamily: 'PT sans',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop : 'auto'
        }}>Abort Timer
      </button>

    </section>
  )
}

export default DigitalCountDown