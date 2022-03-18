import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function MaxesForm() {

    const [exercise, setExercise] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleAdd = () => {
        console.log('in handleAdd');

        dispatch({ type: 'ADD_MAX', payload: { exercise: exercise, weight: weight, reps: reps } });
    }

    const handleSubmit = () => {
        console.log('in handleSubmit');
       
    }

    const handleBackButton = () => {
        history.push('/signup/equipment');
    }

    // grab user maxes from DB
    useEffect(() => {
        dispatch({ type: 'FETCH_USER_MAXES' });
    }, []);

    return (
        <div className="appContainer">
            <h1 className="headerText">Track your progress!</h1>
            <form onSubmit={handleAdd}>
                <h1 className="subHeaderText">Enter exercise:</h1>
                <input
                    type="text"
                    value={exercise}
                    required
                    onChange={(event) => setExercise(event.target.value)}
                />

                <h1 className="subHeaderText">Enter weight (lbs):</h1>
                <input
                    type="number"
                    value={weight}
                    required
                    onChange={(event) => setWeight(event.target.value)}
                />

                <h1 className="subHeaderText">Enter reps:</h1>
                <input
                    type="number"
                    value={reps}
                    required
                    onChange={(event) => setReps(event.target.value)}
                />

                <button type="submit">Add</button>
            </form>

            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleBackButton}>Back</button>
        </div>
    )
}

export default MaxesForm;