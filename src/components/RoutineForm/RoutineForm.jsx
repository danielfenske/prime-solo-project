import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// SASS/MUI imports
import './RoutineForm.scss';
import { FormControl, Select, MenuItem } from '@mui/material';

// image imports
import FullBodyImg from './full-body-workout.png';
import SplitImg from './split-workout.png';

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
                {routine === 'full_body' 
                    ? <img src={FullBodyImg} className="imageContainer" alt="man working out" />
                    : <img src={SplitImg} className="imageContainer" alt="three men working out" />
                }
                <FormControl fullWidth>
                    <h1 className="subHeaderText">Lifting routine</h1>
                    <Select
                        name="routine"
                        value={routine}
                        onChange={(event) => setRoutine(event.target.value)}
                        size="small"
                    >
                        <MenuItem value="full_body">full body</MenuItem>
                        <MenuItem value="split">split</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <h1 className="subHeaderText">Lifts per week</h1>
                    <Select
                        name="daysPerWeek"
                        value={daysPerWeek}
                        onChange={(event) => setDaysPerWeek(event.target.value)}
                        size="small"
                    >
                        <MenuItem value="1">one</MenuItem>
                        <MenuItem value="2">two</MenuItem>
                        <MenuItem value="3">three</MenuItem>
                        <MenuItem value="4">four</MenuItem>
                    </Select>
                </FormControl>
            </form>

            <div className="formFooter">
                <button className="primaryButton" onClick={handleNextButton}>Next</button>
                <button className="backButton" onClick={handleBackButton}>Back</button>
            </div>

        </div>
    )
}

export default RoutineForm;