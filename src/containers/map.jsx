import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { BsFillHouseDoorFill } from 'react-icons/bs';

import "../assets/stylesheets/map.css"

class Map extends React.Component {

  render() {
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    if (this.props.selectedFlat) {
      marker = <div className="marker" lat={this.props.selectedFlat.lat} lng={this.props.selectedFlat.lng}>
                <BsFillHouseDoorFill />
              </div>;
      center = { lat: this.props.selectedFlat.lat,
                 lng: this.props.selectedFlat.lng };
    }

    return(
      <div className="map-container" style={{ height: '95vh', width: '40%' }}>
        <GoogleMapReact
          center={center}
          defaultZoom={15}>
          {marker}
        </GoogleMapReact>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { selectedFlat: state.selectedFlat }
}

export default connect(mapStateToProps)(Map);
