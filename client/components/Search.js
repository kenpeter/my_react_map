import React from 'react';

export default class Search extends React.Component {
  

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<div className="col-xs-12 col-md-6 col-md-offset-3">
						<div className="input-group">
							<input 
							  type="text" 
							  className="form-control" 
							  id="address" 
							  placeholder="Find a location..." 
							  
							  value="" onChange={this.handleChange} 
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
