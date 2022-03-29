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

function* updateEquipmentList(action) {
  const updatedEquipmentList = action.payload;
  
  yield axios.put(`api/preferences/equipment/edit`, updatedEquipmentList);
  yield put({type: 'FETCH_USER_EQUIPMENT_LIST'});
}

function* equipmentListSaga() {
  yield takeLatest('FETCH_EQUIPMENT_LIST', getEquipmentList);
  yield takeLatest('FETCH_USER_EQUIPMENT_LIST', getUserEquipmentList);
  yield takeLatest('UPDATE_EQUIPMENT_LIST', updateEquipmentList);
}

export default equipmentListSaga;