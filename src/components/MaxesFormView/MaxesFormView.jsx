import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import children components
import MaxesForm from '../MaxesForm/MaxesForm';
import UserMaxes from '../UserMaxes/UserMaxes';

function MaxesFormView() {

    const history = useHistory();

    const handleSubmit = () => {
        console.log('in handleSubmit');
       
        history.push('/signup/review');
    }

    // useEffect(() => {
    //     dispatch({type: 'FETCH_USER_MAXES'});
    //   }, []);

    const handleBackButton = () => {
        history.push('/signup/equipment');
    }

    return (
        <div className="appContainer">
            <h1 className="headerText">Track your progress!</h1>
            <MaxesForm/>
            <UserMaxes/>
            <button onClick={handleSubmit}>Review</button>
            <button onClick={handleBackButton}>Back</button>
        </div>
    )
}

export default MaxesFormView;