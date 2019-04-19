import { hideForm } from '../store/actions/form-display';
import { addStudent } from '../store/actions/student-management';

export const newStudentFormConfig = {
	submitId: 'add-student-id',
	attrs: {
		id: 'add-student',
		name: 'add-student' 
	},
	controls: [
		{ 
			tag: 'input',
			field: 'stndFname',
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
			field: 'stndLname',
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
			field: 'stndAge',
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
			field: 'stndGender',
			attrs: {
				key: 'add-04',
				id: 'add-gender',
				name: 'add-gender',
				type: 'text'
			}, 
			label: 'Gender' 
		}
	],
	buttonGroup: {
		attrs: {
			className: 'btn-group',
			id: 'add-student-btn-group'
		},
		buttons: [
			{
				
				attrs: {
					key: 'add-btn-01',
					id: 'add-btn-01',
					textVal: 'Add New Student',
					callBack: addStudent
				}
			},
			{
				text: 'Cancel',
				attrs: {
					key: 'add-btn-02',
					id: 'add-btn-02',
					textVal: 'Cancel',
					callBack: hideForm
				}
			}
		]
	}
}