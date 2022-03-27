import axios from 'axios';
import { put,takeLatest} from 'redux-saga/effects';


function* getUserMaxes(action) {

    try {
        switch (action.payload) {
            case 'chest':
                const chestResponse = yield axios.get(`/api/preferences/maxes/chest`);
                yield put({type: 'SET_CHEST_MAXES', payload: chestResponse.data});
                break;

            case 'back':
                const backResponse = yield axios.get(`/api/preferences/maxes/back`);
                yield put({type: 'SET_BACK_MAXES', payload: backResponse.data});
                break;

            case 'legs':
                const legsResponse = yield axios.get(`/api/preferences/maxes/legs`);
                yield put({type: 'SET_LEGS_MAXES', payload: legsResponse.data});
                break;

            case 'arms':
                const armsResponse = yield axios.get(`/api/preferences/maxes/arms`);
                yield put({type: 'SET_ARMS_MAXES', payload: armsResponse.data});
                break;
        }

    } catch (error) {
        console.log('Error GETTING maxes', error);
    }
}

function* postUserMax(action) {
    try {
        yield axios.post(`/api/preferences/maxes`, action.payload);
        yield put({type: 'FETCH_USER_MAXES'});
    } catch (error) {
        console.log('Error POSTING max', error);

    }
}

function* deleteUserMax(action) {    

    let id = action.payload.id;
    let muscleGroup = action.payload.muscleGroup;

    try {
        yield axios.delete(`/api/preferences/maxes/${id}`);
        yield put({type: 'FETCH_USER_MAXES', payload: muscleGroup});
    } catch (error) {
        console.log('Error DELETING max', error);
    }
}

function* userMaxesSaga() {
    yield takeLatest('FETCH_USER_MAXES', getUserMaxes);
    yield takeLatest('ADD_MAX', postUserMax);
    yield takeLatest('DELETE_MAX', deleteUserMax);
}

export default userMaxesSaga;