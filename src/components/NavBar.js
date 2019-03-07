import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

class NavBar extends Component {
    render() {
        return (
            <div>
                <Tabs value={0}>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </div>
        )
    }
}

export default connect(
    null,
    null
)(NavBar)