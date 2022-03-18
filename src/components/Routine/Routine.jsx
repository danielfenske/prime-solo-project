import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Routine() {

    const [daysPerWeek, setDaysPerWeek] = useState('');
    const [routine, setRoutine] = useState('');

    // initialize useDispatch to connect with SAGA
    const dispatch = useDispatch();
    // initialize useHistory to move user to next screen
    const history = useHistory();

    // sends all values taken from form to be stored in reducer
    const handleNextButton = () => {
        event.preventDefault();
        console.log('in handleSubmit');

        dispatch({ type: 'ADD_ROUTINE', payload: { daysPerWeek: Number(daysPerWeek), routine: routine } });

        history.push('/signup/equipment');
    }

    const handleBackButton = () => {
        history.push('/signup/metrics');
    }

    return (
        <div className="appContainer">
            <h1 className="headerText">What's your go-to routine?</h1>

            <form onSubmit={handleNextButton}>

                {/* <h1 className="subHeaderText">Days per week:</h1>
                <input
                    type="number"
                    value={daysPerWeek}
                    required
                    onChange={(event) => setDaysPerWeek(event.target.value)}
                /> */}

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

                <h1 className="subHeaderText">Enter routine:</h1>
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

export default Routine;