import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (

    <div className="loginFormContainer">
      <form onSubmit={registerUser}>
        {errors.registrationMessage && (
          <p className="alert" role="alert">
            {errors.registrationMessage}
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
        <button type="submit" className="primaryButton smallButton">REGISTER</button>
      </form>
      <div>
        <p>existing user?<button className="createActBtn" type="button" onClick={() => { history.push('/login'); }}>
          login
        </button></p>
      </div>
    </div>
  );
}

export default RegisterForm;
