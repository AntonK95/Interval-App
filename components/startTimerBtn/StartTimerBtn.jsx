

import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import TimerContext from '../../context/TimerContext'

function StartTimerBtn() {

    const { startTimer, isRunning } = useContext(TimerContext);

  return (
    <motion.button
      style={{
        padding : '1rem 3rem',
        backgroundColor : 'white',
        border : '3px solid black',
        color : 'black',
        fontFamily : 'PT sans',
        fontSize : 24,
        fontWeight : 'bold'
      }}
      onClick={startTimer} disabled={isRunning}>STARTA TIMER</motion.button>
  )
}

export default StartTimerBtn