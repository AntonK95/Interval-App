

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
                marginTop: '.5rem',
                marginBottom: 'auto',
                fontFamily : 'PT sans',
                fontSize : 20,
            }}
            onClick={navToSetTimePage}
        >interval</p>
    )
}

export default IntervalHeader;