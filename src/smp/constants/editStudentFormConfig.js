export const editStudentFormConfig = {
	submitId: 'edit-student-id',
	attrs: {
		id: 'edit-student',
		name: 'edit-student' 
	},
	controls: [
		{ 
			tag: 'input', 
			attrs: {
				key: 'edit-01',
				id: 'edit-fname',
				name: 'edit-fname',
				type: 'text'
			}, 
			label: 'First Name' 
		},
		{ 
			tag: 'input', 
			attrs: {
				key: 'edit-02',
				id: 'edit-lname',
				name: 'edit-lname',
				type: 'text'
			}, 
			label: 'Last Name' 
		},
		{ 
			tag: 'input', 
			attrs: {
				key: 'edit-03',
				id: 'edit-age',
				name: 'edit-age',
				type: 'text'
			}, 
			label: 'Age' 
		},
		{ 
			tag: 'input', 
			attrs: {
				key: 'edit-04',
				id: 'edit-gender',
				name: 'edit-gender',
				type: 'text'
			}, 
			label: 'Gender' 
		}
	]
}