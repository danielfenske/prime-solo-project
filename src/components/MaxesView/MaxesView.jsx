import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';

// import children components
import MaxesForm from '../MaxesForm/MaxesForm';
import UserMaxes from '../UserMaxes/UserMaxes';

function MaxesFormView() {

    const dispatch = useDispatch();
    const history = useHistory();

    const newUserPreferences = useSelector((store) => (store.userPreferences.newUserPreferences));
    const user = useSelector(store => store.user);

    useEffect(() => {
        dispatch({ type: 'FETCH_USER_MAXES' });
    }, []);

    // sends all values taken from form to be stored in reducer
    const handleSubmitButton = () => {
        event.preventDefault();
        console.log('in handleSubmitButton');

        dispatch({ type: 'POST_USER_PREFERENCES', payload: newUserPreferences });
        dispatch({type: 'FETCH_USER_PREFERENCES'});
        history.push("/received");
    }

    const handleBackButton = () => {
        history.push('/equipment');
    }

    return (
        <>
            <div className="appContainer">
                <h1 className="headerText">Track your progress!</h1>
                {user.form_complete === false && <p>(optional)</p>}
                <MaxesForm />
                <UserMaxes />
                {user.form_complete === false &&
                    <>
                        <button onClick={handleSubmitButton}>Submit</button>
                        <button onClick={handleBackButton}>Back</button>
                    </>
                }
            </div>
            {
                user.form_complete &&
                <Nav />
            }
        </>
    )
}

export default MaxesFormView;