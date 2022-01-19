import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { addUser } from '../store/userSlice.middlewares'

export default function Signup() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addUser({ username, email, password }))
  }

  return (
    <div className="sign">
      <div className="container">
        <div className="sign_panel">
          <h2 className="sign_panel_title">Sign up</h2>
          <form onSubmit={handleSubmit}>
            <p className="sign_panel_text">Username</p>
            <input value={username} onChange={(e) => setUsername(e.currentTarget.value)} type="text" />
            <p className="sign_panel_text">Email</p>
            <input value={email} onChange={(e) => setEmail(e.currentTarget.value)} type="text" />
            <p className="sign_panel_text">Password</p>
            <input value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password" />
            <button type="submit">Sign up</button>
            <Link to="/" className="login_btn">
              Go Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}