

import React from 'react'
import { useNavigate } from 'react-router-dom'

function IntervalHeader() {

    const navigate = useNavigate();

    const navToSetTimePage = () => {
        addEventListener('click', () => {
            navigate('/SetTimerPage');
        });
    };

    return (
        <p
            style={{
                color: 'black',
                textAlign: 'center',
                marginTop: '1rem',
                marginBottom: 'auto',
            }}
            onClick={navToSetTimePage}
        >Interval</p>
    )
}

export default IntervalHeader;