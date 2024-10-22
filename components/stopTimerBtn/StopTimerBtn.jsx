
import React, { useContext } from 'react'
import TimerContext from '../../context/TimerContext'
import { motion } from 'framer-motion';

function StopTimerBtn() {

    const { stopTimer } = useContext(TimerContext);

  return (
    <motion.button onClick={stopTimer}
        style={{
          padding: '1rem 1rem',
          backgroundColor: 'transparent',
          border: '1px solid #000000a1',
          color: '#000000a1',
          fontFamily: 'PT sans',
          fontSize: 16,
          fontWeight: 'bold',
          marginTop : 'auto',
          marginBottom : '3rem',
          borderRadius : 5,
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