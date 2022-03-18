import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';

// QuickLift SAGAS
import dailyInfoSaga from './dailyInfo.saga';
import userProfileSaga from './userProfile.saga';
import userSignupSaga from './userSignup.saga';
import userMaxesSaga from './userMaxes.saga';
import equipmentListSaga from './equipmentList.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    // QuickLift SAGAS
    dailyInfoSaga(),
    userProfileSaga(),
    userSignupSaga(),
    userMaxesSaga(),
    equipmentListSaga(),
  ]);
}
