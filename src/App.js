import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import CampgroundContainer from './containers/CampgroundContainer';
import LocationContainer from './containers/LocationContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Campground from './components/campgrounds/Campground';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/campgrounds" component={CampgroundContainer} />
          <Route exact path="/locations" component={LocationContainer} />
          <Route exact path="/campgrounds/:id" component={Campground} />
        </Switch>
        <LocationContainer />
      </div>
    </Router>
  );
}

export default App;
