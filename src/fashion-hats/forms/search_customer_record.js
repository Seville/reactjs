import React from 'react';

export default class SearchCustomerForm extends React.Component {
	constructor(props){
		super(props);
		this.search = {};
	}
	
	onFieldChange = function(e){
		this.search[e.target.name] = e.target.value;
	}
	render() {
		if(!this.props.show) {
			this.search = {};
			return '';
		} else {
			return (
				<form name="search_form">
					<div>Search Record</div>
					<div className="inputBox">
						<label htmlFor="search">Search By:</label>
						<select id="srch_prop" name="srch_prop" onChange={(e) => this.onFieldChange(e)}>
							<option value="fname">First Name</option>
							<option value="lname">Last Name</option>
							<option value="age">Age</option>
							<option value="gender">Gender</option>
						</select>
					</div>
					<div className="inputBox">
						<label htmlFor="search">Value</label>
						<input type="text" id="srch_prop" name="srch_val" onChange={(e) => this.onFieldChange(e)}/>
					</div>
					
					<div className="inputBox">
						<input type="button" className="btn" onClick={(e) => this.props.search(e, this.search)} value="Search for by name"/>
					</div>
				</form>
			)
		}
	}
};