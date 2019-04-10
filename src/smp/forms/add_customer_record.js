import React, { Component } from 'react';

export default class AddCustomerForm extends React.Component {
	constructor(props){
		super(props);
		this.update = {};
	}
	
	onFieldChange = function(e){
		this.update[e.target.name] = e.target.value;
	}
	
	render() {
		if(!this.props.show) {
			return '';
		} else {
			this.update = {};
			return (
				<form name="add_form">
					<div className="create-acct-label">Create an account</div>
					<div className="inputBox">
						<label htmlFor="add_fname">First name</label>
						<input type="text" id="add_fname" name="fname" onChange={(e) => this.onFieldChange(e)}/>
					</div>
					<div className="inputBox">
						<label htmlFor="add_lname">Last name</label>
						<input type="text" id="add_lname" name="lname" onChange={(e) => this.onFieldChange(e)}/>
					</div>
					<div className="inputBox">
						<label htmlFor="add_age">Age</label>
						<input type="text" id="add_age" name="age" onChange={(e) => this.onFieldChange(e)}/>
					</div>
					<div className="inputBox">
						<label htmlFor="add_gender">Gender</label>
						<input type="text" id="add_gender" name="gender" onChange={(e) => this.onFieldChange(e)}/>
					</div>
					
					<div className="inputBox">
						<input type="button" className="btn" onClick={(e) => this.props.addRecord(e, this.update)} value="Add record"/>
					</div>
				</form>
			)
		}
	}
};
