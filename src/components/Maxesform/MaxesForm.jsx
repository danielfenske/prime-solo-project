import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function MaxesForm() {

    const [exercise, setExercise] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    const handleAdd = () => {
        console.log('in handleAdd');

        dispatch({ type: 'ADD_MAX', payload: { exercise: exercise, weight: Number(weight), reps: Number(reps)} });
    }

    return (
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
    )
}

export default MaxesForm;