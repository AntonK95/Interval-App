
import React from 'react'
import { createContext, useState, useEffect } from 'react'
import Timer from 'easytimer.js'

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {

    const [ timer ] = useState(() => new Timer()); // // Använd funktion för att skapa en instans av timern
    const [ timeValues, setTimeValues ] = useState('00:00');

    useEffect(() => {
      timer.addEventListener('secondsUpdated', () => {
        setTimeValues(timer.getTimeValues().toString(['minutes', 'seconds']));
      });

      return () => {
        timer.removeEventListener('secondsUpdated');
      };
    }, [timer]);
    
  return (
    <TimerContext.Provider value={{ timer, timeValues, setTimeValues }}>
        { children }
    </TimerContext.Provider>
  )
}

export default TimerContext;