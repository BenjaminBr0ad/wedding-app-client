import React, { Component } from 'react'
import {
    Row,
    Col
} from 'reactstrap'
import Map from './Map'

class VenueInformation extends Component {

    render() {

        return (
            <div>
                <Row>
                    <Col lg={{size: 6, offset:6}} md={{size: 6, offset: 6}} sm={{size: 12}} className="map-container">
                        <Map />
                    </Col>
                </Row>
            </div>
        )

    }
}

export default VenueInformation