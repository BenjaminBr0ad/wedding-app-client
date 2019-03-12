import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap'

const linkInfo = [
    {
        path: '/',
        text: 'Home'
    },
    {
        path: '/event',
        text: 'Event Information'
    },
    {
        path: '/venue',
        text: 'Venue Information'
    },
    {
        path: '/lodging',
        text: 'Lodging & Travel Information'
    },
    {
        path: '/registry',
        text: 'Registry'
    },
    {
        path: '/photos',
        text: 'Photos'
    }
]

class NavBar extends Component {

    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        return (

            <div>
                <Navbar color="light" light expand="md">
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar className="text-center mx-auto">
                        <Nav className="mx-auto" navbar>
                            {
                                linkInfo.map((link,i) => {
                                    return (
                                        <NavItem key={i} className="px-lg-4 px-md-2 px-xl-5">
                                            <NavLink exact to={link.path} className="navlink" activeClassName="navlink-arrow">
                                                {link.text}
                                            </NavLink>
                                        </NavItem>
                                    )
                                })
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            
        )

    }

}

export default NavBar