import * as types from '../../../constants/student-constants';
import * as formConstants from '../../../constants/form-constants';

export const addStudent = () => ({
	type: types.ADD_STUDENT,
	formName: formConstants.NEW_STUDENT_FORMNAME
});

export const deleteStudent = id => ({
	type: types.DELETE_STUDENT,
	id
});

export const editStudent = (id) => ({
	type: types.EDIT_STUDENT,
	formName: formConstants.EDIT_STUDENT_FORMNAME,
	id
});

export const selectStudent = student => ({
	type: types.SELECT_STUDENT,
	student
});
