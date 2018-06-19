import React, { Component } from 'react';
import Home from './Home/Home';
import { Route,Link, Redirect } from 'react-router-dom'
import LandscapingM from './LandscappingM/LandscapingM';
import HomeImprovementM from './HomeImprovementM/HomeImprovementM'
import Contacts from './Contacts/Contacts'
import Appointments from './Appointments/Appointments'
import Gallery from './Gallery/Gallery'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/lc/home" render={() => (<Home />)} />
        <Route exact path="/lc/landscaping" render={() => (<LandscapingM />)} />
        <Route exact path="/lc/homeimprovement" render={() => (<HomeImprovementM />)} />
        <Route exact path="/lc/appointments" render={() => (<Appointments />)} />
        <Route exact path="/lc/contacts" render={() => (<Contacts />)} />
        <Route exact path="/lc/gallery" render={() => (<Gallery />)} />
        <Route path="/*" render={() => (<Redirect to="/lc/home" />)} />
      </div>
    );
  }
}

export default App;
