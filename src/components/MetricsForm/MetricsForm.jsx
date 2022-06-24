import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
        <div className='appContainer'>

            <div className='appHeader' id='formHeader'>
                <div className='progressBar'>
                    <div className='metricsBar'></div>
                </div>
                <h1 className='headerText'>Tell us a little more about you.</h1>
            </div>

            <div className='appBody'>
                <form className='formContainer'>
                    <FormControl fullWidth>
                        <h1 className='subHeaderText'>Name</h1>
                        <TextField
                            autoComplete='off'
                            placeholder='enter name'
                            variant='outlined'
                            type='text'
                            value={name}
                            required
                            onChange={(event) => setName(event.target.value)}
                            size='small'
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <h1 className='subHeaderText'>Age</h1>
                        <TextField
                            autoComplete='off'
                            placeholder='enter age'
                            variant='outlined'
                            type='number'
                            value={age}
                            required
                            onChange={(event) => setAge(event.target.value)}
                            size='small'
                        />
                    </FormControl>


                    <FormControl fullWidth>
                        <h1 className='subHeaderText'>Weight (lbs)</h1>
                        <TextField
                            autoComplete='off'
                            placeholder='enter weight'
                            variant='outlined'
                            type='number'
                            value={weight}
                            required
                            onChange={(event) => setWeight(event.target.value)}
                            size='small'
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <h1 className='subHeaderText'>Height (inches)</h1>
                        <TextField
                            autoComplete='off'
                            placeholder='enter height'
                            variant='outlined'
                            type='number'
                            value={height}
                            required
                            onChange={(event) => setHeight(event.target.value)}
                            size='small'
                        />
                    </FormControl>
                </form>
            </div>

            <div className='appFooter'>
                <button type='submit' className='primaryButton' onClick={handleNextButton}>Next</button>
                <button className='backButton' onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
            </div>
        </div >
    )
}

export default MetricsForm;