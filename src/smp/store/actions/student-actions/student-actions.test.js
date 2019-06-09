import * as types from '../../../constants/student-constants';
import * as actions from './index';

it('should create an action to add student to the list', () => {
	let expectedAction = {
		type: types.ADD_STUDENT,
		formName: 'new-student'
	};
	
	expect(actions.addStudent()).toEqual(expectedAction);
});

it('should create an action to remove a student from the list', () => {	
	let id = 5;

	let expectedAction = {
		type: types.DELETE_STUDENT,
		id
	};
	
	expect(actions.deleteStudent(5)).toEqual(expectedAction);
});

it('should create an action to edit student info from the list', () => {	
	let id = 5;

	let expectedAction = {
		type: types.EDIT_STUDENT,
		formName: 'edit-student',
		id
	};
	
	expect(actions.editStudent(5)).toEqual(expectedAction);
});

it('should create an action to select student from the list', () => {	
	let student = { id: 5, stndFname: 'Lively', stndLname: 'Boggon', stndAge: 25, stndGender: 'female' };

	let expectedAction = {
		type: types.SELECT_STUDENT,
		student
	};
	
	expect(actions.selectStudent(student)).toEqual(expectedAction);
});


