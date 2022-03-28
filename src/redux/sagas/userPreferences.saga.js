import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getUserPreferences() {
  try {

    // GET requests grabs user preferences
    const preferencesResponse = yield axios.get(`/api/preferences/`);
    
    // sends response to be stored in redux state
    yield put ({ type: 'SET_USER_PREFERENCES', payload: preferencesResponse.data});
    
  } catch (error) {
    console.log('Error GETTING profile', error);
  }
}

function* postUserPreferences(action) {
  try {

    const newUserPreferences = action.payload;
    
    yield axios.post(`api/preferences`, newUserPreferences);
    yield put({type: 'FETCH_USER'});
    yield put({type: 'FETCH_USER_PREFERENCES'});

  } catch (error) {
    console.log('Error POSTING user preferences', error);
  }
}

function* updateMetrics(action) {
  try {
    const updatedMetrics = action.payload;

    yield axios.put(`api/preferences/metrics/edit`, updatedMetrics);
    yield put({type: 'FETCH_USER_PREFERENCES'});

  } catch (error) {
    console.log('Error UPDATING user metrics', error);
  }
}
  
  function* userPreferencesSaga() {
    yield takeLatest('FETCH_USER_PREFERENCES', getUserPreferences);
    yield takeLatest('POST_USER_PREFERENCES', postUserPreferences);
    yield takeLatest('UPDATE_METRICS', updateMetrics);
  }
  
  export default userPreferencesSaga;