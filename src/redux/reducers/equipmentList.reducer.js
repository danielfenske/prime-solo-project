const equipmentList = (state=[], action) => {
    if (action.type === 'SET_EQUIPMENT_LIST') {
        return action.payload;
    } 
    return state;
}

export default equipmentList;