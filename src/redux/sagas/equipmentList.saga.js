import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getEquipmentList(action) {
    
    try {
      // GET equipment list stored in database
      const response = yield axios.get(`api/signup/equipment`);

      // sends response to be stored in redux state
      yield put ({ type: 'SET_EQUIPMENT_LIST', payload: response.data});

    } catch (error) {
      console.log('error GETTING workout', error);
    }
  }

  function* postEquipmentList(action) {
    try {
      const newUserEquipmentList = action.payload;

      // POST newUser equipment list to DB
      yield axios.post(`api/signup/equipment`, newUserEquipmentList);

    } catch (error) {
      console.log('error POSTING workout', error);
      
    }
  }

  function* equipmentListSaga() {
    yield takeLatest('FETCH_EQUIPMENT_LIST', getEquipmentList);
    yield takeLatest('POST_EQUIPMENT_LIST', postEquipmentList);
  }

  export default equipmentListSaga;