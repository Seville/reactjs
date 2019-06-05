import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT, SELECT_STUDENT } from '../../../../constants/student-constants';
import { addStudent, deleteStudent, editStudent, selectStudent, showAllStudents } from '../../../actions/student-actions';
import { formDataToObject } from '../../../../helpers/student-helper';

import SEED_DATA from '../../../../seed-data/customer_info';
import studentReducer from '../index.js';

let initialState;

beforeAll(() => {
	initialState = SEED_DATA;
});

test('add student to list', () => {
	// set up document body
	document.body.innerHTML = '<form id="new-student" name="new-student" class="student-form">' +
		'<label for="new-fname">First Name</label>' +
		'<input id="new-fname" name="student-fname" type="text" defaultValue="John">' +
		'<label for="new-lname">Last Name</label>' +
		'<input id="new-lname" name="student-lname" type="text" defaultValue="Smith">' +
		'<label for="new-age">Age</label>' + 
		'<input id="new-age" name="student-age" type="text" defaultValue="20">' +
		'<label for="new-gender">Gender</label>' + 
		'<input id="new-gender" name="student-gender" type="text" defaultValue="male">' + 
		'<div class="btn-group" id="new-student-btn-group">' +
		'<button>Add New Student</button><button>Cancel</button></div></form>';
		
	let newStudentState = studentReducer.mockImplementation(() => (
		{
			tblname: 'student_list',
			rowType: 'student',
			headers: ['First', 'Last', 'Age', 'Gender'],
			data: [
				{ id: 1, stndFname: 'Justin', stndLname: 'Smith', stndAge: 23, stndGender: 'male' },
				{ id: 2, stndFname: 'Grayson', stndLname: 'Chance', stndAge: 20, stndGender: 'male' },
				{ id: 3, stndFname: 'Lilly', stndLname: 'Bell', stndAge: 30, stndGender: 'female' },
				{ id: 4, stndFname: 'Suri', stndLname: 'Chance', stndAge: 25, stndGender: 'female' },
				{ id: 5, stndFname: 'John', stndLname: 'Smith', stndAge: 20, stndGender: 'male' }
			]
		}
	))
	
	
	
	
	const formDataToObject = jest.fn(() => ({ stndFname: 'Joan', stndLname: 'Rivers', stndAge: 25, stndGender: 'female' }));

})