import React from 'react';
import Search from './Search';
import Map from "./Map";
import CurrentLocation from "./CurrentLocation";

import ListLocation from "./ListLocation";


export default class App extends React.Component {
  render() {
    let initAddress = "Paris, France";
  
    return (
      <div>
        <h1>My react map</h1>
        <Search />
        <Map />
        <CurrentLocation />
        <ListLocation />
      </div>
    );
  }
}
