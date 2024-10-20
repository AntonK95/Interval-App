
import React, { useContext, useEffect, useState } from 'react';
import IntervalHeader from '../../components/intervalHeader/IntervalHeader';
import StopTimerBtn from '../../components/stopTimerBtn/StopTimerBtn';
import TimerContext from '../../context/TimerContext';

import './analogCountDown.css';

function AnalogCountDown() {
  const { timeValues, selectedMinutes } = useContext(TimerContext);

  // State för att hålla reda på minut och sekundvisarna, startposition 0
  const [secondsRotation, setSecondsRotation] = useState(0);
  const [minutesRotation, setMinutesRotation] = useState(0);

  // Använd useEffect för att se vad som händer med timeValues
  useEffect(() => {
    console.log('Initial timeValues:', timeValues); // Logga det nya värdet

    // Dela upp timeValues i sekunder och minuter
    const [parsedMinutes, parsedSeconds] = timeValues.split(':').map(Number);
    console.log('Parsed minutes:', parsedMinutes); // Logga parsed minutes
    console.log('Parsed seconds:', parsedSeconds); // Logga parsed seconds

    // Kolla om selectedMinutes är korrekt
    console.log('Selected minutes:', selectedMinutes);

    // Räkna ut kvarstående sekunder
    const totalSecondsFromSelectedMinutes = selectedMinutes * 60;
    const remainingSeconds = totalSecondsFromSelectedMinutes - (parsedMinutes * 60 + parsedSeconds);

    console.log('Total seconds from selected minutes:', totalSecondsFromSelectedMinutes); // Logga total seconds
    console.log('Remaining seconds:', remainingSeconds); // Logga kvarstående sekunder

    if (remainingSeconds < 0) {
      console.log('Remaining seconds is negative:', remainingSeconds);
      return; // Om kvarstående sekunder är negativa, avsluta tidigt
    }
    // Sekundvisaren skall rotera 6 grader per sekund. 360 / 60 = 6
    const secondsRotationDeg = parsedSeconds * -6;
    // const minutesRotationDeg = parsedMinutes * 6 + (parsedSeconds / 60) * 6;
    // Räkna ut rotation för minutvisaren
    const minutesRotationDeg = (1 - remainingSeconds / totalSecondsFromSelectedMinutes) * -360;
    setSecondsRotation(secondsRotationDeg);
    setMinutesRotation(minutesRotationDeg);

  }, [timeValues, selectedMinutes]);

  return (
    <section className='analog-wrapper'
      style={{
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}
    >
      <IntervalHeader />
      <section className="stopwatch">
        <div className="seconds-arm"
          style={{ transform: `rotate(${secondsRotation}deg)` }}></div>
        <div className="minutes-arm"
          style={{ transform: `rotate(${minutesRotation}deg)` }}></div>
      </section>
      <div style={{ color: 'black' }}>{timeValues}</div>
      <StopTimerBtn />
    </section>
  );
}

export default AnalogCountDown;



