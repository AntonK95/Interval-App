import { Route, Routes } from 'react-router-dom'
import './index.css'
import LandingPage from '../pages/landingPage/LandingPage'
import SetTimerPage from '../pages/setTimerPage/SetTimerPage'

function App() {

  return (
    <div className='body'
    style={{
      fontFamily : 'PT sans sans-serif'
    }}>
      <Routes>
        <Route path='/' element={ <LandingPage />}/>
        <Route path='/SetTimerPage' element={ <SetTimerPage />}/>

      </Routes>
    </div>
  )
}

export default App;
