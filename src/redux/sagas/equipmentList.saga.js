import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

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

  function* equipmentListSaga() {
    yield takeLatest('FETCH_EQUIPMENT_LIST', getEquipmentList);
  }

  export default equipmentListSaga;