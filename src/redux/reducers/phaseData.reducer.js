const phaseData = (state={}, action) => {
    if (action.type === 'SET_PHASE_DATA') {
        return action.payload;
    }
    return state;
}

export default phaseData;