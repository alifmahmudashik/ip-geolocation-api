# IP Geolocation API

This is a simple Node.js-based IP Geolocation API that provides geographic location data (like country, city, region, latitude, and longitude) based on the provided IP address. It uses the `geoip-lite` library to map IP addresses to their corresponding geolocation data.

## Features

- Get the location of any IP address.
- Returns country, region, city, latitude, and longitude.
- Fast and lightweight using `geoip-lite`.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alifmahmudashik/ip-geolocation-api.git

2. Navigate to the project directory:

   ```bash
   cd ip-geolocation-api
   
3. Install the dependencies:

   ```bash
   npm install

## Usage

1. Start the server:

   ```bash
   node server.js
   
2. Make a request to the API (default port: 3000):

   - To get the geolocation of your current IP:

      ```bash
      http://localhost:3000/geolocation

   - To get the geolocation of a specific IP address (e.g., 8.8.8.8):
   
      ```bash
      http://localhost:3000/geolocation?ip=8.8.8.8

   - Example Response
      ```bash
      {
        "ip": "8.8.8.8",
        "country": "US",
        "region": "CA",
        "city": "Mountain View",
        "latitude": 37.386,
        "longitude": -122.0838
      }

## License

This project is licensed under the MIT License

