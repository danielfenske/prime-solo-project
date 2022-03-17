import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
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
    </div>
  );
}

export default RegisterPage;
