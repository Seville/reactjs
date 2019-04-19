export const addStudent = student => ({
	type: 'ADD_STUDENT',
	student
});

export const deleteStudent = id => ({
	type: 'DELETE_STUDENT',
	id
});

export const editStudent = (formName) => ({
	type: 'EDIT_STUDENT',
	formName
});

export const selectStudent = student => ({
	type: 'SELECT_STUDENT',
	student
});

export const showAllStudents = () => ({
	type: 'SHOW_ALL_STUDENTS'
});
