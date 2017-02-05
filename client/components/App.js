import React from 'react';
import Search from './Search';
import Map from "./Map";

export default class App extends React.Component {
  render() {
    return (
     <div>
        <h1>My react map</h1>
        <Search />
        <Map />
      </div>);
  }
}
