import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = {
    headerText: {
        fontFamily: 'Srisakdi',
    },
}

class Header extends Component {
    render() {
        return (
            <div>
                <Typography variant='h2' align='center' className={this.props.classes.headerText}>
                    Benjamin & Kody
                </Typography>
            </div>
        )
    }
}

export default withStyles(styles)(Header)
