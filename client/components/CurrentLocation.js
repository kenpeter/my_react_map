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
    
    //
    this.props.toggleFavLocation(currAddress);
  }
  
  
  render() {
    
    let star;
    
    console.log("--- in render ---");
    console.log(this.props.propIsFav);
    
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

  //console.log("--- in mapStateToProps --");
  //console.log(state.isFav.isFav);

  return {
    currAddress: state.search.currAddress,
    // Ok, this collide the name with state and method
    //isFav: state.isFav.isFav
    propIsFav: state.isFav.isFav
  };
}

export default connect(mapStateToProps, { toggleFavLocation })(CurrentLocation);
