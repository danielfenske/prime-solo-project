const userMaxes = (state=[], action) => {
    if (action.type === 'SET_USER_MAXES') {
        return action.payload;
    }
    return state;
}

export default userMaxes;