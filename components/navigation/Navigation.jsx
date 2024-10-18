import './navigation.css'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  }

//   const navToSetTimePage = () => {
//     addEventListener('click', () => {
//         navigate('/SetTimerPage');
//         setMenuOpen(false);
//     });
// };
// const navToDigital = () => {
//   addEventListener('click', () => {
//       navigate('/DigitalCountDown');
//       setMenuOpen(false);
//   });
// };
// const navToAnalog = () => {
//   addEventListener('click', () => {
//       navigate('/AnalogCountDown');
//       setMenuOpen(false);
//   });
// };

  return (
    <nav>
      <motion.svg
        onClick={() => setMenuOpen(!menuOpen)}
        width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
        initial={{ fill: 'black'}}
        animate={{
          fill: menuOpen ? 'white' : 'black',
          opacity: 1,
        }}
        transition={{
          duration: .5,
          ease: 'linear',
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          cursor: 'pointer',
          margin : '.5rem',
          zIndex : 10, 
        }}
      > 
      {/* Jag fattade inte hur jag inte kunde komma åt fill= egenskapen... Detta är en fungerande lösning */}
        <rect x="32" width="12" height="32" transform="rotate(90 32 0)" />
        <rect x="32" y="14" width="8" height="32" transform="rotate(90 32 14)" />
        <rect x="32" y="24" width="4" height="32" transform="rotate(90 32 24)" />
        <rect x="32" y="30" width="2" height="32" transform="rotate(90 32 30)" />
      </motion.svg>

      <motion.div
        initial={{ x: '-100%' }} // Startar utanför skärmen till vänster
        animate={{ x: menuOpen ? 0 : '-100%' }} // Glider in vid klick
        transition={{
          type: 'tween',
        //   stiffness: 70,
        //   damping: 20,
        }}
        className="side-menu"
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: '#333',
          zIndex: 5, 
          padding: '2rem',
          color: 'white',
          display : 'flex',
          justifyContent : 'center',
          alignItems : 'center',
        }}
      >
        <ul
        style={{
            listStyle : 'none',
            fontFamily : 'PT sans, sans-serif',
            fontSize : 24,
            fontWeight: 'bold'
        }}>
          <li onClick={() => handleNavigation('/SetTimerPage')}>SET TIMER</li>
          <li onClick={() => handleNavigation('/AnalogCountDown')}>ANALOG TIMER</li>
          <li onClick={() => handleNavigation('/DigitalCountDown')}>DIGITAL TIMER</li>        
          <li>VISUAL TIMER</li>
          <li>TEXT TIMER</li>
          <li>CIRCLES TIMER</li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navigation;
