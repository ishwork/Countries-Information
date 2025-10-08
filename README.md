# Countries Information App

A comprehensive React application that displays detailed information about countries around the world. Built with modern web technologies including React, TypeScript, Material-UI, and Redux for state management.

## 🌍 Features

- Browse information for 250+ countries worldwide
- Search countries by name
- View country details including:
  - Flag images
  - Population data
  - Regional information
  - Languages spoken
  - Capital cities
- Add countries to favorites list
- Responsive design with Material-UI components

## 🚀 Live Demo

[https://countries-guide-2025.netlify.app](https://countries-guide-2025.netlify.app)

## 🛠️ Technologies Used

- **React 17** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **Redux + Redux Thunk** - State management
- **Material-UI (MUI)** - UI component library
- **React Router** - Client-side routing
- **REST Countries API v3.1** - Data source

## 🏗️ Architecture

### State Management
The application uses **Redux** for centralized state management with three main reducers:
- `allCountriesReducer` - Manages the list of all countries
- `countryReducer` - Handles individual country details
- `favouriteListReducer` - Manages user's favorite countries

### API Integration
Data is fetched from [REST Countries API v3.1](https://restcountries.com/v3.1/all) with specific fields:
- `name` - Country names (common and official)
- `capital` - Capital city information
- `population` - Population data
- `region` - Regional classification
- `flags` - Flag images (PNG/SVG)
- `languages` - Languages spoken

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🚀 Getting Started

Follow these steps to run the application locally:

### 1. Clone the Repository
```bash
git clone https://github.com/ishwork/Countries-Information.git
cd Countries-Information
```

### 2. Install Dependencies
```bash
npm install
```
or if you prefer yarn:
```bash
yarn install
```

### 3. Start the Development Server
```bash
npm start
```
or with yarn:
```bash
yarn start
```

### 4. Open in Browser
The application will automatically open in your default browser at:
```
http://localhost:3000
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CountriesTableHeader.tsx
│   ├── CountriesTableBody.tsx
│   └── SearchBar.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Country.tsx
│   └── FavouriteCountries.tsx
├── redux/              # Redux store configuration
│   ├── actions/        # Action creators
│   ├── reducers/       # Reducers
│   └── store/          # Store configuration
├── custom-hooks/       # Custom React hooks
├── types.tsx          # TypeScript type definitions
└── App.tsx           # Main application component
```

## 🔧 Available Scripts

- `npm start` - Runs the development server
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🌐 API Information

This application uses the [REST Countries API v3.1](https://restcountries.com/) to fetch country data. The API provides comprehensive information about countries including names, populations, regions, languages, and flag images.

**API Endpoint:** `https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,languages`



