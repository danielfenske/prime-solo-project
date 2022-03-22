import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// IMPORT SASS/MUI
import './MaxesForm.scss';
import { TextField, FormControl } from '@mui/material';

// import children components
import UserMaxes from '../UserMaxes/UserMaxes';

function MaxesForm() {

    const [exercise, setExercise] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    const user = useSelector(store => store.user);

    const dispatch = useDispatch();
    const history = useHistory();

    const newUserPreferences = useSelector((store) => (store.userPreferences.newUserPreferences));

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

    const handleAdd = () => {
        console.log('in handleAdd');

        dispatch({ type: 'ADD_MAX', payload: { exercise: exercise, weight: Number(weight), reps: Number(reps) } });
        dispatch({ type: 'FETCH_USER_MAXES' });
    }


    return (
        <div className="appContainer formContainer">
            <div className="formHeader">
                <div className="progressBar">
                    <div className="maxesBar"></div>
                </div>
                <h1 className="headerText">Track your progress!</h1>
                <h1 className="subHeaderText">(optional)</h1>
            </div>

            <form className="maxesFormBody">
                <div className="maxesFormTop">
                    <FormControl fullWidth>
                        <h1 className="subHeaderText">Enter exercise:</h1>
                        <TextField
                            type="text"
                            value={exercise}
                            required
                            onChange={(event) => setExercise(event.target.value)}
                        />
                    </FormControl>
                </div>

                <div className="maxesFormBottom">
                    <FormControl fullWidth>
                        <h1 className="subHeaderText">Weight</h1>
                        <TextField
                            type="number"
                            value={weight}
                            required
                            onChange={(event) => setWeight(event.target.value)}
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <h1 className="subHeaderText">Reps</h1>
                        <TextField
                            type="number"
                            value={reps}
                            required
                            onChange={(event) => setReps(event.target.value)}
                        />
                    </FormControl>
                </div>

                <button type="submit" className="primaryButton maxesButton" onClick={handleAdd}>Add</button>
            </form>
            <UserMaxes />
            <div className="formFooter">
                <button className="primaryButton submitButton" onClick={handleSubmitButton}>Submit</button>
                <button className="backButton submitBackButton" onClick={handleBackButton}>Back</button>
            </div>
        </div>
    )
}

export default MaxesForm;