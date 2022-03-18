function newUserForm(state={}, action) {
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

export default newUserForm;