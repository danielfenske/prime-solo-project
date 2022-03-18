import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import children components
import MaxesForm from '../MaxesForm/MaxesForm';

function MaxesFormView() {

    // const [exercise, setExercise] = useState('');
    // const [weight, setWeight] = useState('');
    // const [reps, setReps] = useState('');

    const userMaxes = useSelector((store) => (store.userMaxes));

    console.log(userMaxes);

    const dispatch = useDispatch();
    const history = useHistory();

    // const handleAdd = () => {
    //     console.log('in handleAdd');

    //     dispatch({ type: 'ADD_MAX', payload: { exercise: exercise, weight: Number(weight), reps: Number(reps)} });
    // }

    const handleSubmit = () => {
        console.log('in handleSubmit');
       
    }

    const handleBackButton = () => {
        history.push('/signup/equipment');
    }

    return (
        <div className="appContainer">
            <h1 className="headerText">Track your progress!</h1>
            <MaxesForm/>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleBackButton}>Back</button>
        </div>
    )
}

export default MaxesFormView;