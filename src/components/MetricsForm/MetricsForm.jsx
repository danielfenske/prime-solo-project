import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// SASS/MUI IMPORTS
import './MetricsForm.scss';
import { TextField, FormControl } from '@mui/material';

function MetricsForm() {
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

        if (name === '' || age === '' || weight === '' || height === '') {
            alert('Please fill out all form fields');
        } else {
            let metrics = {
                name: name,
                age: Number(age),
                weight: Number(weight),
                height: Number(height)
            }

            dispatch({ type: 'ADD_METRICS', payload: metrics });

            history.push('/routine');
        }
    }

    return (
        <div className="appContainer formContainer">

            <div className="formHeader">
                <div className="progressBar">
                    <div className="metricsBar"></div>
                </div>
                <h1 className="headerText">Tell us a little more about you.</h1>
            </div>

            <form className="formBody">
                <FormControl fullWidth>
                    <h1 className="subHeaderText">Enter name:</h1>
                    <TextField
                        autoComplete="off"
                        variant="outlined"
                        type="text"
                        value={name}
                        required
                        onChange={(event) => setName(event.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <h1 className="subHeaderText">Enter age:</h1>
                    <TextField
                        autoComplete="off"
                        variant="outlined"
                        type="number"
                        value={age}
                        required
                        onChange={(event) => setAge(event.target.value)}
                    />
                </FormControl>


                <FormControl fullWidth>
                    <h1 className="subHeaderText">Enter weight (lbs):</h1>
                    <TextField
                        autoComplete="off"
                        variant="outlined"
                        type="number"
                        value={weight}
                        required
                        onChange={(event) => setWeight(event.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <h1 className="subHeaderText">Enter height (inches):</h1>
                    <TextField
                        autoComplete="off"
                        variant="outlined"
                        type="number"
                        value={height}
                        required
                        onChange={(event) => setHeight(event.target.value)}
                    />
                </FormControl>
            </form>

            <div className="formFooter">
                <button type="submit" className="primaryButton" onClick={handleNextButton}>Next</button>
                <button className="backButton" onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
            </div>
        </div >
    )
}

export default MetricsForm;