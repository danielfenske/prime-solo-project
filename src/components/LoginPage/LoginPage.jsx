import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Logo from './quicklift-logo.png';

import './LoginPage.scss';

function LoginPage() {
  const history = useHistory();

  return (
    <div className="loginContainer">
      <img src={Logo} className="loginLogo"/>
      <h1 className="headerText">QuickLift</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
