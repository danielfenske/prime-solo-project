import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';

// import DaySelector
import DaySelector from '../DaySelector/DaySelector';

function HomeView() {

  // bring in state stored in redux for all data related to profile
  const userPreferences = useSelector((store) => (store.userProfile.userPreferences));

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  // holds form values 
  const [phase, setPhase] = useState('endurance');
  const [dayOfWeek, setDayOfWeek] = useState(1);

  // initialize useDispatch to connect with SAGA
  const dispatch = useDispatch();
  // initialize useHistory to move user to next screen
  const history = useHistory();

  // grab user profile information on page load
  useEffect(() => {
    dispatch({ type: 'FETCH_USER_PROFILE' });
}, []);

  // handleSubmit grabs form information, sends it to 
  // saga, and pushes user to workout view
  const handleSubmit = () => {
    // eliminate page reload on submit
    event.preventDefault();
    let dailyInfo = {
      phase: phase,
      dayOfWeek: Number(dayOfWeek)
    }

    // dailyInfo will be used in get request made to server
    dispatch({ type: 'SET_DAILY_INFO', payload: dailyInfo });

    // send user to page that displays workout
    history.push('/workout');
  }

  return (
    <div className="appContainer">
      {/* <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}

      {/* QuickLift HomeView */}
      <h1 className="headerText">Welcome back, {userPreferences.name}!</h1>
      <form onSubmit={handleSubmit}>
        <h1 className="subHeaderText">Select phase:</h1>
        <select
          name="phase"
          value={phase}
          onChange={(event) => setPhase(event.target.value)}
        >
          <option value="endurance">endurance</option>
          <option value="hypertrophy">hypertrophy</option>
          <option value="strength">strength</option>
          <option value="power">power</option>
          <option value="maintenance">maintenance</option>
        </select>

        <h1 className="subHeaderText">What day of the week are you on?</h1>
        <select
          name="phase"
          value={dayOfWeek}
          onChange={(event) => setDayOfWeek(event.target.value)}
        >
          <DaySelector 
            daysPerWeek={userPreferences.days_per_week}
          />
        </select>

        <button type="submit">Get Workout</button>
      </form>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default HomeView;
