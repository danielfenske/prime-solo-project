import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* userProfileSaga() {
    try {

      // GET requests grabs user preferences + equipment available to them
      const preferencesResponse = yield axios.get(`/api/preferences/`);
      const equipmentResponse = yield axios.get(`/api/preferences/equipment`);

      const maxesResponse = yield axios.get(`/api/preferences/maxes`);
      
      // sends response for both to be stored in redux state
      yield put ({ type: 'SET_USER_PREFERENCES', payload: preferencesResponse.data});
      yield put ({ type: 'SET_USER_EQUIPMENT', payload: equipmentResponse.data});
      yield put ({type: 'SET_USER_MAXES', payload: maxesResponse.data})
      
    } catch (error) {
      console.log('Error GETTING profile', error);
    }
  }

  function* dailyInfoSaga() {
    yield takeLatest('FETCH_USER_PROFILE', userProfileSaga);
  }
  
  export default dailyInfoSaga;