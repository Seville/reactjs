export const addStudent = student => ({
	type: 'ADD_STUDENT',
	student
});

export const deleteStudent = id => ({
	type: 'DELETE_STUDENT',
	id
});

export const editStudent = (id) => ({
	type: 'EDIT_STUDENT',
	formName: 'edit-student',
	id
});

export const selectStudent = student => ({
	type: 'SELECT_STUDENT',
	student
});

export const showAllStudents = () => ({
	type: 'SHOW_ALL_STUDENTS'
});
