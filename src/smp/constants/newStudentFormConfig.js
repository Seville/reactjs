export const newStudentFormConfig = {
	submitId: 'add-student-id',
	attrs: {
		id: 'add-student',
		name: 'add-student' 
	},
	controls: [
		{ 
			tag: 'input', 
			attrs: {
				key: 'add-01',
				id: 'add-fname',
				name: 'add-fname',
				type: 'text'
			}, 
			label: 'First Name' 
		},
		{ 
			tag: 'input', 
			attrs: {
				key: 'add-02',
				id: 'add-lname',
				name: 'add-lname',
				type: 'text'
			}, 
			label: 'Last Name' 
		},
		{ 
			tag: 'input', 
			attrs: {
				key: 'add-03',
				id: 'add-age',
				name: 'add-age',
				type: 'text'
			}, 
			label: 'Age' 
		},
		{ 
			tag: 'input', 
			attrs: {
				key: 'add-04',
				id: 'add-gender',
				name: 'add-gender',
				type: 'text'
			}, 
			label: 'Gender' 
		}
	]
}