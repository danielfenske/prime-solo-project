import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />
      <div>
        <p>
          new user?
        </p>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          create account
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
