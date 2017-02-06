import React from 'react';
import { connect } from "react-redux";

class Map extends React.Component {
  
  constructor(props) {
    // super props
    super(props);
    
    this.state = {
      lat: props.initLat,
      lng: props.initLng
    }
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    
    var map = new GMaps({
      el: '#map',
      lat: this.state.lat,
      lng: this.state.lng
    });

    map.addMarker({
      lat: this.state.lat,
      lng: this.state.lng
    });
  }

  render() {
  
    return (
      <div className="map-holder">
        <p>Loading...</p>
        <div id="map"></div>
      </div>
    );
  }
}


function mapStateToProps(state) {

  //test
  console.log("---- mapStateToProps ----");
  console.log(state);

  return {
    lat: state.lat,
    lng: state.lng
  };
}


export default connect(mapStateToProps, {  })(Map);
