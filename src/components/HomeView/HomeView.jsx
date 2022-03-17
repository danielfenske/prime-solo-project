import React, {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function HomeView() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const [phase, setPhase] = useState('endurance');
  const [dayOfWeek, setDayOfWeek] = useState(1);

  let handleSubmit = () => {
    console.log('in handleSubmit');
    event.preventDefault();
    let userDailyInfo = {
      phase: phase,
      dayOfWeek: Number(dayOfWeek)
    }

    console.log(userDailyInfo);
  }

  return (
    <div className="appContainer">
      {/* <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}

      {/* QuickLift HomeView */}
      <h1 className="headerText">Welcome back, {user.username}!</h1>
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
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <button type="submit">Get Workout</button>
      </form>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default HomeView;
