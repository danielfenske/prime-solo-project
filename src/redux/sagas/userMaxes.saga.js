import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

  function* addUserMax() {
    try {
      console.log('action.payload', action.payload);
      // yield axios.post(`/api/preferences/maxes`, action.payload);
    } catch (error) {
      console.log('Error POSTING max', error);
      
    }
  }

  function* deleteUserMax() {
      try{
          console.log('action.payload', action.payload);
          
      } catch (error) {
          console.log('Error DELETING max', error);   
      }
  }
  
  function* userMaxesSaga() {
    yield takeLatest('ADD_MAX', addUserMax);
    yield takeLatest('DELETE_MAX'. deleteUserMax);
  }
  
  export default userMaxesSaga;