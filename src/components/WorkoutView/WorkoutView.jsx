import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TopNav from '../TopNav/TopNav';

// import Exercise component
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
            <TopNav/>
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
        </>
    )
}

export default WorkoutView;