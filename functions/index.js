const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.post('/bookings', async (req, res) => {
  try {
    const bookingData = {
      ...req.body,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    };

    const docRef = await db.collection('bookings').add(bookingData);
    res.status(201).json({ success: true, id: docRef.id });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

exports.api = functions.https.onRequest(app);
