import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomeContainer from './components/containers/HomeContainer';
import CampgroundContainer from './components/containers/CampgroundContainer';
import LocationContainer from './components/containers/LocationContainer';
import CampgroundList from './components/campgrounds/CampgroundList';
import Campgrounds from './components/campgrounds/Campgrounds';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'


function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/campgrounds" component={CampgroundContainer} />
          <Route exact path="/locations" component={LocationContainer} />
          <Route exact path="/campgrounds/:id" component={Campgrounds} />
          <Route exact path="/locations/:id" component={CampgroundList} />
        </Switch>
        {/* <LocationContainer /> */}
      </div>
    </Router>
  );
}

export default App;
