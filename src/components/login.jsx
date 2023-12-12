import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/login.css';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { username, password } = formData;

    // Post new user data to the server
    fetch('http://localhost:8087/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          // Handle successful signup, if needed
        }
      })
      .catch((error) => console.error('Error creating user:', error));
  };

  return (
    <div>
      <h2 id="user">Login</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <br />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <button type="submit" id="btn">
          Submit
        </button>
        <p>
          Don't have an account? <Link to="/Signup">Sign up</Link>.
        </p>
      </form>
    </div>
  );
}

export default Login;
