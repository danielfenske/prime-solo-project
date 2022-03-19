import { combineReducers } from "redux";

const equipmentList = (state=[], action) => {
    if (action.type === 'SET_EQUIPMENT_LIST') {
        return action.payload;
    } 
    return state;
}

const userEquipmentList = (state=[], action) => {
    if (action.type === 'SET_USER_EQUIPMENT') {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    equipmentList,
    userEquipmentList,
});