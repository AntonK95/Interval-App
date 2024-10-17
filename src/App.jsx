import { Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './index.css'
import LandingPage from '../pages/landingPage/LandingPage'
import SetTimerPage from '../pages/setTimerPage/SetTimerPage'
import DigitalCountDown from '../pages/digitalCountDown/DigitalCountDown'
import AnalogCountDown from '../pages/analogCountDown/AnalogCountDown'
import Navigation from '../components/navigation/Navigation'

function App() {

  const [ timeValues, setTimeValues ] = useState('00:00');

  const location = useLocation();

  const isNavigationVisible = location.pathname !== '/';

  return (
    <div className='body'
    style={{
      fontFamily : 'PT sans sans-serif'
    }}>
      { isNavigationVisible && <Navigation />}
      <Routes>
        <Route path='/' element={ <LandingPage />}/>
        <Route path='/SetTimerPage' element={ <SetTimerPage setTimeValues={setTimeValues} />}/>
        <Route path='/DigitalCountDown' element={ <DigitalCountDown timeValues={timeValues} />} />
        <Route path='/AnalogCountDown' element={ <AnalogCountDown />} />
      </Routes>
    </div>
  )
}

export default App;
