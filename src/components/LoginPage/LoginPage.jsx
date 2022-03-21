import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';

import './LoginPage.scss';

function LoginPage() {
  const history = useHistory();

  return (
    <div className="loginContainer appContainer">
      <img src="../../../public/images/Quicklift-logo.png" alt="QuickLift logo"/>
      <h1 className="headerText">QuickLift</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
