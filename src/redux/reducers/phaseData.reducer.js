// phaseData is an array of objects that include
// information for each phase (example, for 'endurance', sets/reps, rest amount, and description)
const phaseData = (state=[], action) => {
    if (action.type === 'SET_PHASE_DATA') {
        return action.payload;
    }
    return state;
}

export default phaseData;