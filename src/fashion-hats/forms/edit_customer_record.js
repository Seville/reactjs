import React from 'react';

let EditCustomerForm = (props) => {
	if(!props.show){
		return '';
	} else {
		return (
				<div>
					<div>Edit Record</div>
					<form name="update_form">
						<div className="inputBox">
							<label htmlFor="firstname">First name</label>
							<input type="text" id="firstname" name="firstname" defaultValue={props.selected.fname}/>
						</div>
						<div className="inputBox">
							<label htmlFor="lastname">Last name</label>
							<input type="text" id="lastname" name="lastname" defaultValue={props.selected.lname}/>
						</div>
						<div className="inputBox">
							<label htmlFor="age">First name</label>
							<input type="text" id="age" name="age" defaultValue={props.selected.age}/>
						</div>
						<div className="inputBox">
							<label htmlFor="gender">First name</label>
							<input type="text" id="gender" name="gender" defaultValue={props.selected.gender}/>
						</div>
						
						<div className="inputBox">
							<input type="button" className="btn" onClick={(e) => props.updateRecord(e)} defaultValue="Update record"/>
						</div>
					</form>
				</div>
			)
	}
};

export default EditCustomerForm;