// import Navigation from '../../components/navigation/Navigation'
import './settimerpage.css'
import SetTimer from '../../components/setTimerFunc/SetTimer'
import { motion } from 'framer-motion'

import React, { useContext, useEffect } from 'react'
import StartTimerBtn from '../../components/startTimerBtn/StartTimerBtn'
import TimerContext from '../../context/TimerContext'

function SetTimerPage({ setTimeValues }) {

  const { isInterval, setIsInterval } = useContext(TimerContext);

  const handleCheckboxChange = (event) => {
    setIsInterval(event.target.checked); // Uppdatera state om checkboxen är checkad eller inte.
    console.log('Interval:', isInterval);
  }

   // useEffect för att logga när isInterval ändras
   useEffect(() => {
    console.log('isInterval changed:', isInterval);
  }, [isInterval]);

  return (

    <motion.section className='setTimerPage-wrapper'
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
      initial={{
        opacity: 0,
        x: '-100%'
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: .5
      }}
    ><SetTimer setTimeValues={setTimeValues} /> {/* Skickar setTimeValues till SetTimer */} 
      <label className="container">
        <input 
        type="checkbox" 
        checked={isInterval} // State för att styra om checked eller inte
        onChange={handleCheckboxChange} // Uppdatera när onChange ändras
        />
        <div className="checkmark"></div>
        <p style={{
          color : 'black',
          fontFamily : 'PT sans',
          fontWeight : 20,
        }}>Interval</p>
        {/* <input 
        type="checkbox" 
        // checked={isInterval} // State för att styra om checked eller inte
        // onChange={handleCheckboxChange} // Uppdatera när onChange ändras
        />
        <div className="checkmark"></div> */}
      </label>
      <StartTimerBtn />
    </motion.section>

  )
}

export default SetTimerPage