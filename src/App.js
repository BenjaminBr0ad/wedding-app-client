import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './components/Home'
import EventInformation from './components/EventInformation'
import VenueInformation from './components/VenueInformation'
import LodgingTravelInformation from './components/LodgingTravelInformation'
import Registry from './components/Registry'
import Photos from './components/Photos'

class App extends Component {

  render() {

    return (
      <div>
          <Header />
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/event" component={EventInformation} />
          <Route path="/venue" component={VenueInformation} />
          <Route path="/lodging" component={LodgingTravelInformation} />
          <Route path="/registry" component={Registry} />
          <Route path="/photos" component={Photos} />
      </div>
    )

  }

}

export default App
