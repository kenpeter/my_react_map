import React from 'react';
import { connect } from "react-redux";

class Map extends React.Component {
  
  constructor(props) {
    console.log("---- in map constructor ----");
  
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
    
    //test
    console.log("---- in componentDidUpdate ----");
    console.log(this.state);
    
    var map = new GMaps({
      el: '#map',
      lat: this.props.lat,
      lng: this.props.lng
    });

    map.addMarker({
      lat: this.props.lat,
      lng: this.props.lng
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
    lat: state.search.lat,
    lng: state.search.lng
  };
}


export default connect(mapStateToProps, {  })(Map);
