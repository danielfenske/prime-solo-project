import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// IMPORT SASS/MUI
import './ProgressForm.scss';
import { TextField, FormControl, Select, MenuItem } from '@mui/material';

function ProgressForm() {

    const [exercise, setExercise] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('chest');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    const dispatch = useDispatch();

    const handleAdd = (event) => {
        console.log('in handleAdd');
        event.preventDefault();

        if (exercise === '' || weight === '' || reps === '') {
            alert('Please fill out all form fields');
        } else {
            dispatch({
                type: 'ADD_MAX',
                payload: {
                    exercise: exercise,
                    muscleGroup: muscleGroup,
                    weight: Number(weight),
                    reps: Number(reps)
                }
            });
            setExercise('');
            setWeight('');
            setReps('');
            dispatch({ type: 'FETCH_USER_MAXES', payload: muscleGroup });
        }
    }

    return (
        <form className="progressFormBody">
            <FormControl fullWidth>
                <h1 className="subHeaderText">Exercise</h1>
                <TextField
                    autoComplete='off'
                    type="text"
                    value={exercise}
                    required
                    onChange={(event) => setExercise(event.target.value)}
                    size="small"
                />
            </FormControl>
            <FormControl fullWidth>
                <h1 className="subHeaderText">Muscle Group</h1>
                <Select
                    name="muscle group"
                    value={muscleGroup}
                    onChange={(event) => setMuscleGroup(event.target.value)}
                    size="small"
                >
                    <MenuItem value="chest">chest</MenuItem>
                    <MenuItem value="back">back</MenuItem>
                    <MenuItem value="legs">legs</MenuItem>
                    <MenuItem value="arms">arms</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <h1 className="subHeaderText">Weight</h1>
                <TextField
                    autoComplete='off'
                    type="number"
                    value={weight}
                    required
                    onChange={(event) => setWeight(event.target.value)}
                    size="small"
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
                    size="small"
                />
            </FormControl>
            <button type="submit" className="primaryButton smallButton" onClick={handleAdd}>Add</button>
        </form>
    )
}

export default ProgressForm;