// Update your server-side code to handle only 'username' and 'password'
const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');
server.use(cors());
server.use(bodyParser.json());
const mongoose = require('mongoose');
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Adityastore');
  console.log('db connected');
}

const loginSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const login = mongoose.model('login', loginSchema);

// Create (POST)
server.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await login.findOne({ username });

    if (existingUser) {
      res.status(400).json({ error: 'Username already exists' });
    } else {
      const newLogin = new login({
        username,
        password,
      });

      const doc = await newLogin.save();
      console.log(doc);
      res.json({ username: doc.username, message: 'User created successfully' });
    }
  } catch (error) {
    console.error('Error creating login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Your other endpoints (Update, Delete) can remain unchanged.

server.listen(8087, () => {
  console.log('Server started');
});
