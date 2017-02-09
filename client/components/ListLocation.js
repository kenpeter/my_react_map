import React from 'react';
import { connect } from "react-redux";
import SingleLocation from "./SingleLocation";


class ListLocation extends React.Component {

  constructor(props) {
    super(props);

    //console.log("construcotr....");
  }

  render() {
    console.log("--- ListLocation.js, render ---");
    console.log(this.props.propFavArr);

    // yes index
    let locations = this.props.propFavArr.map((loc, index) => {

      // need to return
      // have to return in array
      return <SingleLocation
        key={index}
        address={loc.address}
        lat={loc.lat}
        lng={loc.lng}
        timestamp={loc.timestamp}
      />
    });

    return (
      <div className="list-group col-xs-12 col-md-6 col-md-offset-3">
        <span className="list-group-item active">Saved Locations</span>
        { locations }
      </div>
    );
    
  }

}


function mapStateToProps(state) {

  //test
  console.log("--- ListLocation.js, mapStateToProps ---");
  console.log(state.toggleFavLocation.favArr);

  return {
    propFavArr: state.toggleFavLocation.favArr
  };
}

export default connect(mapStateToProps, {  })(ListLocation);
