import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './LoginForm.scss';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <div className="loginFormContainer">
      <form onSubmit={login}>
        {errors.loginMessage && (
          <p className="alert" role="alert">
            {errors.loginMessage}
          </p>
        )}
        <input
          placeholder="enter username"
          autoComplete="off"
          type="text"
          name="username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <input
          placeholder="enter password"
          autoComplete="off"
          type="password"
          name="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className="primaryButton smallButton">LOGIN</button>
      </form>
      <div>
        <p>new user?<button className="createActBtn" type="button" onClick={() => { history.push('/registration'); }}>
          create account
        </button></p>
      </div>
    </div>
  );
}

export default LoginForm;
