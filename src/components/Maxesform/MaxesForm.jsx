import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// IMPORT SASS/MUI
import './MaxesForm.scss';
import { TextField, FormControl, Select, MenuItem } from '@mui/material';

// import children components
import UserMaxes from '../UserMaxes/UserMaxes';

function MaxesForm() {

    const [exercise, setExercise] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('chest');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const newUserPreferences = useSelector((store) => (store.userPreferences.newUserPreferences));

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

    const handleAdd = (event) => {
        console.log('in handleAdd');
        event.preventDefault();

        dispatch({ type: 'ADD_MAX', 
        payload: { 
            exercise: exercise, 
            muscleGroup: muscleGroup, 
            weight: Number(weight), 
            reps: Number(reps) } });
        setExercise('');
        setWeight('');
        setReps('');
    }


    return (
        <div className="appContainer formContainer">
            <div className="formHeader">
                <div className="progressBar">
                    <div className="maxesBar"></div>
                </div>
                <h1 className="headerText">Track your progress!</h1>
                <p>(optional)</p>
            </div>

            <form className="maxesFormBody">
                <div className="maxesFormBottom">
                    <FormControl fullWidth>
                        <h1 className="subHeaderText">Exercise</h1>
                        <TextField
                            autoComplete='off'
                            type="text"
                            value={exercise}
                            required
                            onChange={(event) => setExercise(event.target.value)}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <h1 className="subHeaderText">Muscle Group</h1>
                        <Select
                            name="muscle group"
                            value={muscleGroup}
                            onChange={(event) => setMuscleGroup(event.target.value)}
                        >
                            <MenuItem value="chest">chest</MenuItem>
                            <MenuItem value="back">back</MenuItem>
                            <MenuItem value="legs">legs</MenuItem>
                            <MenuItem value="arms">arms</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="maxesFormBottom">
                    <FormControl fullWidth>
                        <h1 className="subHeaderText">Weight</h1>
                        <TextField
                            autoComplete='off'
                            type="number"
                            value={weight}
                            required
                            onChange={(event) => setWeight(event.target.value)}
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <h1 className="subHeaderText">Reps</h1>
                        <TextField
                            autoComplete='off'
                            type="number"
                            value={reps}
                            required
                            onChange={(event) => setReps(event.target.value)}
                        />
                    </FormControl>
                </div>

                <button type="submit" className="primaryButton smallButton" onClick={handleAdd}>Add</button>
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