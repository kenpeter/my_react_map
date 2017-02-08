import React from 'react';
import { connect } from "react-redux";

class SingleLocation extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  
  render() {
    let cn = "list-group-item";

    if (this.props.active) {
      cn += "active-location";
    }
  
  
    // render and return
    // render and return
    return(
      <a className={cn}>
        {this.props.address} - {this.props.timestamp}
      </a>
    )
  }
  
}


export default SingleLocation;
