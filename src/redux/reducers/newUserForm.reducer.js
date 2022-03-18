import { combineReducers } from "redux";

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

const newUserEquipmentList = (state=['body weight'], action) => {
    if (action.type === 'ADD_EQUIPMENT') {
        return [...state, action.payload];
    } else if (action.type === 'REMOVE_EQUIPMENT') {
        let newState = state.filter(equipment => equipment !== action.payload);
        return newState; 
    }
    return state;
}


export default combineReducers({
    newUserPreferences,
    newUserEquipmentList,
});