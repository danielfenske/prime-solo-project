import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// IMPORT SASS/MUI
import './MaxesForm.scss';
import { TextField, FormControl } from '@mui/material';

function MaxesForm() {

    const [exercise, setExercise] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    const user = useSelector(store => store.user);

    const dispatch = useDispatch();

    const handleAdd = () => {
        console.log('in handleAdd');

        dispatch({ type: 'ADD_MAX', payload: { exercise: exercise, weight: Number(weight), reps: Number(reps) } });
        dispatch({ type: 'FETCH_USER_MAXES' });
    }

    return (
        <>
            <FormControl fullWidth>
                <h1 className="subHeaderText">Enter exercise:</h1>
                <TextField
                    type="text"
                    value={exercise}
                    required
                    onChange={(event) => setExercise(event.target.value)}
                />
            </FormControl>

            <FormControl fullWidth>
                <h1 className="subHeaderText">Enter weight (lbs):</h1>
                <TextField
                    type="number"
                    value={weight}
                    required
                    onChange={(event) => setWeight(event.target.value)}
                />
            </FormControl>

            <FormControl fullWidth>
                <h1 className="subHeaderText">Enter reps:</h1>
                <TextField
                    type="number"
                    value={reps}
                    required
                    onChange={(event) => setReps(event.target.value)}
                />
            </FormControl>

            <button type="submit" className="primaryButton" onClick={handleAdd}>Add</button>
        </>
    )
}

export default MaxesForm;