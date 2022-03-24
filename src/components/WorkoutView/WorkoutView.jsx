import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';

// import Exercise component
import WorkoutHeader from './WorkoutHeader/WorkoutHeader';
import Exercise from './Exercise/Exercise';

// import CSS
import './WorkoutView.scss';

function WorkoutView() {

    const dispatch = useDispatch();

    const dailyWorkout = useSelector((store) => store.dailyWorkout);

    useEffect(() => {
        dispatch({type: 'FETCH_CURRENT_WORKOUT'});
    }, [])

    return (
        <>
            <WorkoutHeader />
            <div className="workoutContainer">
                <div className="workoutContainer">
                    <div className="workoutBody">
                        {dailyWorkout && (dailyWorkout.map((exercise) => {
                            return (
                                <Exercise
                                    key={exercise.id}
                                    exercise={exercise}
                                />
                            );
                        }))}
                    </div>
                </div>
            </div>
            <Nav />
        </>
    )
}

export default WorkoutView;