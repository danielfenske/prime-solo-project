import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// IMPORT SASS/MUI
import { FormControl, Select, MenuItem } from '@mui/material';

// image imports
import FullBodyImg from './full-body-workout.png';
import SplitImg from './split-workout.png';

function RoutineEdit({ userPreferences }) {

    const [daysPerWeek, setDaysPerWeek] = useState(userPreferences.days_per_week);
    const [routine, setRoutine] = useState(userPreferences.routine);

    const dispatch = useDispatch();

    const handleUpdate = () => {
        console.log('in handleUpdate');

        dispatch({ type: 'UPDATE_ROUTINE', payload: { daysPerWeek: Number(daysPerWeek), routine: routine } });
    }

    return (
        <form className='modalFormBody'>
            {routine === 'full_body' 
                ? <img src={FullBodyImg} className='modalImageContainer' alt='man working out' />
                : <img src={SplitImg} className='modalImageContainer' alt='three men working out' />
            }
            <FormControl fullWidth>
                <h1 className='subHeaderText'>Lifting routine</h1>
                <Select
                    name='routine'
                    value={routine}
                    onChange={(event) => setRoutine(event.target.value)}
                    size='small'
                >
                    <MenuItem value='full_body'>full body</MenuItem>
                    <MenuItem value='split'>split</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <h1 className='subHeaderText'>Lifts per week</h1>
                <Select
                    name='daysPerWeek'
                    value={daysPerWeek}
                    onChange={(event) => setDaysPerWeek(event.target.value)}
                    size='small'
                >
                    <MenuItem value='1'>one</MenuItem>
                    <MenuItem value='2'>two</MenuItem>
                    <MenuItem value='3'>three</MenuItem>
                    <MenuItem value='4'>four</MenuItem>
                </Select>
            </FormControl>
            <button type='submit' className='primaryButton smallButton updateButton' onClick={handleUpdate}>UPDATE</button>
        </form>
    )
}

export default RoutineEdit;