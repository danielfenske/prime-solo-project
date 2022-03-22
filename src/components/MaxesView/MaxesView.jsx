import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';

// IMPORT SASS/MUI
import './MaxesView.scss';

// import children components
import MaxesForm from '../MaxesForm/MaxesForm';
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
            <div className="appContainer formContainer">
                <div className="formHeader">
                    {user.form_complete === false &&
                        <div className="progressBar">
                            <div className="maxesBar"></div>
                        </div>}
                    <h1 className="headerText">Track your progress!</h1>
                    {user.form_complete === false && <h1 className="subHeaderText">(optional)</h1>}
                </div>

                <div className="formBody">
                    <MaxesForm />
                    <UserMaxes />
                </div>

                {user.form_complete === false &&
                    <div className="formFooter">
                        <button className="primaryButton submitButton" onClick={handleSubmitButton}>Submit</button>
                        <button className="backButton submitBackButton" onClick={handleBackButton}>Back</button>
                    </div>
                }
            </div>
            {
                user.form_complete &&
                <Nav />
            }
        </>
    )
}

export default MaxesView;