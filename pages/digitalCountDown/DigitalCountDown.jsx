
import React, { useContext } from 'react'
import TimerContext from '../../context/TimerContext'
import StopTimerBtn from '../../components/stopTimerBtn/StopTimerBtn';
import IntervalHeader from '../../components/intervalHeader/IntervalHeader';

function DigitalCountDown() {

  const { timeValues, restartTimer, stopTimer } = useContext(TimerContext); // Hämta timeValues från context

  return (
    <section className='digital-wrapper'
    style={{
      height : '100dvh',
      display : 'flex',
      flexDirection : 'column',
    }}>
      {/* <p
      style={{ 
        color : 'black',
        textAlign: 'center',
        marginTop : '1rem',
        marginBottom : 'auto',
      }}
      >Interval</p> */}
      < IntervalHeader />
      <div
        style={{
          color: 'black',
          fontFamily: 'PT sans',
          fontSize: 80,
          fontWeight: 'bold',
          margin : 'auto',
        }}>{timeValues}
      </div>

        {/* Gör en komponent av denna knapp */}
      {/* <button onClick={stopTimer}
        style={{
          padding: '1rem 3rem',
          backgroundColor: 'white',
          border: '3px solid black',
          color: 'black',
          fontFamily: 'PT sans',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop : 'auto'
        }}>
          Stop Timer
      </button> */}
      <StopTimerBtn />

    </section>
  )
}

export default DigitalCountDown