import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postUserForm(action) {
    try {
      
      
    } catch {
      console.log('Error POSTING user preferences');
    }
  }
  
  function* userSignupSaga() {
    yield takeLatest('POST_USER_FORM', postUserForm);
  }
  
  export default userSignupSaga;