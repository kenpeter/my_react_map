import React from 'react';
import { connect } from "react-redux";
import SingleLocation from "./SingleLocation";


class ListLocation extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  
  render() {
    // yes index
    let locations = this.props.propFavArr.map((loc, index) => {
   
      // need to return 
      // have to return in array
      return <SingleLocation
        key={index} 
        address={loc.address}
        timestamp={loc.timestamp}
      />
    });
    
    //console.log(locations);
    
    return (
      <div className="list-group col-xs-12 col-md-6 col-md-offset-3">
        <span className="list-group-item active">Saved Locations</span>
        { locations }
      </div>  
    );
  }
  
}


function mapStateToProps(state) {

  return {
    propFavArr: state.toggleFavLocation.favArr
  };
}

export default connect(mapStateToProps, {  })(ListLocation);
