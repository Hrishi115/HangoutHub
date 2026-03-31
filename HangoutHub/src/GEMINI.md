# HangoutHub - Gemini Context

This document provides essential context and instructions for AI agents working on the HangoutHub project.

## Project Overview

HangoutHub is a React-based web application designed to help users discover and explore popular hangout spots in Mumbai. Users can search for places, filter them by category, and "like" their favorite locations.

### Core Technologies
- **Frontend:** React (Vite-based)
- **Database/Backend:** Firebase Firestore
- **Analytics:** Firebase Analytics
- **Styling:** Vanilla CSS

## Directory Structure (src/)

- `assets/`: Static assets like images and SVGs.
- `components/`: Reusable React components (e.g., `PlaceCard`, `Footer`).
- `data/`: Local data files, including `placesData.js` used for initialization or fallback.
- `pages/`: Main application pages (e.g., `Home`).
- `styles/`: Global CSS styles.
- `firebase.js`: Firebase configuration and initialization.
- `App.jsx`: Main application layout and high-level components.
- `main.jsx`: Entry point for the React application.

## Building and Running

*Note: Commands are assumed based on standard Vite/React project structures as the root `package.json` is outside the current workspace scope.*

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Preview Build:** `npm run preview`

## Development Conventions

- **Components:** Use functional components with React hooks (`useState`, `useEffect`).
- **Styling:** Each component or page should have its own corresponding `.css` file. Global styles are maintained in `src/styles/global.css`.
- **Data Fetching:** Data is fetched from the Firebase Firestore `places` collection.
- **State Management:** Local state is managed using the `useState` hook.

## Technical Details & Integration

### Firebase
- The app uses Firestore to store and update "likes" for different places.
- Firestore collection name: `places`.
- Configuration is located in `src/firebase.js`.

### Search & Filtering
- Filtering is implemented on the `Home` page based on place names, types, and locations.
- Category buttons allow for quick filtering of common types (Cafe, Outdoor, Cinema).

## Security & Best Practices

- **API Keys:** Firebase configuration keys are currently hardcoded in `src/firebase.js`. 
  - **TODO:** Migrate these to environment variables (`.env`) for better security.
- **Data Integrity:** The `handleLikes` function in `Home.jsx` optimistically updates the UI before syncing with Firestore. Ensure error handling is added for production readiness.
