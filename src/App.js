import React from 'react';
import logo from './logo.svg';
import './App.css';
import CampgroundContainer from '../containers/CampgroundContainer';
import LocationContainer from '../containers/LocationContainer';

function App() {
  return (
    <div className="App">
      <CampgroundContainer />
      <LocationContainer />
    </div>
  );
}

export default App;
