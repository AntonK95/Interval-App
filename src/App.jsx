import { Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './index.css'
import LandingPage from '../pages/landingPage/LandingPage'
import SetTimerPage from '../pages/setTimerPage/SetTimerPage'
import DigitalCountDown from '../pages/digitalCountDown/DigitalCountDown'
import AnalogCountDown from '../pages/analogCountDown/AnalogCountDown'
import TimesUp from '../pages/timeIsUpPage/TimesUp'

import Navigation from '../components/navigation/Navigation'
import { TimerProvider } from '../context/TimerContext'

function App() {

  // const [ timeValues, setTimeValues ] = useState('00:00');

  const location = useLocation();

  const isNavigationVisible = location.pathname !== '/' && location.pathname !== '/TimesUp';

  return (
    <div className='body'>
      <TimerProvider>
        { isNavigationVisible && <Navigation />}
        <Routes>
          <Route path='/' element={ <LandingPage />}/>
          <Route path='/SetTimerPage' element={ <SetTimerPage  />}/>{/*setTimeValues={setTimeValues}*/}
          <Route path='/DigitalCountDown' element={ <DigitalCountDown  />} />{/*timeValues={timeValues}*/}
          <Route path='/AnalogCountDown' element={ <AnalogCountDown />} />
          <Route path='/TimesUp' element={ <TimesUp />} />
        </Routes>
      </TimerProvider>
    </div>
  )
}

export default App;
