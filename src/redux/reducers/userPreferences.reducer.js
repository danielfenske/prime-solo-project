import { combineReducers } from "redux";

// stores all userPreference for existing users
const userPreferences = (state={}, action) => {
    if (action.type === 'SET_USER_PREFERENCES') {        
        return action.payload;
    } 
    return state;
}

// stores all userPreferences for new users, which will
// eventually be posted to DB once new user form is complete
function newUserPreferences(state={}, action) {
    switch(action.type) {
        case 'ADD_METRICS':
            const name = action.payload.name;
            const age = action.payload.age;
            const weight = action.payload.weight;
            const height = action.payload.height;
            return {...state, name: name, age: age, weight: weight, height: height};
        case 'ADD_ROUTINE':
            const days_per_week = action.payload.daysPerWeek;
            const routine = action.payload.routine;
            return {...state, days_per_week: days_per_week, routine: routine};
    }
    return state;
}

export default combineReducers({
    userPreferences,
    newUserPreferences,
});