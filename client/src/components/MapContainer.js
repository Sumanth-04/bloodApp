import React from 'react';
import PropTypes from 'prop-types';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Map google={this.props.google} style={this.props.styles} zoom={14} initialCenter={{lat:"15.3647",lng:"75.1240"}}>
 
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                        <h1>Some Hospital Name</h1>
                        </div>
                    </InfoWindow>
                </Map>
                
            </div>
        );
    }
}

const LoadingContainer = (props) => (
    <div>Maps loading container!</div>
  )
   
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyAgeAFyZkt7F8cr8cPLBKbBOIJMaeOYvCo"),
    LoadingContainer: LoadingContainer
  })(MapContainer)