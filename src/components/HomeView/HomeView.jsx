import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';



function HomeView() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="appContainer">
      {/* <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}

      {/* QuickLift HomeView */}
      <h1 className="headerText">Welcome back, {user.username}!</h1>

      <FormHelperText>Required</FormHelperText>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default HomeView;
