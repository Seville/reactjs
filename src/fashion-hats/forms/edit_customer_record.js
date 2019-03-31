import React from 'react';

export default class EditCustomerForm extends React.Component{
	constructor(props){
		super(props);
		this.state = { ...this.props.selected }
	}
	
	onFieldChange = function(e){
		this.state[e.target.id] = e.target.value;
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
							<label htmlFor="firstname">First name</label>
							<input type="text" id="fname" name="fname" defaultValue={this.props.selected.fname} onChange={(e) => this.onFieldChange(e)}/>
						</div>
						<div className="inputBox">
							<label htmlFor="lastname">Last name</label>
							<input type="text" id="lname" name="lname" defaultValue={this.props.selected.lname} onChange={(e) => this.onFieldChange(e)}/>
						</div>
						<div className="inputBox">
							<label htmlFor="age">Age</label>
							<input type="text" id="age" name="age" defaultValue={this.props.selected.age} onChange={(e) => this.onFieldChange(e)}/>
						</div>
						<div className="inputBox">
							<label htmlFor="gender">Gender</label>
							<input type="text" id="gender" name="gender" defaultValue={this.props.selected.gender} onChange={(e) => this.onFieldChange(e)}/>
						</div>
							
						<div className="inputBox">
							<input type="button" className="btn" onClick={(e) => this.props.updateRecord(e, this.state)} defaultValue="Update record"/>
						</div>
					</form>
				</div>
			)
		}
	}
};