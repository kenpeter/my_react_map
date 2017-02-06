import React from 'react';
import Search from './Search';
import Map from "./Map";
import CurrentLocation from "./CurrentLocation";

export default class App extends React.Component {
  render() {
    let initAddress = "Paris, France";
  
    return (
     <div>
        <h1>My react map</h1>
        <Search initAddress={initAddress} />
        <Map initLat="48.856614" initLng="2.3522219" />
        <CurrentLocation initAddress={initAddress} />
      </div>
    );
  }
}
