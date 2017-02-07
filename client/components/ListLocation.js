import React from 'react';
import { connect } from "react-redux";
import { SingleLocation } from "./SingleLocation";


class ListLocation extends React.Component {
  
  constructor(props) {
    super(props);
    
  }
  
  
  render() {
    let Locations = "";
    
    
    return (
      <div className="list-group col-xs-12 col-md-6 col-md-offset-3">
        <span className="list-group-item active">Saved Locations</span>
        {Locations}

      </div>  
    );
  }
  
}




export default connect(null, {  })(ListLocation);
