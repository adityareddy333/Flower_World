import React, { useState, useEffect } from 'react';
import '../style/order.css';

function Order() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    flower: '',
    no: '',
    address: '',
  });
  const [editingUser, setEditingUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    // Fetch the user data when the component mounts
    fetch('http://localhost:8089/order')
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

  const handleSignup = (e) => {
    e.preventDefault();

    // Post new user data to the server
    fetch('http://localhost:8089/order', {
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
          flower: '',
          no: '',
          address: '',
        });
        setErrorMessage('');
        setOrderConfirmed(true); // Set the order confirmation state to true
      })
      .catch((error) => console.error('Error creating user:', error));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      flower: user.flower,
      no: user.no,
      address: user.address,
    });
  };

  const handleDelete = (userId) => {
    // Delete user data from the server
    fetch(`http://localhost:8089/order/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(users.filter((user) => user._id !== data._id));
      })
      .catch((error) => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <h2 id="user">Order Form</h2>
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
        <label htmlFor="flower">Flower:</label>
        <input
          type="text"
          id="flower"
          name="flower"
          value={formData.flower}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="no">Item No.:</label>
        <input
          type="text"
          id="no"
          name="no"
          value={formData.no}
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
        {orderConfirmed && (
          <div style={{ color: 'green' }}>Your Order Is Confirmed. THANK YOU!</div>
        )}
        <button type="submit" id="btn">
          {editingUser ? 'Update' : 'Confirm Order'}
        </button>
      </form>

      <h2>Order List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.flower} - {user.no} - {user.address}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Order;
