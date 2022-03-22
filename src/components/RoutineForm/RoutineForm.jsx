import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// SASS/MUI imports
import './RoutineForm.scss';
import { FormControl, Select, MenuItem } from '@mui/material';

function RoutineForm() {

    const [daysPerWeek, setDaysPerWeek] = useState(3);
    const [routine, setRoutine] = useState('full_body');

    // initialize useDispatch to connect with SAGA
    const dispatch = useDispatch();
    // initialize useHistory to move user to next screen
    const history = useHistory();

    // sends all values taken from form to be stored in reducer
    const handleNextButton = () => {
        event.preventDefault();
        console.log('in handleNextButton');

        dispatch({ type: 'ADD_ROUTINE', payload: { daysPerWeek: Number(daysPerWeek), routine: routine } });

        history.push('/equipment');
    }

    const handleBackButton = () => {
        history.push('/metrics');
    }

    return (
        <div className="appContainer formContainer">

            <div className="formHeader">
                <div className="progressBar">
                    <div className="routineBar"></div>
                </div>
                <h1 className="headerText">What's your go-to routine?</h1>
            </div>

            <form className="formBody">
                <FormControl fullWidth>
                    <h1 className="subHeaderText">Days per week:</h1>
                    <Select
                        name="daysPerWeek"
                        value={daysPerWeek}
                        onChange={(event) => setDaysPerWeek(event.target.value)}
                    >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <h1 className="subHeaderText">Select routine:</h1>
                    <Select
                        name="routine"
                        value={routine}
                        onChange={(event) => setRoutine(event.target.value)}
                    >
                        <MenuItem value="full_body">full body</MenuItem>
                        <MenuItem value="split">split</MenuItem>
                    </Select>
                </FormControl>
            </form>

            <div className="formFooter">
                <button  className="primaryButton" onClick={handleNextButton}>Next</button>
                <button className="backButton" onClick={handleBackButton}>Back</button>
            </div>

        </div>
    )
}

export default RoutineForm;