import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
        <div className="appContainer">
            <h1 className="headerText">What's your go-to routine?</h1>

            <form onSubmit={handleNextButton}>
                
                <h1 className="subHeaderText">Days per week:</h1>
                <select
                    name="daysPerWeek"
                    value={daysPerWeek}
                    onChange={(event) => setDaysPerWeek(event.target.value)}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <h1 className="subHeaderText">Select routine:</h1>
                <select
                    name="routine"
                    value={routine}
                    onChange={(event) => setRoutine(event.target.value)}
                >
                    <option value="full_body">full body</option>
                    <option value="split">split</option>
                </select>

                <button type="submit">Next</button>
            </form>
            <button onClick={handleBackButton}>Back</button>
        </div>
    )
}

export default RoutineForm;