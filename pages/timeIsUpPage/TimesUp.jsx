
import './timesup.css'
import React from 'react'
import { motion } from 'framer-motion';
import SetNewTimerBtn from '../../components/setNewTimerBtn/SetNewTimerBtn';

function TimesUp() {
    return (
        <section className='timesup-section'
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#222222',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2rem',
            }}>
            <motion.figure className='circle circle1'
            animate={{
                height : 550,
                backgroundColor : 'rgba(255, 255, 255, 0.02)',
            }}
            transition={{
                duration : 2,
                ease : 'easeInOut',
                repeat : Infinity,
                repeatType : 'mirror',
                delay : 0
            }}
            >
                <motion.figure className='circle circle2'
                animate={{
                    height : 450,
                }}
                transition={{
                    duration : 2,
                    ease : 'easeInOut',
                    repeat : Infinity,
                    repeatType : 'mirror',
                    delay : .1
                }}
                >
                    <motion.figure className='circle circle3'
                    animate={{
                        height : 350,
                    }}
                    transition={{
                        duration : 2,
                        ease : 'easeInOut',
                        repeat : Infinity,
                        repeatType : 'mirror',
                        delay : .2
                    }}
                    >
                        <motion.figure className="circle circle4"
                        animate={{
                            height : 250,
                        }}
                        transition={{
                            duration : 2,
                            ease : 'easeInOut',
                            repeat : Infinity,
                            repeatType : 'mirror',
                            delay : .3
                        }}
                        >

                            <div className='alarm-section'
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                <motion.img src="/img/alarmicon.svg" alt="Alarm clock icon"
                                    initial={{
                                        rotate: 0
                                    }}
                                    animate={{
                                        rotate: [0, -10, 10, -10, 0],
                                    }}
                                    transition={{
                                        times: 'loop',
                                        repeat: Infinity,
                                        duration: .5
                                    }}
                                />
                                <p>TIMES UP!</p>
                            </div>
                        </motion.figure>
                    </motion.figure>
                </motion.figure>
            </motion.figure>
        <SetNewTimerBtn />
        </section>
    )
}

export default TimesUp;