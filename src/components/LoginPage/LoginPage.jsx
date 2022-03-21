import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import Logo from './quicklift-logo.png';

import './LoginPage.scss';

function LoginPage() {

  return (
    <div className="loginContainer">
      <img src={Logo} className="loginLogo"/>
      <h1 className="headerText">QuickLift</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
