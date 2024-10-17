
import React from 'react'
import { createContext, useState } from 'react'
import Timer from 'easytimer.js'

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {

    const [ timer ] = useState(new Timer()); // skapa en instans av timern
    const [ timeValues, setTimeValues ] = useState('00:00');

  return (
    <TimerContext.Provider value={{ timer, timeValues, setTimeValues }}>
        { children }
    </TimerContext.Provider>
  )
}

export default TimerContext;