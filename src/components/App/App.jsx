import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

// QuickLift components 
import HomeView from '../HomeView/HomeView';
import WorkoutView from '../WorkoutView/WorkoutView';
import ProfileView from '../ProfileView/ProfileView';
import MaxesView from '../MaxesView/MaxesView';
import MetricsForm from '../MetricsForm/MetricsForm';
import RoutineForm from '../RoutineForm/RoutineForm';
import EquipmentForm from '../EquipmentForm/EquipmentForm';
import ReviewForm from '../ReviewForm/ReviewForm';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  console.log('user.form_complete', user.form_complete);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          {/* LOGIN / ABOUT VIEWS */}
          <Redirect exact from="/" to="home" />

          <Route exact path="/login">
            {user.id ?
              <Redirect to="/home" />
              :
              <LoginPage />}
          </Route>

          <Route exact path="/registration">
            {user.id ?
              <Redirect to="/home" />
              :
              <RegisterPage />}
          </Route>


          {/* NEW USER VIEWS */}
          <ProtectedRoute exact path="/metrics">
            {user.form_complete ?
              <Redirect to="/home" />
              :
              <MetricsForm />}
          </ProtectedRoute>

          <ProtectedRoute exact path="/routine">
            {user.form_complete ?
              <Redirect to="/home" />
              :
              <RoutineForm />}
          </ProtectedRoute>

          <ProtectedRoute exact path="/equipment">
            {user.form_complete ?
              <Redirect to="/home" />
              :
              <EquipmentForm />}
          </ProtectedRoute>

          <ProtectedRoute exact path="/maxes">
            <MaxesView />
          </ProtectedRoute>

          {/* EXISTING USER VIEWS */}
          <ProtectedRoute exact path="/home">
            {user.form_complete ?
              <HomeView />
              :
              <Redirect to="/metrics" />}
          </ProtectedRoute>

          <ProtectedRoute exact path="/workout">
            {user.form_complete ?
              <WorkoutView />
              :
              <Redirect to="/metrics" />}
          </ProtectedRoute>

          <ProtectedRoute exact path="/profile">
            {user.form_complete ?
              <ProfileView />
              :
              <Redirect to="/metrics" />}
          </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
