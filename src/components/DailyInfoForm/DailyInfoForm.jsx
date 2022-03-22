import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';

// SASS/MUI imports
import './DailyInfoForm.scss';
import { FormControl, Select, MenuItem } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

function DailyInfoForm({ daysPerWeek, handleOpen }) {

    // holds form values 
    const [phase, setPhase] = useState('endurance');
    const [dayOfWeek, setDayOfWeek] = useState('1');

    // initialize useDispatch to connect with SAGA
    const dispatch = useDispatch();
    // initialize useHistory to move user to next screen
    const history = useHistory();

    // handleSubmit grabs form information, sends it to 
    // saga, and pushes user to workout view
    const handleSubmit = () => {
        // eliminate page reload on submit
        event.preventDefault();
        
        let dailyInfo = {
            phase: phase,
            dayOfWeek: Number(dayOfWeek)
        }

        // dailyInfo will be used in get request made to server
        dispatch({ type: 'FETCH_DAILY_WORKOUT', payload: dailyInfo });

        // send user to page that displays workout
        history.push('/workout');
    }


    switch (daysPerWeek) {
        case 4:
            return (
                <>
                    <form className="homeBody">
                        <FormControl fullWidth>
                            <h1 className="subHeaderText">Select phase <HelpIcon sx={{ color: '#0695fd' }} onClick={handleOpen} /></h1>
                            <Select
                                value={phase}
                                onChange={(event) => setPhase(event.target.value)}
                            >
                                <MenuItem value="endurance">endurance</MenuItem>
                                <MenuItem value="hypertrophy">hypertrophy</MenuItem>
                                <MenuItem value="strength">strength</MenuItem>
                                <MenuItem value="power">power</MenuItem>
                                <MenuItem value="maintenance">maintenance</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <h1 className="subHeaderText">What day of the week are you on?</h1>
                            <Select
                                value={dayOfWeek}
                                onChange={(event) => setDayOfWeek(event.target.value)}
                            >
                                <MenuItem value='1'>one</MenuItem>
                                <MenuItem value='2'>two</MenuItem>
                                <MenuItem value='3'>three</MenuItem>
                                <MenuItem value='4'>four</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                    <div className="homeFooter">
                        <button type="submit" className="primaryButton" onClick={handleSubmit}>Get Workout</button>
                    </div>
                </>
            )
        case 3:
            return (
                <>
                    <form className="homeBody">
                        <FormControl fullWidth>
                            <h1 className="subHeaderText">Select phase <HelpIcon sx={{ color: '#0695fd' }} onClick={handleOpen} /></h1>
                            <Select
                                value={phase}
                                onChange={(event) => setPhase(event.target.value)}
                            >
                                <MenuItem value="endurance">endurance</MenuItem>
                                <MenuItem value="hypertrophy">hypertrophy</MenuItem>
                                <MenuItem value="strength">strength</MenuItem>
                                <MenuItem value="power">power</MenuItem>
                                <MenuItem value="maintenance">maintenance</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <h1 className="subHeaderText">What day of the week are you on?</h1>
                            <Select
                                value={dayOfWeek}
                                onChange={(event) => setDayOfWeek(event.target.value)}
                            >
                                <MenuItem value='1'>one</MenuItem>
                                <MenuItem value='2'>two</MenuItem>
                                <MenuItem value='3'>three</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                    <div className="homeFooter">
                        <button type="submit" className="primaryButton" onClick={handleSubmit}>Get Workout</button>
                    </div>
                </>
            )
           
        case 2:
            return (
                <>
                    <form className="homeBody">
                        <FormControl fullWidth>
                            <h1 className="subHeaderText">Select phase <HelpIcon sx={{ color: '#0695fd' }} onClick={handleOpen} /></h1>
                            <Select
                                value={phase}
                                onChange={(event) => setPhase(event.target.value)}
                            >
                                <MenuItem value="endurance">endurance</MenuItem>
                                <MenuItem value="hypertrophy">hypertrophy</MenuItem>
                                <MenuItem value="strength">strength</MenuItem>
                                <MenuItem value="power">power</MenuItem>
                                <MenuItem value="maintenance">maintenance</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <h1 className="subHeaderText">What day of the week are you on?</h1>
                            <Select
                                value={dayOfWeek}
                                onChange={(event) => setDayOfWeek(event.target.value)}
                            >
                                <MenuItem value='1'>one</MenuItem>
                                <MenuItem value='2'>two</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                    <div className="homeFooter">
                        <button type="submit" className="primaryButton" onClick={handleSubmit}>Get Workout</button>
                    </div>
                </>
            )
        default:
            return (
                <>
                    <form className="homeBody">
                        <FormControl fullWidth>
                            <h1 className="subHeaderText">Select phase <HelpIcon sx={{ color: '#0695fd' }} onClick={handleOpen} /></h1>
                            <Select
                                value={phase}
                                onChange={(event) => setPhase(event.target.value)}
                            >
                                <MenuItem value="endurance">endurance</MenuItem>
                                <MenuItem value="hypertrophy">hypertrophy</MenuItem>
                                <MenuItem value="strength">strength</MenuItem>
                                <MenuItem value="power">power</MenuItem>
                                <MenuItem value="maintenance">maintenance</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <h1 className="subHeaderText">What day of the week are you on?</h1>
                            <Select
                                value={dayOfWeek}
                                onChange={(event) => setDayOfWeek(event.target.value)}
                            >
                                <MenuItem value='1'>one</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                    <div className="homeFooter">
                        <button type="submit" className="primaryButton" onClick={handleSubmit}>Get Workout</button>
                    </div>
                </>
            )
    }
}

export default DailyInfoForm;