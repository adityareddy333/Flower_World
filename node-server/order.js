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

const orderSchema = new mongoose.Schema({
  name: String,
  flower: String,
  no: String,
  address: String,
});

const Order = mongoose.model('Order', orderSchema);

// Create (POST)
server.post('/order', async (req, res) => {
  try {
    const order = new Order({
      name: req.body.name,
      flower: req.body.flower,
      no: req.body.no,
      address: req.body.address,
    });

    const doc = await order.save();
    console.log(doc);
    res.json(doc);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read (GET)
server.get('/order', async (req, res) => {
  try {
    const docs = await Order.find({}, { name: 1, flower: 1, no: 1, address: 1 });
    res.json(docs);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update (PUT)
server.put('/order/:id', async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          flower: req.body.flower,
          no: req.body.no,
          address: req.body.address,
          name: req.body.name,
        },
      },
      { new: true }
    );

    res.json(updatedOrder);
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete (DELETE)
server.delete('/order/:id', async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    res.json(deletedOrder);
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

server.listen(8089, () => {
  console.log('Server started');
});
