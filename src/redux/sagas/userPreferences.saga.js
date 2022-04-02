import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getUserPreferences() {
  try {

    // GET request grabs user preferences
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

    // posts user preferences once new user form is complete
    yield axios.post(`api/preferences`, newUserPreferences);

    // fetches user to redirect new user to existing user home page
      // note: user will be redirected to beginning of form if latest user is not fetched
    yield put({type: 'FETCH_USER'});

    // fetches user preferences to be store in redux
    yield put({type: 'FETCH_USER_PREFERENCES'});

  } catch (error) {
    console.log('Error POSTING user preferences', error);
  }
}

function* updateMetrics(action) {
  try {
    const updatedMetrics = action.payload;

    // sends updated metrics (weight, age, height, name) to be updated in DB
    yield axios.put(`api/preferences/metrics/edit`, updatedMetrics);

    // fetches latest preferences from DB to be stored in reducer 
    yield put({type: 'FETCH_USER_PREFERENCES'});

  } catch (error) {
    console.log('Error UPDATING user metrics', error);
  }
}

function* updateRoutine(action) {
  try {
    const updatedRoutine = action.payload;

    // sends updated routine (days/week, full_body or split) to be updated in DB
    yield axios.put(`api/preferences/routine/edit`, updatedRoutine);

    // fetches latest preferences from DB to be stored in reducer 
    yield put({type: 'FETCH_USER_PREFERENCES'});
  } catch(error) {
    console.log('Error UPDATING routine', error);
    
  }
}
  
  function* userPreferencesSaga() {
    yield takeLatest('FETCH_USER_PREFERENCES', getUserPreferences);
    yield takeLatest('POST_USER_PREFERENCES', postUserPreferences);
    yield takeLatest('UPDATE_METRICS', updateMetrics);
    yield takeLatest('UPDATE_ROUTINE', updateRoutine);
  }
  
  export default userPreferencesSaga;