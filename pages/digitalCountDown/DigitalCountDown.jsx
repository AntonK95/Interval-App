
import React from 'react'

function DigitalCountDown({ timeValues }) {
  return (
    <section className='digital-wrapper'>
        <div 
        style={{ 
          color : 'black' 
        }}>{timeValues}</div>
    </section>
  )
}

export default DigitalCountDown