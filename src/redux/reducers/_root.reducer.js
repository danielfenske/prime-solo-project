import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';

// QuickLift reducers
import dailyWorkout from './dailyWorkout.reducer';
import userProfile from './userProfile.reducer';
import newUserForm from './newUserForm.reducer';
import equipment from './equipment.reducer';
import userMaxes from './userMaxes.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  dailyWorkout, // holds dailyWorkout array
  userProfile, // holds all data related to user
  newUserForm, // holds all data for new users
  equipment, // holds equipment arrays for user and DB
  userMaxes, // holds user's exercise maxes
});

export default rootReducer;
