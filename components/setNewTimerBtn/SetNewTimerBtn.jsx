

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function SetNewTimerBtn() {

    const navigate = useNavigate();

    const newTimer = () => {
        console.log('Navigate to /SetTimerPage');
        navigate('/SetTimerPage');
        
    }

  return (
    <motion.button
    style={{
        color : 'white',
        border : '1px solid white',
        marginTop : 'auto',
        position : 'absolute',
        bottom : '3rem',
        padding : '1rem 1rem',
        borderRadius : 5,
        backgroundColor : 'transparent'
    }}
    whileTap={{
        scale : .9,
    }}
    transition={{
        duration : .3,
    }}
    onClick={newTimer}>SET NEW TIMER</motion.button>
  )
}

export default SetNewTimerBtn;