import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// IMPORT SASS/MUI
import './MaxesForm.scss';
import { TextField, FormControl, Select, MenuItem } from '@mui/material';

function MaxesForm() {

    const [exercise, setExercise] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('chest');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const newUserPreferences = useSelector((store) => (store.userPreferences.newUserPreferences));
    const newUserEquipmentList = useSelector((store) => (store.equipment.newUserEquipmentList));

    console.log(newUserPreferences);

    // sends all values taken from form to be stored in reducer
    const handleSubmitButton = () => {
        event.preventDefault();
        console.log('in handleSubmitButton');

        dispatch(
            {
                type: 'POST_USER_PREFERENCES',
                payload: { ...newUserPreferences, equipmentList: newUserEquipmentList }
            });
        history.push("/home");
    }

    const handleBackButton = () => {
        history.push('/equipment');
    }

    const addChest = () => {
        setExercise('bench');
        setMuscleGroup('chest');
        setWeight('225');
        setReps('11');
    }

    const addBack = () => {
        setExercise('pull-up');
        setMuscleGroup('back');
        setWeight('165');
        setReps('21');
    }

    const addLegs = () => {
        setExercise('squat');
        setMuscleGroup('legs');
        setWeight('300');
        setReps('3');
    }

    const addArms = () => {
        setExercise('curl');
        setMuscleGroup('arms');
        setWeight('30');
        setReps('12');
    }

    const handleAdd = (event) => {
        console.log('in handleAdd');
        event.preventDefault();

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
                <div className="maxesFormRow">
                    <FormControl fullWidth>
                        <h1 className="subHeaderText" onClick={addChest}>Exercise</h1>
                        <TextField
                            autoComplete='off'
                            placeholder='enter exercise'
                            type="text"
                            value={exercise}
                            required
                            onChange={(event) => setExercise(event.target.value)}
                            size="small"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <h1 className="subHeaderText" onClick={addBack}>Muscle Group</h1>
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
                </div>

                <div className="maxesFormRow">
                    <FormControl fullWidth>
                        <h1 className="subHeaderText" onClick={addLegs}>Weight</h1>
                        <TextField
                            autoComplete='off'
                            placeholder='enter weight'
                            type="number"
                            value={weight}
                            required
                            onChange={(event) => setWeight(event.target.value)}
                            size="small"
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <h1 className="subHeaderText" onClick={addArms}>Reps</h1>
                        <TextField
                            autoComplete='off'
                            placeholder='enter reps'
                            type="number"
                            value={reps}
                            required
                            onChange={(event) => setReps(event.target.value)}
                            size="small"
                        />
                    </FormControl>
                </div>

                <button type="submit" className="primaryButton smallButton" onClick={handleAdd}>Add</button>
            </form>
            <div className="formFooter">
                <button className="primaryButton submitButton" onClick={handleSubmitButton}>Submit</button>
                <button className="backButton submitBackButton" onClick={handleBackButton}>Back</button>
            </div>
        </div>
    )
}

export default MaxesForm;