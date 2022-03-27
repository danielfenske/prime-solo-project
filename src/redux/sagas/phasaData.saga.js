import axios from 'axios';
import { put,takeLatest} from 'redux-saga/effects';

function* getPhaseData() {
  try {
    // GET phase data stored in server
    const phaseDataResponse = yield axios.get(`api/workout/phases`);

    // sends response to be stored in redux state
    yield put({type: 'SET_PHASE_DATA', payload: phaseDataResponse.data});

  } catch (error) {
    console.log('error GETTING workout', error);
  }
}

function* phaseDataSaga() {
    yield takeLatest('FETCH_PHASE_DATA', getPhaseData);
  }
  
  export default phaseDataSaga;