import axios from 'axios';
import { put,takeLatest} from 'redux-saga/effects';

function* getEquipmentList() {
  try {
    // GET equipment list stored in database
    const equipmentResponse = yield axios.get(`api/signup/equipment`);

    // sends response to be stored in redux state
    yield put({type: 'SET_EQUIPMENT_LIST', payload: equipmentResponse.data});

  } catch (error) {
    console.log('error GETTING workout', error);
  }
}

function* getUserEquipmentList(action) {
  // GET request grabs array of all equipment related to user
  const userEquipmentResponse = yield axios.get(`/api/preferences/equipment`);

  // sends list to be stored in reducer
  yield put ({ type: 'SET_USER_EQUIPMENT', payload: userEquipmentResponse.data});
}

function* postEquipment (action) {
  try {
    const equipmentId = action.payload;

    // DELETE newUser equipment id from DB to eliminate duplicate values
    yield axios.delete(`api/signup/equipment/${equipmentId}`);

    // POST newUser equipment id to DB
    yield axios.post(`api/signup/equipment/${equipmentId}`);

  } catch (error) {
    console.log('error POSTING exercise', error);

  }
}

function* deleteEquipment(action) {
  try {
    const equipmentId = action.payload;

    // DELETE newUser equipment id from DB
    yield axios.delete(`api/signup/equipment/${equipmentId}`);

  } catch (error) {
    console.log('error DELETING exercise', error);

  }
}

function* equipmentListSaga() {
  yield takeLatest('FETCH_EQUIPMENT_LIST', getEquipmentList);
  yield takeLatest('FETCH_USER_EQUIPMENT_LIST', getUserEquipmentList);
  yield takeLatest('POST_EQUIPMENT', postEquipment);
  yield takeLatest('DELETE_EQUIPMENT', deleteEquipment);
}

export default equipmentListSaga;