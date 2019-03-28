import React from 'react';

export default class EditRecordForm extends React.Component {
	render() {
		if(!this.props.show) {
			return (<div></div>)
		} else {
			return (
				<div>
					<div>Edit Record</div>
					<form name="update_form">
						<div className="inputBox">
							<label htmlFor="firstname">First name</label>
							<input type="text" id="firstname" name="firstname" defaultValue={this.props.selected.first_name}/>
						</div>
						<div className="inputBox">
							<label htmlFor="lastname">Last name</label>
							<input type="text" id="lastname" name="lastname" defaultValue={this.props.selected.last_name}/>
						</div>
						<div className="inputBox">
							<label htmlFor="mobile">Mobile number</label>
							<input type="text" id="mobile" name="mobile" defaultValue={this.props.selected.mobile}/>
						</div>
						<div className="inputBox">
							<label htmlFor="home">Home number</label>
							<input type="text" id="home" name="home" defaultValue={this.props.selected.home}/>
						</div>
						<div className="inputBox">
							<label htmlFor="email">Email</label>
							<input type="text" id="email" name="email" defaultValue={this.props.selected.email}/>
						</div>
						<div className="inputBox">
							<label htmlFor="address">Address</label>
							<input type="text" id="address" name="address" defaultValue={this.props.selected.address}/>
						</div>
						<div className="inputBox">
							<label htmlFor="city">City</label>
							<input type="text" id="city" name="city" defaultValue={this.props.selected.city}/>
						</div>
						<div className="inputBox">
							<label htmlFor="state">State</label>
							<input type="text" id="state" name="state" defaultValue={this.props.selected.state}/>
						</div>
						<div className="inputBox">
							<label htmlFor="zip">Zip</label>
							<input type="text" id="zip" name="zip" defaultValue={this.props.selected.zip}/>
						</div>
						<input type="hidden" id="accntId" name="accntId" defaultValue={this.props.selected.id}/>
						<div className="inputBox">
							<input type="button" className="btn" onClick={(e) => this.props.updateRecord(e)} defaultValue="Update record"/>
						</div>
					</form>
				</div>
			)
		}
	}
};