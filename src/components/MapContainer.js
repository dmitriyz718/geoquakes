import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends Component {

    render() {
        const style = {
            width: '500px',
            height: '600px'
        }
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={10}
                    initialCenter={{
                        lat: 35.5496939,
                        lng: -120.7060049
                    }}
                    style={style}>
                    <Marker />
                </Map>
            </div>


        );
    }

}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapContainer);
