import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* getDailyWorkout(action) {
    try {
      let dayOfWeek = action.payload.dayOfWeek;
      let phase = action.payload.phase;
      
      const response = yield axios.get(`/api/workout/${dayOfWeek}/${phase}`);
      console.log('response', response.data);
    } catch {
      console.log('Error GETTING workout');
    }
  }
  
  function* dailyInfoSaga() {
    yield takeLatest('SET_DAILY_INFO', getDailyWorkout);
  }
  
  export default dailyInfoSaga;