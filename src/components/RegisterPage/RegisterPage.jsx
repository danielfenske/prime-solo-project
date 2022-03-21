import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import Logo from './quicklift-logo.png';

import './RegisterPage.scss';

function RegisterPage() {
  const history = useHistory();

  return (
    // <div className="appContainer">
    //   <RegisterForm />
    //   <p>
    //     existing user?
    //   </p>
    //   <button
    //     type="button"
    //     className="btn btn_asLink"
    //     onClick={() => {
    //       history.push('/login');
    //     }}
    //   >
    //     login
    //   </button>
    //   <Footer/>
    // </div>

    <div className="registerContainer">
      <img src={Logo} className="registerLogo" />
      <h1 className="headerText">QuickLift</h1>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
