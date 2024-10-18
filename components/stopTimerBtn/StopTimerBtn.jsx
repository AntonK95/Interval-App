
import React, { useContext } from 'react'
import TimerContext from '../../context/TimerContext'


function StopTimerBtn() {

    const { stopTimer } = useContext(TimerContext);

  return (
    <button onClick={stopTimer}
        style={{
          padding: '1rem 3rem',
          backgroundColor: 'white',
          border: '3px solid #000000a1',
          color: '#000000a1',
          fontFamily: 'PT sans',
          fontSize: 16,
          fontWeight: 'bold',
          marginTop : 'auto',
          marginBottom : '3rem',
        }}>
          Stop Timer
      </button>
  )
}

export default StopTimerBtn