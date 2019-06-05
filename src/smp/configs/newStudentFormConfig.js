import { hideForm } from '../store/actions/form-display-actions';
import { addStudent } from '../store/actions/student-actions';

export const newStudentFormConfig = {
	submitId: 'new-student-submit',
	attrs: {
		id: 'new-student',
		name: 'new-student',
		className: 'student-form'
	},
	controls: [
		{ 
			tag: 'input',
			field: 'stndFname',
			attrs: {
				key: 'new-01',
				id: 'new-fname',
				name: 'student-fname',
				type: 'text'
			}, 
			label: 'First Name' 
		},
		{ 
			tag: 'input', 
			field: 'stndLname',
			attrs: {
				key: 'new-02',
				id: 'new-lname',
				name: 'student-lname',
				type: 'text'
			}, 
			label: 'Last Name' 
		},
		{ 
			tag: 'input',
			field: 'stndAge',
			attrs: {
				key: 'new-03',
				id: 'new-age',
				name: 'student-age',
				type: 'text'
			}, 
			label: 'Age' 
		},
		{ 
			tag: 'input',
			field: 'stndGender',
			attrs: {
				key: 'new-04',
				id: 'new-gender',
				name: 'student-gender',
				type: 'text'
			}, 
			label: 'Gender' 
		}
	],
	buttonGroup: {
		attrs: {
			className: 'btn-group',
			id: 'new-student-btn-group'
		},
		buttons: [
			{
				attrs: {
					id: 'new-btn-01',
					key: 'new-btn-01',
					textVal: 'Add New Student',
					callBack: addStudent,
					callBackProp: null
				}
			},
			{
				attrs: {
					id: 'new-btn-02',
					key: 'new-btn-02',
					textVal: 'Cancel',
					callBack: hideForm
				}
			}
		]
	}
}