import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';

// IMPORT SASS/MUI
import './MaxesView.scss';

// import children components
import UserMaxes from '../UserMaxes/UserMaxes';

function MaxesView() {

    const dispatch = useDispatch();
    const history = useHistory();

    const newUserPreferences = useSelector((store) => (store.userPreferences.newUserPreferences));
    const user = useSelector((store) => (store.user));

    useEffect(() => {
        dispatch({ type: 'FETCH_USER_MAXES' });
    }, []);

    // sends all values taken from form to be stored in reducer
    const handleSubmitButton = () => {
        event.preventDefault();
        console.log('in handleSubmitButton');

        dispatch({ type: 'POST_USER_PREFERENCES', payload: newUserPreferences });
        history.push("/home");
    }

    const handleBackButton = () => {
        history.push('/equipment');
    }

    return (
        <>
            <div className="appContainer">

            </div>
            <Nav />
        </>
    )
}

export default MaxesView;