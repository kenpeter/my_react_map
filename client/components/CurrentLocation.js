import React from 'react';
import { connect } from "react-redux";
import { toggleFavLocation } from "../actions/toggleFavLocation";

class CurrentLocation extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.onClick = this.onClick.bind(this);
  }
  
  
  onClick(e) {
    e.preventDefault();
    
    let currAddress = this.props.currAddress;
    
    //console.log(currAddress);
    this.props.toggleFavLocation(currAddress);
  }
  
  
  render() {
    
    let star;
    
    if(this.props.fav) {
      star = <i className="fa fa-star" aria-hidden="true"></i>;
    }
    else {
      star = <i className="fa fa-star-o" aria-hidden="true"></i>;
    }
    
    return (
      <div className="col-xs-12 col-md-6 col-md-offset-3">
        <div className="center pointer" onClick={this.onClick}>{star} { this.props.currAddress }</div>
      </div>  
    );
  }
  
}


function mapStateToProps(state) {
  return {
    currAddress: state.search.currAddress
  };
}

export default connect(mapStateToProps, { toggleFavLocation })(CurrentLocation);
