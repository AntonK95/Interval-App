
import React from 'react'
import { createContext, useState, useEffect } from 'react'
import Timer from 'easytimer.js'
import { useNavigate } from 'react-router-dom';

const TimerContext = createContext();


export const TimerProvider = ({ children }) => {

  const [timer] = useState(() => new Timer()); // Använd funktion för att skapa en instans av timern
  const [timeValues, setTimeValues] = useState('00:00');
  
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // Håller reda på om timern körs eller ej
  const navigate = useNavigate();

  useEffect(() => {
    timer.addEventListener('secondsUpdated', () => {
      setTimeValues(timer.getTimeValues().toString(['minutes', 'seconds']));
    });

    // När timern är slut
    timer.addEventListener('targetAchieved', () => {
      setIsRunning(false);
      alert('Time is up!'); // Här kopplar jag upp min timesUpPage
    });

    return () => {
      timer.removeEventListener('secondsUpdated');
    };
  }, [timer]);

  // Starta nedräkningen baserat på de valda minuterna
  const startTimer = () => {
    timer.start({ countdown: true, startValues: { minutes: selectedMinutes } });
    setIsRunning(true);
    // navigate('/DigitalCountDown'); // Navigera till nedräkningssida
  };

  // Återställ timern
  const restartTimer = () => {
    timer.reset();
    setTimeValues('00:00');
    setIsRunning(false);
  };

  // Återställ timern
  const stopTimer = () => {
    timer.stop();
    setTimeValues('00:00');
    setIsRunning(false);
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
      }}>
      {children}
    </TimerContext.Provider>
  )
}

export default TimerContext;