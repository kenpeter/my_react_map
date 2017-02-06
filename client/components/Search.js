import React from 'react';
import { connect } from "react-redux";
import { search } from "../actions/search";

class Search extends React.Component {
  
  constructor(props) {
    // super props
    super(props);

    this.state = {
      search: props.initAddress  
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  
  onSubmit(e) {
    e.preventDefault();
    
    this.props.search(this.state.search);
  }
  
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  render() {
    // value, this.state.search
    return (
      <form id="geocoding_form" className="form-horizontal" onSubmit={this.onSubmit}>
				<div className="form-group">
					<div className="col-xs-12 col-md-6 col-md-offset-3">
						<div className="input-group">
							<input
							  name="search" 
							  type="text" 
							  className="form-control" 
							  id="address" 
							  placeholder="Find a location..." 
							  
							  value={this.state.search}
							  onChange={this.onChange} 
							/>
							
							<span className="input-group-btn">
								<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
							</span>
						</div>
					</div>
				</div>
			</form>
    );
  }
}


export default connect(null, { search })(Search);
