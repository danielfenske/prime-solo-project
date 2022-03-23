import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import Logo from './quicklift-logo.png';

import './LoginPage.scss';

function LoginPage() {

  return (
    <div className="loginContainer">
      <div className="loginHeader">
        <img src={Logo} className="loginLogo" />
        <h1 className="headerText">QuickLift</h1>
      </div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
