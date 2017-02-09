import React from 'react';
import { connect } from "react-redux";
import moment from 'moment';
import clickSingleLocation from "../actions/clickSingleLocation";

class SingleLocation extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.onClick = this.onClick.bind(this);
  }
  
  // don't call onClick()
  onClick(e) {
    e.preventDefault();
    this.props.clickSingleLocation(this.props.address, this.props.lat, this.props.lng);
  }
  
  render() {
    let cn = "list-group-item";

    if (this.props.active) {
      cn += " active-location";
    }
  
  
    // render and return
    // render and return
    return(
      <a className={cn} onClick={ this.onClick }>
        {this.props.address}
        &nbsp;----&nbsp;
        <span className="createAt">{ moment(this.props.timestamp).fromNow() }</span>
        <span className="glyphicon glyphicon-menu-right"></span>
      </a>
    )
  }
  
}


export default connect(null, { clickSingleLocation })(SingleLocation);
