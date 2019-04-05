import React, { Component } from 'react';

export default class EditCustomerForm extends React.Component{
	constructor(props){
		super(props);
		this.edit = { ...this.props.selected }
	}
	
	onFieldChange = function(e){
		this.edit[e.target.name] = e.target.value;
	}
		
	render(){	
		if(!this.props.show){
			return '';
		} else {
			return(
				<div>
					<div>Edit Record</div>
					<form name="update_form">
						<div className="inputBox">
							<label htmlFor="edit_fname">First name</label>
							<input type="text" id="edit_fname" name="fname" defaultValue={this.props.selected.fname} onChange={(e) => this.onFieldChange(e)}/>
						</div>
						<div className="inputBox">
							<label htmlFor="edit_lname">Last name</label>
							<input type="text" id="edit_lname" name="lname" defaultValue={this.props.selected.lname} onChange={(e) => this.onFieldChange(e)}/>
						</div>
						<div className="inputBox">
							<label htmlFor="edit_age">Age</label>
							<input type="text" id="edit_age" name="age" defaultValue={this.props.selected.age} onChange={(e) => this.onFieldChange(e)}/>
						</div>
						<div className="inputBox">
							<label htmlFor="edit_gender">Gender</label>
							<input type="text" id="edit_gender" name="gender" defaultValue={this.props.selected.gender} onChange={(e) => this.onFieldChange(e)}/>
						</div>
							
						<div className="inputBox">
							<input type="button" className="btn" onClick={(e) => this.props.updateRecord(e, this.edit)} defaultValue="Update record"/>
						</div>
					</form>
				</div>
			)
		}
	}
};
