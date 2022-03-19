import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';

// import Exercise component
import Exercise from '../Exercise/Exercise';

// import CSS
import './WorkoutView.css';

function WorkoutView() {

    const dailyWorkout = useSelector((store) => store.dailyWorkout);

    return (
        <div className="appContainer">
            <h1 className="headerText">LET'S GET IT</h1>
            {dailyWorkout ? (dailyWorkout.map((exercise) => {
                return (
                    <Exercise 
                        key={exercise.id}
                        exercise={exercise}
                    />
                );
            })) : <p>Loading</p>}
            <Nav/>
        </div>
    )
}

export default WorkoutView;