import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
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

        const {
            changePage
        } = this.props

        return (
            <div>
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar className="text-center mx-auto">
                            <Nav className="mx-auto" navbar>
                                <NavItem>
                                    <NavLink onClick={() => changePage(0)}>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={() => changePage(1)}>Event Information</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={() => changePage(2)}>Venue Information</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={() => changePage(3)}>Lodging & Travel Information</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={() => changePage(4)}>Registry</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={() => changePage(5)}>Photos</NavLink>
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