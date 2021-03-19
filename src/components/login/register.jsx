import React, { useState } from 'react';
import loginImg from '../../login.png';
import { useHistory } from 'react-router-dom';

// Redux imports
import { useDispatch } from 'react-redux';

// Actions
import { register } from '../../actions/actions';

export const Register = (props) => {
  // Local State
  const [input, setInput] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    roleId: 1,
  });

  // Utility hooks
  const history = useHistory();
  const dispatch = useDispatch();

  // Event handlers
  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(
      register(
        {
          username: input.username,
          password: input.password,
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          roleId: input.role,
        },
        history
      )
    ); // action creator
  };

  return (
    <div className='base-container' ref={props.containerRef}>
      <div className='header'>Register</div>
      <div className='content'>
        <div className='image'>
          <img src={loginImg} alt='register lock symbol' />
        </div>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username: </label>
            <input
              type='text'
              name='username'
              placeholder='Please enter your username'
              value={input.username}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password: </label>
            <input
              type='text'
              name='password'
              placeholder='Please enter your password'
              value={input.password}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='firstname'>First Name: </label>
            <input
              type='text'
              name='firstName'
              placeholder='Please enter your first name'
              value={input.firstName}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='lastname'>Last Name: </label>
            <input
              type='text'
              name='lastName'
              placeholder='Please enter your last name'
              value={input.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              name='email'
              placeholder='Please enter your email'
              value={input.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='role'>Register As: </label>
            <select onChange={handleChange} name='role'>
              <option>Select</option>
              <option value={1}>Client</option>
              <option value={2}>Instructor</option>
            </select>
          </div>
        </form>
      </div>
      <div className='footer'>
        <button type='submit' className='btn' onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
};
