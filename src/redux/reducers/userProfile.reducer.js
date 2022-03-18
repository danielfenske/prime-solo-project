import { combineReducers } from "redux";

const userPreferences = (state={}, action) => {
    if (action.type === 'SET_USER_PREFERENCES') {
        console.log('action.payload', action.payload);
        
        return action.payload;
    } 
    return state;
}

const userEquipment = (state=[], action) => {
    if (action.type === 'SET_USER_EQUIPMENT') {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    userPreferences,
    userEquipment,
});