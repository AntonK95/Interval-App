import { Route, Routes } from 'react-router-dom'
import './index.css'
import LandingPage from '../pages/landingPage/LandingPage'
import SetTimerPage from '../pages/setTimer/SetTimerPage'

function App() {

  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={ <LandingPage />}/>
        <Route path='/SetTimerPage' element={ <SetTimerPage />}/>

      </Routes>
    </div>
  )
}

export default App;
