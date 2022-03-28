import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// IMPORT SASS/MUI
import './GeneralEdit.scss';
import { TextField, FormControl } from '@mui/material';

function GeneralEdit({userPreferences}) {

    const [name, setName] = useState(userPreferences.name);
    const [age, setAge] = useState(userPreferences.age);
    const [weight, setWeight] = useState(userPreferences.weight);
    const [height, setHeight] = useState(userPreferences.height);

    const dispatch = useDispatch();

    // sends all values taken from form to be stored in reducer
    const handleUpdate = () => {
        console.log('in handleUpdate');

        if (name === '' || age === '' || weight === '' || height === '') {
            alert('Please fill out all form fields');
        } else {
            let metrics = {
                name: name,
                age: Number(age),
                weight: Number(weight),
                height: Number(height)
            }

            dispatch({ type: 'UPDATE_METRICS', payload: metrics });
        }
    }

    // grab user profile information on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_USER_PREFERENCES' });
    }, []);

    return (
        <form className="progressFormBody">
            <FormControl fullWidth>
                <h1 className="subHeaderText">Name</h1>
                <TextField
                    autoComplete="off"
                    placeholder='enter name'
                    variant="outlined"
                    type="text"
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}
                    size="small"
                />
            </FormControl>

            <FormControl fullWidth>
                <h1 className="subHeaderText">Age</h1>
                <TextField
                    autoComplete="off"
                    placeholder='enter age'
                    variant="outlined"
                    type="number"
                    value={age}
                    required
                    onChange={(event) => setAge(event.target.value)}
                    size="small"
                />
            </FormControl>


            <FormControl fullWidth>
                <h1 className="subHeaderText">Weight (lbs)</h1>
                <TextField
                    autoComplete="off"
                    placeholder='enter weight'
                    variant="outlined"
                    type="number"
                    value={weight}
                    required
                    onChange={(event) => setWeight(event.target.value)}
                    size="small"
                />
            </FormControl>

            <FormControl fullWidth>
                <h1 className="subHeaderText">Height (inches)</h1>
                <TextField
                    autoComplete="off"
                    placeholder='enter height'
                    variant="outlined"
                    type="number"
                    value={height}
                    required
                    onChange={(event) => setHeight(event.target.value)}
                    size="small"
                />
            </FormControl>
            <button type="submit" className="primaryButton smallButton" onClick={handleUpdate}>UPDATE</button>
        </form>
    )
}

export default GeneralEdit;