import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// SAGA will post user preferences + equipment available on submission
function* postUserForm(action) {
    try {
      
      
    } catch {
      console.log('Error POSTING user preferences');
    }
  }

  function* getEquipmentList(action) {
    
    try {
      
      // GET equipment list stored in database
      const response = yield axios.get(`api/signup/equipment`);

      // sends response to be stored in redux state
      yield put ({ type: 'SET_EQUIPMENT_LIST', payload: response.data});

    } catch {
      console.log('error GETTING workout');
    }
  }
  
  function* userSignupSaga() {
    yield takeLatest('FETCH_EQUIPMENT_LIST', getEquipmentList);
    yield takeLatest('POST_USER_FORM', postUserForm);
  }
  
  export default userSignupSaga;