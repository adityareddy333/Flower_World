import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Signup.css';

function Signup() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    contactNo: '',
    address: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    // Fetch the user data when the component mounts
    fetch('http://localhost:8088/demo')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isUsernameTaken = (username) => {
    return users.some((user) => user.username === username);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { username } = formData;

    if (isUsernameTaken(username)) {
      setErrorMessage('Username already exists. Please choose a different one.');
      return;
    }

    // If editUserId has a value, update the existing user
    if (editUserId) {
      updateUser(editUserId);
    } else {
      // Post new user data to the server
      fetch('http://localhost:8088/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          setUsers([...users, data]);
          setFormData({
            name: '',
            username: '',
            password: '',
            contactNo: '',
            address: '',
          });
          setErrorMessage('');
        })
        .catch((error) => console.error('Error creating user:', error));
    }
  };

  const handleEdit = (userId) => {
    // Find the user by ID
    const userToEdit = users.find((user) => user._id === userId);

    // Set the form data with the user's information
    setFormData({
      name: userToEdit.name,
      username: userToEdit.username,
      password: userToEdit.password,
      contactNo: userToEdit.contactNo,
      address: userToEdit.address,
    });

    // Set the editUserId to the selected user's ID
    setEditUserId(userId);
  };

  const handleDelete = (userId) => {
    // Delete the user on the server
    fetch(`http://localhost:8088/demo/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        // Update the state to remove the deleted user
        setUsers(users.filter((user) => user._id !== userId));
      })
      .catch((error) => console.error('Error deleting user:', error));
  };

  const updateUser = (userId) => {
    // Update the existing user on the server
    fetch(`http://localhost:8088/demo/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        // Update the state to reflect the changes
        setUsers(users.map((user) => (user._id === userId ? updatedUser : user)));
        setFormData({
          name: '',
          username: '',
          password: '',
          contactNo: '',
          address: '',
        });
        setEditUserId(null);
      })
      .catch((error) => console.error('Error updating user:', error));
  };

  return (
    <div>
      <h2 id="user">{editUserId ? 'Edit User' : 'User Form'}</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <br />
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
        <label htmlFor="contactNo">Contact Number:</label>
        <input
          type="text"
          id="contactNo"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="address">Address:</label>
        <br />
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <br />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <button type="submit" id="btn">
          {editUserId ? 'Update' : 'Submit'}
        </button>
        {editUserId && (
          <button type="button" onClick={() => setEditUserId(null)}>
            Cancel Edit
          </button>
        )}
        <p>
          Already have an account? <Link to="/login">Login here</Link>.
        </p>
      </form>

      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.username} - {user.contactNo} - {user.address}
            <button onClick={() => handleEdit(user._id)}>Edit</button>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Signup;
