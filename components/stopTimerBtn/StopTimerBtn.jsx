
import React, { useContext } from 'react'
import TimerContext from '../../context/TimerContext'
import { motion } from 'framer-motion';

function StopTimerBtn() {

    const { stopTimer } = useContext(TimerContext);

  return (
    <motion.button onClick={stopTimer}
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
        }}
        transition={{
          duration : .3,
        }}
        whileTap={{
          scale : .9,
          backgroundColor : 'black',
          color : 'white',
        }}>
          Stop Timer
      </motion.button>
  )
}

export default StopTimerBtn