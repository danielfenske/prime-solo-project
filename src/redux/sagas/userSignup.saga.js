import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// SAGA will post user preferences + equipment available on submission
function* postUserForm(action) {
    try {      
      
    } catch {
      console.log('Error POSTING user preferences');
    }
  }
  
  function* userSignupSaga() {
    yield takeLatest('POST_USER_PREFERENCES', postUserForm);
    // yield takeLatest('POST_EQUIPMENT_LIST', postUserForm);
  }
  
  export default userSignupSaga;