import React from 'react';

export default class AddRecordForm extends React.Component {
	render() {
		if(!this.props.show) {
			return (<div></div>)
		} else {
			return (
				<form name="add_form">
					<div className="create-acct-label">Create an account</div>
					<div className="inputBox">
						<label htmlFor="firstname">First name</label>
						<input type="text" id="firstname" name="firstname"/>
					</div>
					<div className="inputBox">
						<label htmlFor="lastname">Last name</label>
						<input type="text" id="lastname" name="lastname"/>
					</div>
					<div className="inputBox">
						<label htmlFor="mobile">Mobile number</label>
						<input type="text" id="mobile" name="mobile"/>
					</div>
					<div className="inputBox">
						<label htmlFor="home">Home number</label>
						<input type="text" id="home" name="home"/>
					</div>
					<div className="inputBox">
						<label htmlFor="email">Email</label>
						<input type="text" id="email" name="email"/>
					</div>
					<div className="inputBox">
						<label htmlFor="address">Address</label>
						<input type="text" id="address" name="address"/>
					</div>
					<div className="inputBox">
						<label htmlFor="city">City</label>
						<input type="text" id="city" name="city"/>
					</div>
					<div className="inputBox">
						<label htmlFor="state">State</label>
						<input type="text" id="state" name="state"/>
					</div>
					<div className="inputBox">
						<label htmlFor="zip">Zip</label>
						<input type="text" id="zip" name="zip"/>
					</div>
					<div className="inputBox">
						<input type="button" className="btn" onClick={() => this.props.addRecord()} value="Add record"/>
					</div>
				</form>
			)
		}
	}
};