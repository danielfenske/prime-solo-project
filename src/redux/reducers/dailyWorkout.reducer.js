const dailyWorkout = (state=[], action) => {
    if (action.type === 'SET_DAILY_WORKOUT') {
        return action.payload;
    } 
    return state;
}

export default dailyWorkout;