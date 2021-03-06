import { combineReducers } from 'redux';

// stores each list of user maxes and organizes by category
const chestMaxes = (state = [], action) => {
    if (action.type === 'SET_CHEST_MAXES') {
        return action.payload;
    }
    return state;
}

const backMaxes = (state = [], action) => {
    if (action.type === 'SET_BACK_MAXES') {
        return action.payload;
    }
    return state;
}

const legsMaxes = (state = [], action) => {
    if (action.type === 'SET_LEGS_MAXES') {
        return action.payload;
    }
    return state;
}

const armsMaxes = (state = [], action) => {
    if (action.type === 'SET_ARMS_MAXES') {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    chestMaxes,
    backMaxes,
    legsMaxes,
    armsMaxes
});