import { combineReducers } from "redux";

// equipmentList holds complete list of equipment 
// users can select
const equipmentList = (state = [], action) => {
    if (action.type === 'SET_EQUIPMENT_LIST') {
        return action.payload;
    }
    return state;
}

// userEquipmentList holds all equipment denoted available by user
const userEquipmentList = (state = [], action) => {
    if (action.type === 'SET_USER_EQUIPMENT') {
        return action.payload;
    }
    return state;
}

// newUserEquipmentList denotes all equipment denoted available by 
// a new user. 
    // Note: '2' as initial state represents 'body weight' id. This is automatically
    // added to a user's list of equipment available because that is needed at a minimum
    // to select a workout (body weight is also available to users by default)
const newUserEquipmentList = (state = ['2'], action) => {
    if (action.type === 'ADD_EQUIPMENT') {
        return [...state, action.payload];
    } else if (action.type === 'REMOVE_EQUIPMENT') {
        let newState = state.filter(equipment => equipment !== action.payload);
        return newState;
    }
    return state;
}

export default combineReducers({
    equipmentList,
    userEquipmentList,
    newUserEquipmentList
});