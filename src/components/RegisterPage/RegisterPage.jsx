import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import Logo from './quicklift-logo.png';

function RegisterPage() {
  return (
    <div className="loginContainer">
      <div className="loginHeader">
        <img src={Logo} className="loginLogo" />
        <h1 className="headerText">QuickLift</h1>
      </div>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
