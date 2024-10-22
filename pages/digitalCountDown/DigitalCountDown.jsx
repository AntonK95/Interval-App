
import React, { useContext } from 'react'
import TimerContext from '../../context/TimerContext'
import StopTimerBtn from '../../components/stopTimerBtn/StopTimerBtn';
import IntervalHeader from '../../components/intervalHeader/IntervalHeader';
import { motion } from 'framer-motion';

function DigitalCountDown() {

  const { timeValues, restartTimer, stopTimer } = useContext(TimerContext); // Hämta timeValues från context

  return (
    <motion.section className='digital-wrapper'
    style={{
      height : '100dvh',
      width : '100vw',
      alignItems : 'center',
      display : 'flex',
      flexDirection : 'column',
    }}
    initial={{
      opacity : 0,
      x : '-100%',
    }}
    animate={{
      opacity : 1,
      x : 0,
    }}
    transition={{
      duration : .3,
    }}
    >
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
      <StopTimerBtn />

    </motion.section>
  )
}

export default DigitalCountDown