import SEED_DATA from '../../../seed-data/customer_info';

const initialState = {
	studentList: SEED_DATA
}

const studentReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_STUDENT':
			return {
				...state,
			}
		case 'DELETE_STUDENT':
			return {
				...state,
			}
		case 'EDIT_STUDENT':
			return {
				...state,
			}
		case 'SHOW_ALL_STUDENTS':
			return {
				tblname: 'cust_list',
				headers: ['First', 'Last', 'Age', 'Gender'],
				data: [
					{ id: 1, fname: 'Justin', lname: 'Smith', age: 23, gender: 'male' },
					{ id: 2, fname: 'Grayson', lname: 'Chance', age: 20, gender: 'male' },
					{ id: 3, fname: 'Lilly', lname: 'Bell', age: 30, gender: 'female' },
					{ id: 4, fname: 'Suri', lname: 'Chance', age: 25, gender: 'female' }
				]
			}
			/*fetch('../../../seed-data/customer_info.json')
			.then(res => res.json)
			.then(myData => {
				return myData;
			})*/
		default:
			return state
	}
}

export default studentReducer;