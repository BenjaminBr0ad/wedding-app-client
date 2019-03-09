import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './components/Home'
import EventInformation from './components/EventInformation'
import VenueInformation from './components/VenueInformation'
import LodingTravelInformation from './components/LodgingTravelInformation'
import Registry from './components/Registry'
import Photos from './components/Photos'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      page: 0
    }
  }

  viewHashTable = page => {
    switch(page) {
      case 0:
        return <Home />

      case 1:
        return <EventInformation />

      case 2:
        return <VenueInformation />

      case 3:
        return <LodingTravelInformation />

      case 4:
        return <Registry />

      case 5:
        return <Photos />

      default:
        return this.state
    }
  }

  changePage = pageIndex => {
    this.setState({
      ...this.state,
      page: pageIndex
    })
  }

  render() {

    return (
      <div>
          <Header />
          <NavBar changePage={this.changePage} />
          {this.viewHashTable(this.state.page)}
      </div>
    )

  }

}

export default App
