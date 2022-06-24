import React from 'react';
import { useHistory } from 'react-router-dom';

import './ReceivedForm.scss';
import LifterImage from './lifter-received-page.jpg';

function ReceivedForm() {

    const history = useHistory();

    const handleClick = () => {
        console.log('in handleSubmit');

        history.push('/home');
    }

    return (
        <div className='appContainer'>
            <div className='receivedContainer'>
                <h1 className='headerText'>Thanks!</h1>
                <p>We have entered your information in our system.</p>
                <img src={LifterImage} className='imgFrame' alt='Male lifting weights in a gym' />
                <button onClick={handleClick}>Get to work</button>
            </div>
        </div>
    )
}

export default ReceivedForm;