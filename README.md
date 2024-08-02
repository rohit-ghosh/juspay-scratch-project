# Juspay Scratcher Project

## Author: Rohit Ghosh

## Hosted Application

The application is hosted on Netlify and can be accessed at: [https://juspay-scratcher-by-rohit.netlify.app/](https://juspay-scratcher-by-rohit.netlify.app/)

## Local Development Setup

To set up the project for local development, follow these steps:

1. **Fork and Clone the Repository:**
   - Fork the repository to your GitHub account.
   - Clone the forked repository to your local machine.

2. **Install Dependencies:**
   - Navigate to the project directory and run the following command to install all necessary dependencies:
     ```sh
     yarn install
     ```

3. **Start the Development Server:**
   - Run the following command to start the development server:
     ```sh
     yarn start
     ```
   - Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

The project follows a structured directory layout:

- **src/index.tsx:** Entry point of the application. It sets up the Redux store, SnackbarProvider, and renders the main `App` component.
- **src/App.tsx:** Main application component that includes the drag-and-drop functionality and integrates various sub-components.
- **src/redux/store.ts:** Configures the Redux store with root reducer and middleware.
- **src/redux/slice/index.ts:** Combines all the individual slices into a root reducer.

## Key Libraries and Tools

- **React:** JavaScript library for building user interfaces.
- **TypeScript:** Typed superset of JavaScript that compiles to plain JavaScript.
- **Redux:** State management library.
- **React-Redux:** Official React bindings for Redux.
- **Redux Toolkit:** Official, opinionated, batteries-included toolset for efficient Redux development.
- **React Beautiful DnD:** Drag-and-drop library for React.
- **Lodash:** Utility library for JavaScript.