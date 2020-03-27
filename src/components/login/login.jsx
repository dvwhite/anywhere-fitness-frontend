import React, { useState } from 'react';
import loginImg from "../../login.png";
import { useHistory } from 'react-router-dom';

// Redux imports
import { useDispatch } from 'react-redux';

// Actions
import { login } from './../../actions/actions';

export const Login = props => {
  // Local State
  const [input, setInput] = useState({ username: "", password: "", role: 1 });
  
  // Utility hooks
  const history = useHistory();
  const dispatch = useDispatch();

  // Event handlers
  const handleChange = e => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(input, history)); // action creator
  };

  return(
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
              <img src={loginImg} alt='login lock symbol'/>
          </div>
          <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="username">Username: </label>
                  <input type="text" name="username" placeholder="Please enter your username" value={input.username} onChange={handleChange}/>
              </div>

              <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <input type="text" name="password" placeholder="Please enter your password" value={input.password} onChange={handleChange}/>
              </div>

              <div className="form-group">
                  <label htmlFor="role">Sign In As: </label>
                  <select onChange={handleChange} name="role">
                      <option value={1}>Client</option>
                      <option value={2}>Instructor</option>
                  </select>
              </div>
          </form>
        </div>
        <div className="footer">
            <button type="submit" className="btn" onClick={handleSubmit}>Log In</button>
        </div>
      </div>
  );
}
