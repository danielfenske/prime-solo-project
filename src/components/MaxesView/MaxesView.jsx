import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import children components
import MaxesForm from '../MaxesForm/MaxesForm';
import UserMaxes from '../UserMaxes/UserMaxes';

function MaxesFormView() {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_USER_MAXES' });
    }, []);

    // sends all values taken from form to be stored in reducer
    const handleSubmitButton = () => {
        event.preventDefault();
        console.log('in handleSubmitButton');

        dispatch({ type: 'ADD_ROUTINE', payload: { daysPerWeek: Number(daysPerWeek), routine: routine } });

        history.push('/equipment');
    }

    const handleBackButton = () => {
        history.push('/equipment');
    }

    return (
        <div className="appContainer">
            <h1 className="headerText">Track your progress!</h1>
            <MaxesForm />
            <UserMaxes />

            <button onClick={handleSubmitButton}>Get to work</button>
            <button onClick={handleBackButton}>Back</button>
        </div>
    )
}

export default MaxesFormView;