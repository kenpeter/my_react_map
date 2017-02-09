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
    let lat = this.props.propLat;
    let lng = this.props.propLng;
    
    // add or remove address
    this.props.toggleFavLocation(currAddress, lat, lng);
  }
  
  
  render() {
    
    let star;
    
    //console.log("--- in render ---");
    //console.log(this.props.propIsFav);
    
    if(this.props.propIsFav) {
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
    currAddress: state.search.currAddress,
    propIsFav: state.isFav.isFav,
    propLat: state.search.lat,
    propLng: state.search.lng
  };
}

export default connect(mapStateToProps, { toggleFavLocation })(CurrentLocation);
