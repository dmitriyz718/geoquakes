import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        const style = {
            width: '500px',
            height: '600px',
        };

        let earthquakeMarkers = this.props.earthquakes.map((earthquake) => (
            <Marker
                title={earthquake.properties.mag}
                name={earthquake.properties.mag}
                position={{
                    lng: earthquake.geometry.coordinates[0],
                    lat: earthquake.geometry.coordinates[1],
                }}
            />
        ));

        return (
            <Map
                google={this.props.google}
                style={style}
                // new york coordinates
                initialCenter={{ lat: 40.7128, lng: -74.0060 }}
                // zoom set to minimum to see quakes
                zoom={1}
            >
                {earthquakeMarkers}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg',
})(MapContainer);
