const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin with your service account
const serviceAccount = require('./vico-fruit-juice-firebase-adminsdk-fbsvc-ce788aad4f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// API Endpoint for Bookings
app.post('/api/bookings', async (req, res) => {
  try {
    const bookingData = {
      ...req.body,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    };

    const docRef = await db.collection('bookings').add(bookingData);
    
    console.log('Booking saved to Firestore:', docRef.id);
    res.status(201).json({ success: true, id: docRef.id });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Vico Backend running on http://localhost:${PORT}`);
});
