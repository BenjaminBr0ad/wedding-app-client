import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 39.229111,
            lng: -104.884323
        },
        zoom: 11
    }

    render() {

        return (
            // Important! Always set the container height explicitly
                <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {/* <AnyReactComponent
                        lat={39.229111}
                        lng={-104.884323}
                        text={'Wedding Venue'}
                    /> */}
                </GoogleMapReact>
        )

    }

}

export default Map