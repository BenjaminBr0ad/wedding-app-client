import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Home from './Home'

const styles = {
    root: {
        flexGrow: 1,
        justify: 'center'
    },
}

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
                        <Grid container spacing={24} className={this.props.classes.root}>
                            <Grid item xs={12}>
                                <Tab label="Home" />                        
                            </Grid>
                            <Grid item xs={12}>
                                <Tab label="Event Information" />
                            </Grid>
                            <Grid item xs={12}>
                                <Tab label="Venue Information" />
                            </Grid>
                            <Grid item xs={12}>
                                <Tab label="Lodging & Travel Information" />
                            </Grid>
                            <Grid item xs={12}>
                                <Tab label="Registry" />
                            </Grid>
                            <Grid item xs={12}>
                                <Tab label="Photos" />
                            </Grid>
                        </Grid>

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

export default withStyles(styles)(NavBar)