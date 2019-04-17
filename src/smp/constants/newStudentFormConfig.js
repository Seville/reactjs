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
					callBack: hideForm()
				}
			},
			{
				text: 'Cancel',
				attrs: {
					key: 'add-btn-02',
					id: 'add-btn-02',
					textVal: 'Cancel',
					callBack: () => addStudent()
				}
			}
		]
	}
}