export const addStudent = student => ({
	type: 'ADD_STUDENT',
	student
});

export const deleteStudent = id => ({
	type: 'DELETE_STUDENT',
	id
});

export const editStudent = student => ({
	type: 'EDIT_STUDENT',
	student
});

export const showAllStudents = () => ({
	type: 'SHOW_ALL_STUDENTS'
})