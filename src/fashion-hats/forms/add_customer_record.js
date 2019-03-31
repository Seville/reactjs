import React from 'react';

export default class AddCustomerForm extends React.Component {
	constructor(props){
		super(props);
		this.state = { ...this.props.selected }
	}
	
	onFieldChange = function(e){
		this.state[e.target.id] = e.target.value;
	}
	
	render() {
		if(!this.props.show) {
			return '';
		} else {
			return (
				<form name="add_form">
					<div className="create-acct-label">Create an account</div>
					<div className="inputBox">
						<label htmlFor="firstname">First name</label>
						<input type="text" id="fname" name="fname" onChange={(e) => this.onFieldChange(e)}/>
					</div>
					<div className="inputBox">
						<label htmlFor="lastname">Last name</label>
						<input type="text" id="lname" name="lname" onChange={(e) => this.onFieldChange(e)}/>
					</div>
					<div className="inputBox">
						<label htmlFor="age">Age</label>
						<input type="text" id="age" name="age" onChange={(e) => this.onFieldChange(e)}/>
					</div>
					<div className="inputBox">
						<label htmlFor="gender">Gender</label>
						<input type="text" id="gender" name="gender" onChange={(e) => this.onFieldChange(e)}/>
					</div>
					
					<div className="inputBox">
						<input type="button" className="btn" onClick={(e) => this.props.addRecord(e, this.state)} value="Add record"/>
					</div>
				</form>
			)
		}
	}
};