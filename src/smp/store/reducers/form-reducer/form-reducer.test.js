import formReducer from './index.js'
import { newStudentFormConfig } from '../../../configs/newStudentFormConfig';
import { editStudentFormConfig } from '../../../configs/editStudentFormConfig';
import { SHOW_EDIT_FORM, SHOW_NEW_FORM, HIDE_FORM  } from '../../../constants/formConstants';

let initialState;

beforeAll(() => {
	initialState = {
		formConfig: null,
		selectedData: null
	};
});

test('return edit-form config', () => {
	let editFormAction = {
		type: SHOW_EDIT_FORM,
		selectedRow: { id: 1, stndAge: 21, stndFname: 'John', stndLname: 'Smith', stndGender: 'male' }
	}
	
	let EditFormState = { formConfig: editStudentFormConfig, selectedData: editFormAction.selectedRow };
	
	expect(formReducer(initialState, editFormAction)).toEqual(EditFormState);
});

test('return new-form config', () => {
	let newFormAction = {
		type: SHOW_NEW_FORM
	};
	
	let NewFormState = { formConfig: newStudentFormConfig };
	
	expect(formReducer(initialState, newFormAction)).toEqual(NewFormState);
});

test('remove form', () => {
	let newFormAction = {
		type: HIDE_FORM
	};
	
	expect(formReducer(initialState, newFormAction)).toEqual(initialState);
});