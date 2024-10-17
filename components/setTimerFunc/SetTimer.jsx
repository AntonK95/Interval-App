import React, { useContext, useState, useEffect } from 'react';
// import Timer from 'easytimer.js'; // Importerar EasyTimer
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TimerContext from '../../context/TimerContext';

function SetTimer() { 

  const { timer, timeValues, setTimeValues } = useContext(TimerContext); // hämta timer och setTimevalues från context
  const [ selectedMinutes, setSelectedMinutes ] = useState(0);

  // const [selectedMinutes, setSelectedMinutes] = useState(0); // Håller koll på de valda minuterna, startvärde är nu noll
  // const [timeValues, setLocalTimeValues] = useState('00:00'); // Lokal state för att hålla reda på tiden
  // const [timer] = useState(new Timer()); // Skapar en ny instans av EasyTimer
  const [isRunning, setIsRunning] = useState(false); // Håller reda på om timern körs eller ej
  
  const navigate = useNavigate();
  // useEffect för att uppdatera tiden när nedräkningen sker
  useEffect(() => {
    // Lyssnar på 'secondsUpdated' event och uppdaterar tiden
    // timer.addEventListener('secondsUpdated', () => {
    //   setTimeValues(timer.getTimeValues().toString(['minutes', 'seconds']));
    // });

    // Lyssnar på 'secondsUpdated' event och uppdaterar tiden
    timer.addEventListener('secondsUpdated', () => {
      const currentTime = timer.getTimeValues().toString(['minutes', 'seconds']);
      // setLocalTimeValues(currentTime); // uppdatera lokal tid
      setTimeValues(currentTime) // uppdatera global tid via props
    });

    // När timern är slut
    timer.addEventListener('targetAchieved', () => {
      setIsRunning(false);
      alert('Time is up!'); // Här kopplar jag upp min timesUpPage
    });

    // Rensar eventlyssnare när komponenten stängs
    return () => {
      timer.stop();
      timer.removeEventListener('secondsUpdated');
      timer.removeEventListener('targetAchieved');
    };
  }, [timer, setTimeValues]);

  // Starta nedräkningen baserat på de valda minuterna
  const startTimer = () => {
    timer.start({ countdown: true, startValues: { minutes: selectedMinutes } });
    setIsRunning(true);
    navigate('/DigitalCountDown'); // Navigera till nedräkningssida
  };

  // Återställ timern
  const resetTimer = () => {
    timer.reset();
    setTimeValues('00:00');
    setIsRunning(false);
  };

  // Karusell för att välja minuter
  const handleMinuteChange = (change) => {
    const newMinutes = selectedMinutes + change;
    if (newMinutes >= 1 && newMinutes <= 60) { // Begränsar mellan 1 och 60 minuter
      setSelectedMinutes(newMinutes);
    }
  };

  return (
    <div className='setTimer-wrapper' 
      style={{ 
        textAlign: 'center', 
        color : 'black',
        display : 'flex',
        flexDirection : 'column',
        fontFamily: 'PT sans sans-serif'
        }}>

      {/* Karusell för att välja minuter */}
      <div className="carousel" 
        style={{ 
          color : 'black',
          display : 'flex',
          placeContent : 'center',
        }}>
        <button
        style={{ 
          backgroundColor : 'white',
          border : 'none',
        }} 
        onClick={() => handleMinuteChange(-1)} disabled={selectedMinutes === 1}>
          <img src="/img/Vector.svg" alt="Decrease minutes" />
        </button>
        <div className='carousel-minutes'
        style={{ 
          color : 'black',
          display : 'flex',
          flexDirection : 'column',
          fontFamily : 'PT sans',
        }}>
          <span 
          style={{ 
            fontSize : 80, 
            fontWeight : 'bold',
            marginLeft : '2rem',
            marginRight : '2rem',
            marginBottom : -25,
            minWidth : '5rem',
            display : 'flex',
            justifyContent : 'center',
            maxWidth : '5rem'
            }}>
          {selectedMinutes}</span>
          <p>minutes</p>
        </div>
        <button 
        style={{
          backgroundColor : 'white',
          border : 'none',
          rotate : '180deg'
        }}
        onClick={() => handleMinuteChange(1)} disabled={selectedMinutes === 60}>
          <img src="/img/Vector.svg" alt="Increase minutes" />
        </button>
      </div>

      {/* Visar tiden */}
      <div 
      style={{ 
        color : 'black', 
        fontSize: '48px', 
        margin: '20px',
        fontFamily : 'PT sans',
      }}>
      {timeValues}</div>

      {/* Starta och återställ knappar */}
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
      // whileTap={{
      //   backgroundColor : 'black',
      //   color : 'white',
      //   scale : 0.8,
      //   }}
      //   transition={{
      //     duration : .8,
      //     ease : "linear"
      // }}
      onClick={startTimer} disabled={isRunning}>STARTA TIMER</motion.button>
      {/* <button onClick={resetTimer} style={{ backgroundColor: '#f44336' }}>Återställ</button> */}
    </div>
  );
}

export default SetTimer;
