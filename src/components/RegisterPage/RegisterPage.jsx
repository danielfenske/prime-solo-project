import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import Logo from './quicklift-logo.png';

import './RegisterPage.scss';

function RegisterPage() {
  return (
    <div className="registerContainer">
      <img src={Logo} className="registerLogo" />
      <h1 className="headerText">QuickLift</h1>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
