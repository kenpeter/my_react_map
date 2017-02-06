import React from 'react';
import Search from './Search';
import Map from "./Map";

export default class App extends React.Component {
  render() {
    return (
     <div>
        <h1>My react map</h1>
        <Search initAddress="Paris, France" />
        <Map initLat="48.856614" initLng="2.3522219" />
      </div>
    );
  }
}
