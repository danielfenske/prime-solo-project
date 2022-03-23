import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';

// import Exercise component
import WorkoutHeader from './WorkoutHeader/WorkoutHeader';
import Exercise from './Exercise/Exercise';

// import CSS
import './WorkoutView.scss';

function WorkoutView() {

    const dailyWorkout = useSelector((store) => store.dailyWorkout);

    return (
        <>
        <WorkoutHeader/>
        <div className="appContainer">
            {dailyWorkout && (dailyWorkout.map((exercise) => {
                return (
                    <Exercise 
                        key={exercise.id}
                        exercise={exercise}
                    />
                );
            }))}
        </div>
        <Nav/>
        </>
    )
}

export default WorkoutView;