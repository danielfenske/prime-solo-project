import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getDailyWorkout(action) {
    try {

      let dayOfWeek = 4;
      let phase = action.payload.phase;
      
      // POST request grabs dailyWorkout from server and sends user values in req.body
      const response = yield axios.post(`/api/workout/`, {dayOfWeek, phase});
      
      // sends response to be stored in redux state
      yield put ({ type: 'SET_DAILY_WORKOUT', payload: response.data});
   
    } catch (error) {
      console.log('Error GETTING workout', error);
    }
  }


function* swapExercise(action) {
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
      // gets latest workout stored in DB for user
      const response = yield axios.get(`/api/workout/current`);

      // sets daily workout reducer with response provided from server
      yield put ({type: 'SET_DAILY_WORKOUT', payload: response.data});

    } catch (error) {
      console.log('error GETTING current workout', error);   
    }
}

function* updateExercise(action) {
    let exerciseId = action.payload.exerciseId;
    let isComplete = action.payload;
        
    try {

      // sends exercise and completion status whenever value is changed by user
      // isComplete will either be TRUE or FALSE
      yield axios.put(`api/workout/update/${exerciseId}`, isComplete);

      // GRAB latest workout from DB
      yield put ({type: 'FETCH_CURRENT_WORKOUT'});
      
    } catch (error) {
      console.log('error UPDATING exercise', error);
    }
}
  
function* dailyWorkoutSaga() {
    yield takeLatest('FETCH_DAILY_WORKOUT', getDailyWorkout);
    yield takeLatest('SWAP_EXERCISE', swapExercise);
    yield takeLatest('FETCH_CURRENT_WORKOUT', getCurrentWorkout);
    yield takeLatest('UPDATE_EXERCISE', updateExercise);
}
  
  export default dailyWorkoutSaga;