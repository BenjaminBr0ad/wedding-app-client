import React, { Component } from 'react'
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/Header'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <CssBaseline/>
          <Header/>
          <NavBar/>
        </React.Fragment>
      </div>
    )
  }
}

export default App
