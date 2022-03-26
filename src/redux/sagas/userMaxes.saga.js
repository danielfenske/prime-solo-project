import axios from 'axios';
import { put,takeLatest} from 'redux-saga/effects';


function* getUserMaxes() {
    try {
        // GET requests grabs user maxes
        const maxesResponse = yield axios.get(`/api/preferences/maxes`);

        // sends response to be stored in redux state
        yield put({type: 'SET_USER_MAXES', payload: maxesResponse.data})

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
    try {
        console.log('action.payload', action.payload);

    } catch (error) {
        console.log('Error DELETING max', error);
    }
}

function* userMaxesSaga() {
    yield takeLatest('FETCH_USER_MAXES', getUserMaxes);
    yield takeLatest('ADD_MAX', postUserMax);
    // yield takeLatest('DELETE_MAX'.deleteUserMax);
}

export default userMaxesSaga;