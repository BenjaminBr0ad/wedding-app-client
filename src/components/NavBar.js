import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap'


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
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar className="text-center mx-auto">
                            <Nav className="mx-auto" navbar>
                                <NavItem className="px-lg-4 px-md-2 px-xl-5">
                                    <NavLink to="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem className="px-lg-4 px-md-2 px-xl-5">
                                    <NavLink to="/event">
                                        Event Information
                                    </NavLink>
                                </NavItem>
                                <NavItem className="px-lg-4 px-md-2 px-xl-5">
                                    <NavLink to="/venue">
                                        Venue Information
                                    </NavLink>
                                </NavItem>
                                <NavItem className="px-lg-4 px-md-2 px-xl-5">
                                    <NavLink to="/lodging">
                                        Lodging & Travel Information
                                    </NavLink>
                                </NavItem>
                                <NavItem className="px-lg-4 px-md-2 px-xl-5">
                                    <NavLink to="/registry">
                                        Registry
                                    </NavLink>
                                </NavItem>
                                <NavItem className="px-lg-4 px-md-2 px-xl-5">
                                    <NavLink to="/photos">
                                        Photos
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        )

    }

}

export default NavBar