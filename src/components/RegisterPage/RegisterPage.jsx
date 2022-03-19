import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import Footer from '../Footer/Footer';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className="appContainer">
      <RegisterForm />
      <p>
        existing user?
      </p>
      <button
        type="button"
        className="btn btn_asLink"
        onClick={() => {
          history.push('/login');
        }}
      >
        login
      </button>
      <Footer/>
    </div>
  );
}

export default RegisterPage;
