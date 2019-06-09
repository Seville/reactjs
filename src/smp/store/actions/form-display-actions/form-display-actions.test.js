import * as types from '../../../constants/form-constants';
import * as actions from './index';

it('should create an action to display edit form for currently selected row', () => {
	let selectedRow = { stndFname: 'John', stndLname: 'Smith', stndAge: 20, stndGender: 'male' };
	
	let expectedAction = {
		type: types.SHOW_EDIT_FORM,
		selectedRow
	};
	
	expect(actions.showEditForm(selectedRow)).toEqual(expectedAction);
});

it('should create an action to display addstudent form', () => {	
	let expectedAction = {
		type: types.SHOW_NEW_FORM
	};
	
	expect(actions.showNewForm()).toEqual(expectedAction);
});

it('should create an action to hide all forms', () => {	
	let expectedAction = {
		type: types.HIDE_FORM
	};
	
	expect(actions.hideForm()).toEqual(expectedAction);
});
