import * as studentHelper from './student-helper';
import * as formConstants from '../constants/form-constants';
import * as testConstants  from '../constants/test-constants';

test('should read new student form and return formData', () => {
	document.body.innerHTML = testConstants.NEW_STUDENT_FORM_HTML;
	
	expect(studentHelper.formDataToObject(formConstants.NEW_STUDENT_FORMNAME)).toEqual({
		stndFname: 'John', stndLname: 'Denver', stndAge: '43', stndGender: 'male'
	});
});

test('should read edit student form and return formData', () => {
	document.body.innerHTML = testConstants.EDIT_STUDENT_FORM_HTML;
	
	expect(studentHelper.formDataToObject(formConstants.EDIT_STUDENT_FORMNAME)).toEqual({
		stndFname: 'Greg', stndLname: 'Alba', stndAge: '33', stndGender: 'male'
	});
});

test('should read empty student form and return null', () => {
	document.body.innerHTML = testConstants.EMPTY_STUDENT_FORM_HTML;
	
	expect(studentHelper.formDataToObject(formConstants.NEW_STUDENT_FORMNAME)).toEqual(null);
});
