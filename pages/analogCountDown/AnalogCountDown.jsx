
import React, { useContext } from 'react'
import IntervalHeader from '../../components/intervalHeader/IntervalHeader'
import StopTimerBtn from '../../components/stopTimerBtn/StopTimerBtn'
import TimerContext from '../../context/TimerContext'

function AnalogCountDown() {

  const { timeValues } = useContext(TimerContext);

  return (
    <section className='analog-wrapper'
    style={{
      height : '100dvh',
      display : 'flex',
      flexDirection : 'column',
      alignItems : 'center',
      justifyContent : 'space-evenly'
    }}
    >
      <IntervalHeader />
        <div style={{ color : 'black' }}>{timeValues}</div>
        <StopTimerBtn />
    </section>
  )
}

export default AnalogCountDown