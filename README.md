# Countries Information App

A comprehensive React application that displays detailed information about countries around the world. Built with modern web technologies including React 18, TypeScript, Material-UI, and TanStack Query for efficient data management.

## 🌍 Features

- Browse information for 250+ countries worldwide with **infinite loading**
- **Smart search functionality** - search through all countries regardless of pagination
- **Load More** button to fetch additional countries (10 per page)
- View country details including:
  - Flag images
  - Population data
  - Regional information
  - Languages spoken
  - Capital cities
- Add countries to favorites list
- Responsive design with Material-UI components
- **Optimized performance** with intelligent caching and data fetching

## 🚀 Live Demo

[https://countries-guide-2025.netlify.app](https://countries-guide-2025.netlify.app)

## 🛠️ Technologies Used

- **React 18.3.1** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **TanStack Query v5** - Powerful data synchronization and caching
- **Redux + Redux Thunk** - State management for individual country pages
- **Material-UI (MUI) v7** - UI component library
- **React Router v7** - Client-side routing
- **REST Countries API v3.1** - Data source

## 🏗️ Architecture

### Modern Data Management with TanStack Query
The application leverages **TanStack Query v5** for efficient data fetching and caching, providing:
- **Infinite loading** with `useInfiniteQuery` for paginated country lists
- **Intelligent caching** with 5-minute stale time
- **Optimistic UI updates** for better user experience

#### 🔍 Smart Search Implementation
The app uses a **dual-hook approach** for optimal performance:

1. **`useInfiniteCountries`** - For paginated loading (10 countries per page)
2. **`useAllCountries`** - For comprehensive search across all 250+ countries

#### 🎯 Key Benefits:
- **Performance**: Only loads 10 countries initially, reducing bundle size
- **User Experience**: Instant search across all countries without pagination limits
- **Caching**: Intelligent caching prevents unnecessary API calls
- **Error Handling**: Built-in retry logic and error states

### Legacy State Management
**Redux** is maintained for individual country pages and favorites:
- `countryReducer` - Handles individual country details
- `favouriteListReducer` - Manages user's favorite countries

### API Integration
Data is fetched from [REST Countries API v3.1](https://restcountries.com/v3.1/all) with optimized field selection:
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
│   ├── Home.tsx        # Main page with infinite loading
│   ├── Country.tsx     # Individual country details
│   └── FavouriteCountries.tsx
├── hooks/              # Custom TanStack Query hooks
│   └── useInfiniteCountries.ts  # Infinite query implementation
├── redux/              # Redux store (legacy for individual pages)
│   ├── actions/        # Action creators
│   ├── reducers/       # Reducers
│   └── store/          # Store configuration
├── custom-hooks/       # Legacy custom React hooks
├── types.tsx          # TypeScript type definitions
└── App.tsx           # Main application component
```

## 🔧 Available Scripts

- `npm start` - Runs the development server
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

### Key Features:
- **Pagination**: Loads 10 countries per page
- **Caching**: 5-minute stale time prevents unnecessary refetches
- **Loading States**: Separate states for initial load and next page fetching
- **Error Handling**: Built-in error states
- **Performance**: Only fetches additional data when needed
- **Single Source**: Both infinite loading and search use the same data source

## 🌐 API Information

This application uses the [REST Countries API v3.1](https://restcountries.com/) to fetch country data. The API provides comprehensive information about countries including names, populations, regions, languages, and flag images.


