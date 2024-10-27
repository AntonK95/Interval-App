import './landingpage.css'
import logo from '/img/logo.svg'

import { motion } from 'framer-motion'

import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <section className='landingpage-wrapper'>

      <Link to={'/SetTimerPage'}>
          <motion.img src={logo} alt="Logo" /> 
          initial={{
              opacity : 0,
          }}
          animate={{
              opacity : 1,
          }}
          transition={{
              duration : 3,
          }}
          />
      </Link>
    </section>
  )
}

export default LandingPage
