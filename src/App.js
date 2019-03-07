import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
      </div>
    );
  }
}

export default App
