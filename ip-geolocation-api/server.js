// server.js
const express = require('express');
const geoip = require('geoip-lite');

const app = express();
const PORT = process.env.PORT || 3000;

// Route to handle geolocation requests
app.get('/geolocation', (req, res) => {
  // Get the IP from the request query or use the requester's IP
  const ip = req.query.ip || req.ip;

  // Get the geolocation information using geoip-lite
  const geo = geoip.lookup(ip);

  // If no location data is found, send an error response
  if (!geo) {
    return res.status(404).json({ message: 'Location data not found' });
  }

  // Send the geolocation information as a JSON response
  res.json({
    ip: ip,
    country: geo.country,
    region: geo.region,
    city: geo.city,
    latitude: geo.ll[0],
    longitude: geo.ll[1],
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
