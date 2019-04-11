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
		case 'SELECT_STUDENT':
			let newGrid ={ ...state};
			newGrid['studentList']['data'] = [];
			newGrid['studentList']['data'].push(action.student);
			return newGrid;
		case 'SHOW_ALL_STUDENTS':
			return {
				...state
			}
		default:
			return state
	}
}

export default studentReducer;