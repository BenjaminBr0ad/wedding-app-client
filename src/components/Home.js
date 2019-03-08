import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import photo from '../images/ben-and-kody.jpg'

const homePhoto = {
    width: '100%'
}

class Home extends Component {

    render() {
        return (
            <img className='home-photo' alt='Ben & Kody' style={homePhoto} src={photo}></img>
        )
    }
}

export default connect(
    null,
    null
)(Home)