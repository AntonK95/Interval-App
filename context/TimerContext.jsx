
import React from 'react'
import { createContext, useState, useEffect, useRef} from 'react'
import Timer from 'easytimer.js'
import { useNavigate } from 'react-router-dom';
// import TimesUp from '../components/timeIsUp/TimesUp';

const TimerContext = createContext();


export const TimerProvider = ({ children }) => {

  const [timer] = useState(() => new Timer()); // Använd funktion för att skapa en instans av timern
  const [timeValues, setTimeValues] = useState('00:00');

  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // Håller reda på om timern körs eller ej
  const [isTimeIsUp, setIsTimeIsUp] = useState(false); // State för att se om tiden är slut eller inte
  const [isInterval, setIsInterval] = useState(false); // Interval eller inte
  const navigate = useNavigate();

  // useRef för att hämta det senaste värdet av isInterval
  const isIntervalRef = useRef(isInterval);

  useEffect(() => {
    isIntervalRef.current = isInterval;
  }, [isInterval]);

  useEffect(() => {

    timer.addEventListener('secondsUpdated', () => {
      const updatedTime = timer.getTimeValues().toString(['minutes', 'seconds']);
      setTimeValues(updatedTime);
      console.log('Updated TimeValues:', updatedTime); // Loggar det uppdaterade värdet
    });

    const handleTargetAchieved = () => {
      const currentIsInterval = isIntervalRef.current;
      // console.log('Timer finished. isInterval:', isInterval);
      console.log('Timer finished. isInterval:', currentIsInterval);
      if (currentIsInterval) { // Om interval är aktivt, starta om timern
        console.log('Interval checked, restarting timer when time ends');
        timer.start({ countdown: true, startValues: { minutes: selectedMinutes } });
      } else { // Annars stoppa timern och navigera
        setIsRunning(false);
        setIsTimeIsUp(true);
        setSelectedMinutes(0); // Nollställ den valda tiden när tiden är slut
        setTimeValues('00:00'); // Nollställ timern när tiden är slut
        navigate('/TimesUp');
      }
    };
  
    // Lägg till eventlyssnare för när timern är slut
    timer.addEventListener('targetAchieved', handleTargetAchieved);
  

    return () => {
      timer.removeEventListener('secondsUpdated');
      timer.removeEventListener('targetAchieved');
    };
  }, [timer, selectedMinutes, isInterval, navigate]);


const startTimer = () => {
  console.log('Starting timer with selected minutes:', selectedMinutes);
  console.log('isInterval when starting timer:', isInterval)
  // Sätt timeValues till den valda tiden
  const initialTimeValues = `${String(selectedMinutes).padStart(2, '0')}:00`;
  setTimeValues(initialTimeValues);

  // Starta timern
  timer.start({ countdown: true, startValues: { minutes: selectedMinutes } });
  setIsRunning(true);
  setIsTimeIsUp(false); // Återställ time is up vid start av nedräkning
  navigate('/DigitalCountDown'); // Navigera till nedräkningssida
};



  // Återställ timern
  const restartTimer = () => {
    timer.reset();
    setTimeValues('00:00');
    setIsRunning(false);
    setIsTimeIsUp(false);
  };

  // Återställ timern
  const stopTimer = () => {
    timer.stop();
    setTimeValues('00:00'); // Sätt värder till 0 vid stop av timer
    // setSelectedMinutes(0); // Nollställ timer vid stopp. Orsakar att minutvisaren inte nollställs..
    setIsRunning(false);
    setIsTimeIsUp(false);
  };


  return (
    <TimerContext.Provider
      value={{
        timer,
        timeValues,
        setTimeValues,
        selectedMinutes,
        setSelectedMinutes,
        startTimer,
        restartTimer,
        stopTimer,
        isRunning,
        isInterval,
        setIsInterval,
      }}>
      {children}
      {/* {isTimeIsUp && <TimesUp />}Time is up component */}
    </TimerContext.Provider>
  )
}

export default TimerContext;