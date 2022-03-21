import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MetricsForm.scss';

function MetricsForm() {
    const user = useSelector(store => store.user);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    // initialize useDispatch to connect with SAGA
    const dispatch = useDispatch();
    // initialize useHistory to move user to next screen
    const history = useHistory();


    // sends all values taken from form to be stored in reducer
    const handleNextButton = () => {
        event.preventDefault();
        console.log('in handleSubmit');

        let metrics = {
            name: name,
            age: Number(age),
            weight: Number(weight),
            height: Number(height)
        }

        dispatch({ type: 'ADD_METRICS', payload: metrics });

        history.push('/routine');
    }

    return (
        <div className="appContainer">
            <div className="formContainer">
            <div className="progressBar">
                <div className="metricsBar"></div>
            </div>
            <h1 className="headerText">Tell us a little more about you.</h1>
            <form onSubmit={handleNextButton}>
                <h1 className="subHeaderText">Enter name:</h1>
                <input
                    type="text"
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}
                />

                <h1 className="subHeaderText">Enter age:</h1>
                <input
                    type="number"
                    value={age}
                    required
                    onChange={(event) => setAge(event.target.value)}
                />

                <h1 className="subHeaderText">Enter weight (lbs):</h1>
                <input
                    type="number"
                    value={weight}
                    required
                    onChange={(event) => setWeight(event.target.value)}
                />

                <h1 className="subHeaderText">Enter height (inches):</h1>
                <input
                    type="number"
                    value={height}
                    required
                    onChange={(event) => setHeight(event.target.value)}
                />
                <button type="submit">Next</button>
            </form>
            </div>
        </div>
    )
}

export default MetricsForm;