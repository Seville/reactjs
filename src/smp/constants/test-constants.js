import * as formConstants from './form-constants';

// Testing constants
// Form html constants
export const NEW_STUDENT_FORM_HTML = `<form id="${formConstants.NEW_STUDENT_FORMNAME}" name="${formConstants.NEW_STUDENT_FORMNAME}" class="student-form">
	<label for="new-fname">First Name</label>
	<input id="new-fname" name="student-fname" type="text" value="John">
	<label for="new-lname">Last Name</label>
	<input id="new-lname" name="student-lname" type="text" value="Denver">
	<label for="new-age">Age</label>
	<input id="new-age" name="student-age" type="text" value="43">
	<label for="new-gender">Gender</label>
	<input id="new-gender" name="student-gender" type="text" value="male">
	<div class="btn-group" id="new-student-btn-group">
	<button id="new-btn-01" textval="Add New Student">Add New Student</button>
	<button id="new-btn-02" textval="Cancel">Cancel</button></div></form>`;
	
export const EDIT_STUDENT_FORM_HTML = `<form id="${formConstants.EDIT_STUDENT_FORMNAME}" name="${formConstants.EDIT_STUDENT_FORMNAME}" class="student-form">
	<label for="edit-fname">First Name</label>
	<input id="edit-fname" name="student-fname" type="text" value="Greg">
	<label for="edit-lname">Last Name</label>
	<input id="edit-lname" name="student-lname" type="text" value="Alba">
	<label for="edit-age">Age</label>
	<input id="edit-age" name="student-age" type="text" value="33">
	<label for="edit-gender">Gender</label>
	<input id="edit-gender" name="student-gender" type="text" value="male">
	<div class="btn-group" id="edit-student-btn-group">
	<button id="edit-btn-01" textval="Edit Student">Edit Student</button>
	<button id="edit-btn-02" textval="Cancel">Cancel</button></div></form>`;
	
export const EMPTY_STUDENT_FORM_HTML = `<form id="${formConstants.NEW_STUDENT_FORMNAME}" name="${formConstants.NEW_STUDENT_FORMNAME}" class="student-form">
	<label for="new-fname">First Name</label>
	<input id="new-fname" name="student-fname" type="text">
	<label for="new-lname">Last Name</label>
	<input id="new-lname" name="student-lname" type="text">
	<label for="new-age">Age</label>
	<input id="new-age" name="student-age" type="text">
	<label for="new-gender">Gender</label>
	<input id="new-gender" name="student-gender" type="text">
	<div class="btn-group" id="new-student-btn-group">
	<button id="new-btn-01" textval="Add New Student">Add New Student</button>
	<button id="new-btn-02" textval="Cancel">Cancel</button></div></form>`;