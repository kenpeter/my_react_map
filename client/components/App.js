import React from 'react';
import Search from './Search';


export default class App extends React.Component {
  render() {
    return (
     <div>
        <h1 className="col-xs-12 col-md-6 col-md-offset-3">My react map</h1>
        <Search />
      </div>);
  }
}
