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
    
  } catch {
    console.log('Error POSTING user preferences');
  }
}
  
  function* userPreferencesSaga() {
    yield takeLatest('FETCH_USER_PREFERENCES', getUserPreferences);
    yield takeLatest('POST_USER_PREFERENCES', postUserPreferences);
  }
  
  export default userPreferencesSaga;