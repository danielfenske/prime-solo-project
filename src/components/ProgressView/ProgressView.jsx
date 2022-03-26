import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';

// IMPORT SASS/MUI
import './ProgressView.scss';

// import children components
import UserMaxes from '../UserMaxes/UserMaxes';

function ProgressView() {

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((store) => (store.user));

    useEffect(() => {
        dispatch({ type: 'FETCH_USER_MAXES' });
    }, []);

    return (
        <>
            <div className="appContainer progressContainer">
                <div className="progressHeader">
                    <h1 className="headerText">Track your progress!</h1>
                </div>
                <div className="progressBody">
                    <UserMaxes/>
                </div>
            </div>
            <Nav />
        </>
    )
}

export default ProgressView;