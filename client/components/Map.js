import React from 'react';

class Map extends React.Component {
  
  constructor(props) {
    // super props
    super(props);
    
    this.state = {
      lat: "48.856614",
      lng: "2.3522219"
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


export default Map;
