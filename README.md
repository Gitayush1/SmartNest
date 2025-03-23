# SmartNest - Real Estate Management Platform

## Overview
SmartNest is a MERN stack-based real estate management platform that allows users to search, list, and book property visits. The application features real-time chat and interactive map-based property filtering for a seamless user experience.

## Features
- **User Authentication**: Secure login and registration using JWT.
- **Property Listings**: Browse, filter, and search for real estate properties.
- **Interactive Maps**: Use React Leaflet for location-based property searches.
- **Booking System**: Schedule and manage property visits.
- **Real-time Chat**: Connect with property owners and agents via Socket.io.
- **Responsive UI**: SCSS for enhanced styling and user experience.

## Tech Stack
- **Frontend**: React, Redux, Axios, SCSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT-based authentication
- **Real-time Communication**: Socket.io for live chat
- **Maps Integration**: React Leaflet for property visualization

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/SmartNest.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SmartNest
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
4. Set up environment variables in `.env` (Refer to `.env.example` for required variables).
5. Start the development server:
   ```bash
   cd client && npm run dev
   cd ../server && npm run dev
   ```

## Usage
- **Search Properties**: Find properties based on location and filters.
- **List Properties**: Owners can add and manage property listings.
- **Book Visits**: Schedule property visits with owners.
- **Chat in Real-time**: Communicate directly with agents or propert
