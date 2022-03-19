import axios from 'axios';
import {
  put,
  takeLatest
} from 'redux-saga/effects';

function* getEquipmentList(action) {

  try {
    // GET equipment list stored in database
    const response = yield axios.get(`api/signup/equipment`);

    // sends response to be stored in redux state
    yield put({
      type: 'SET_EQUIPMENT_LIST',
      payload: response.data
    });

  } catch (error) {
    console.log('error GETTING workout', error);
  }
}

function* postEquipmentList(action) {
  try {
    const equipmentId = action.payload;

    // POST newUser equipment id to DB
    yield axios.post(`api/signup/equipment/${equipmentId}`);

  } catch (error) {
    console.log('error POSTING exercise', error);

  }
}

function* deleteEquipmentList(action) {
  try {
    const equipmentId = action.payload;

    console.log('equipmentId', equipmentId);
    

    // DELETE newUser equipment id from DB
    yield axios.delete(`api/signup/equipment/${equipmentId}`);

  } catch (error) {
    console.log('error DELETING exercise', error);

  }
}

function* equipmentListSaga() {
  yield takeLatest('FETCH_EQUIPMENT_LIST', getEquipmentList);
  yield takeLatest('POST_EQUIPMENT', postEquipmentList);
  yield takeLatest('DELETE_EQUIPMENT', deleteEquipmentList);
}

export default equipmentListSaga;