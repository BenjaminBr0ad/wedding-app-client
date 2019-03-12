import React, { Component } from 'react'
import { Row } from 'reactstrap'

class Header extends Component {

    render() {

        return (

            <div>
                <Row className="justify-content-center">
                    <h1 className="cursive h1-header-text">Benjamin & Kody</h1>
                </Row>
                <Row className="justify-content-center">
                    <h3 className="cursive h3-header-text">We invite you to celebrate with us!</h3>
                </Row>
                <Row className="justify-content-center">
                    <h3 className="cursive h3-header-text">June 1st, 2020</h3>
                </Row>
            </div>

        )

    }

}

export default Header