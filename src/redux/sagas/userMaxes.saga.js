import axios from 'axios';
import { put,takeLatest } from 'redux-saga/effects';

function* addUserMax(action) {
    try {
        yield axios.post(`/api/preferences/maxes`, action.payload);
        yield put({type: 'FETCH_MAXES'});
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
    yield takeLatest('ADD_MAX', addUserMax);
    // yield takeLatest('DELETE_MAX'.deleteUserMax);
}

export default userMaxesSaga;