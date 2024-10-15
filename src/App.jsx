import { Route, Routes } from 'react-router-dom'
import './index.css'
import LandingPage from '../pages/landingPage/LandingPage'

function App() {

  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={ <LandingPage />}/>

      </Routes>
    </div>
  )
}

export default App
