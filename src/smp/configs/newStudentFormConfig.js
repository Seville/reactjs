import { hideForm } from '../store/actions/form-display';
import { addStudent } from '../store/actions/student-management';

export const newStudentFormConfig = {
	submitId: 'new-submit-student-id',
	attrs: {
		id: 'new-student',
		name: 'new-student' 
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
					key: 'new-btn-01',
					id: 'new-btn-01',
					textVal: 'Add New Student',
					callBack: addStudent,
					callBackProp: null
				}
			},
			{
				text: 'Cancel',
				attrs: {
					key: 'new-btn-02',
					id: 'new-btn-02',
					textVal: 'Cancel',
					callBack: hideForm
				}
			}
		]
	}
}