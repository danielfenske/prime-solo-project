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
        dispatch({type: 'FETCH_USER_MAXES'});
      }, []);

    return (
        <div className="appContainer">
            <h1 className="headerText">Track your progress!</h1>
            <MaxesForm/>
            <UserMaxes/>
        </div>
    )
}

export default MaxesFormView;