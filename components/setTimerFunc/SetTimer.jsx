import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TimerContext from '../../context/TimerContext';

function SetTimer() { 

  const { 
    timer, 
    timeValues, setTimeValues, 
    startTimer, selectedMinutes, setSelectedMinutes, 
    isRunning } = useContext(TimerContext); // hämta timer och setTimevalues från context

  // Karusell för att välja minuter
  const handleMinuteChange = (change) => {
    const newMinutes = selectedMinutes + change;
    if (newMinutes >= 1 && newMinutes <= 60) { // Begränsar mellan 1 och 60 minuter
      setSelectedMinutes(newMinutes);
    }
    console.log("Selected Minutes:", selectedMinutes);
    console.log("Time Values:", timeValues);

  };

  return (
    <div className='setTimer-wrapper' 
      style={{ 
        textAlign: 'center', 
        color : 'black',
        display : 'flex',
        flexDirection : 'column',
        fontFamily: 'PT sans sans-serif',
        marginTop : 'auto'
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
      {/* <div 
      style={{ 
        color : 'black', 
        fontSize: '48px', 
        margin: '20px',
        fontFamily : 'PT sans',
      }}>
      {timeValues}</div> */}
    </div>
  );
}

export default SetTimer;
