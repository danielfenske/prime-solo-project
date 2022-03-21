import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

import './LoginForm.scss';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

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
    <div className="formContainer">
    <form onSubmit={login}>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
          <input
            placeholder="enter username"
            autocomplete="off"
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
  
          <input
            placeholder="enter password"
            autocomplete="off"
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        {/* <input className="btn" type="submit" name="submit" value="Log In" /> */}
        <button type="submit">LOGIN</button>
    </form>
    <div>
    <p>new user?<button className="createActBtn" type="button" onClick={() => {history.push('/registration');}}>
      create account
    </button></p>
  </div>
  </div>
  );
}

export default LoginForm;
