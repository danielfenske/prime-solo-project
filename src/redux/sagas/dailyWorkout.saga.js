import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* getDailyWorkout(action) {
    try {

      let dayOfWeek = action.payload.dayOfWeek;
      let phase = action.payload.phase;
      
      // GET request grabs dailyWorkout from server and sends user values as params
      const response = yield axios.get(`/api/workout/${dayOfWeek}/${phase}`);
      
      // sends response to be stored in redux state
      yield put ({ type: 'SET_DAILY_WORKOUT', payload: response.data});

      
    } catch (error) {
      console.log('Error GETTING workout', error);
    }
  }

  function* updateExercise(action) {
    try {
      let target = action.payload.target;
      let id = action.payload.id;

      // UPDATE exercise in same target group
      yield axios.put(`/api/workout/swap/${target}/${id}`);

      // GRAB latest workout from DB
      yield put ({type: 'FETCH_CURRENT_WORKOUT'});
      
    } catch (error) {
      console.log('error UPDATING exercise', error);
    }
  }

  function* getCurrentWorkout() {
    try {
      const response = yield axios.get(`/api/workout/current`);

      yield put ({type: 'SET_DAILY_WORKOUT', payload: response.data});

    } catch (error) {
      console.log('error GETTING current workout', error);   
    }
  }
  
  function* dailyWorkoutSaga() {
    yield takeLatest('FETCH_DAILY_WORKOUT', getDailyWorkout);
    yield takeLatest('SWAP_EXERCISE', updateExercise);
    yield takeLatest('FETCH_CURRENT_WORKOUT', getCurrentWorkout);
  }
  
  export default dailyWorkoutSaga;