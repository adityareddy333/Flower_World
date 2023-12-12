const express = require('express');
const server = express();
const cors = require("cors");
const bodyParser = require('body-parser');
server.use(cors());
server.use(bodyParser.json());
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Adityastore');
  console.log("db connected");
}

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  contactNo: String,
  address: String
});

const User = mongoose.model('User', userSchema);

// Create (POST)
server.post("/demo", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      contactNo: req.body.contactNo,
      address: req.body.address
    });

    const doc = await user.save();
    console.log(doc);
    res.json(doc);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read (GET)
server.get("/demo", async (req, res) => {
  try {
    const docs = await User.find({}, { name: 1, username: 1, contactNo: 1, address: 1 });
    res.json(docs);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update (PUT)
server.put("/demo/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          password: req.body.password,
          contactNo: req.body.contactNo,
          address: req.body.address,
          name: req.body.name
        }
      },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete (DELETE)
server.delete("/demo/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    res.json(deletedUser);
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

server.listen(8088, () => {
  console.log("Server started");
});
