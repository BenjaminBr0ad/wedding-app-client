import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Home from './Home'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class NavBar extends Component {

    state = {
        value: 0
    }

    handleChange = (event, value) => {
        this.setState({ value });
    }

    render() {
        const { value } = this.state


        return (
            <div>
                <AppBar position='static'>
                    <Tabs variant='fullWidth' value={value} centered={true} onChange={this.handleChange}>
                        <Tab label="Home" />                        
                        <Tab label="Event Information" />
                        <Tab label="Venue Information" />
                        <Tab label="Lodging & Travel Information" />
                        <Tab label="Registry" />
                        <Tab label="Photos" />

                    </Tabs>
                </AppBar>
                {value === 0 && 
                    <TabContainer>
                        <Route path='/' exact component={Home}/>
                    </TabContainer>
                }
                {value === 1 && <TabContainer>Page Two</TabContainer>}
                {value === 2 && <TabContainer>Page Three</TabContainer>}
                {value === 3 && <TabContainer>Page Three</TabContainer>}
                {value === 4 && <TabContainer>Page Three</TabContainer>}
                {value === 5 && <TabContainer>Page Three</TabContainer>}
            </div>
        )
    }
}

export default connect(
    null,
    null
)(NavBar)