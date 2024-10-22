

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
        borderRadius : 5,
        color : 'black',
        fontFamily : 'PT sans',
        fontSize : 24,
        fontWeight : 'bold',
        marginBottom : '2rem',
        marginTop : 'auto',
      }}
      transition={{
        duration : .3,
      }}
      whileTap={{
        scale : .9,
        backgroundColor : 'black',
        color : 'white',
      }}
      onClick={startTimer} disabled={isRunning}>STARTA TIMER</motion.button>
  )
}

export default StartTimerBtn