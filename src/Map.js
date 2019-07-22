import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.172248,
      lng: -112.014611
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCHWR3kqcUpRyfdgw0LJe_3m1i252KMbMU' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.172248}
            lng={-112.014611}
            text="LHM Riverdale Chrysler Dodge"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;