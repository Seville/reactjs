const initialState = {
	formConfig: {
		attrs: {
			id: 'add-student',
			name: 'add-student' 
		},
		controls: [
			{ 
				tag: 'input', 
				attrs: {
					id: 'add-fname',
					name: 'add-fname',
					type: 'text'
				}, 
				label: 'First Name' 
			},
			{ 
				tag: 'input', 
				attrs: {
					id: 'add-lname',
					name: 'add-lname',
					type: 'text'
				}, 
				label: 'Last Name' 
			},
			{ 
				tag: 'input', 
				attrs: {
					id: 'add-age',
					name: 'add-age',
					type: 'text'
				}, 
				label: 'Age' 
			},
			{ 
				tag: 'input', 
				attrs: {
					id: 'add-gender',
					name: 'add-gender',
					type: 'text'
				}, 
				label: 'Gender' 
			}
		]
	}
};

const formReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'EDIT_FORM':
			return {
				...state,
			}
		case 'NEW_FORM':
			return {
				...state,
			}
		default:
			return state
	}
}

export default formReducer;