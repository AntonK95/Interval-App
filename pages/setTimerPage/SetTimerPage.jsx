// import Navigation from '../../components/navigation/Navigation'
import './settimerpage.css'
import SetTimer from '../../components/setTimerFunc/setTimer'
import { motion } from 'framer-motion'

import React from 'react'
import StartTimerBtn from '../../components/startTimerBtn/StartTimerBtn'

function SetTimerPage({ setTimeValues}) {
  return (
    
        <motion.section className='setTimerPage-wrapper'
        style={{ 
          height : '100vh',
          display : 'flex',
          flexDirection : 'column',
        }}
        initial={{
          opacity : 0,
          x : '-100%'
        }}
        animate={{
          opacity : 1,
          x : 0,
        }}
        transition={{
          duration : .5
        }}
          ><SetTimer setTimeValues={setTimeValues}/> {/* Skickar setTimeValues till SetTimer */}
          <StartTimerBtn />
        </motion.section>
    
  )
}

export default SetTimerPage