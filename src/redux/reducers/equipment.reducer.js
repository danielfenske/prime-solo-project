import {
    combineReducers
} from "redux";

const equipmentList = (state = [], action) => {
    if (action.type === 'SET_EQUIPMENT_LIST') {
        return action.payload;
    }
    return state;
}

const userEquipmentList = (state = [], action) => {
    if (action.type === 'SET_USER_EQUIPMENT') {
        return action.payload;
    }
    return state;
}

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