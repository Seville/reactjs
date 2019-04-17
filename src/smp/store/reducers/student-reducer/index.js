import SEED_DATA from '../../../seed-data/customer_info';

const initialState = SEED_DATA;

const studentReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_STUDENT':
			return { ...state }
		case 'DELETE_STUDENT':
			return { ...state }
		case 'EDIT_STUDENT':
			return { ...state }
		case 'SELECT_STUDENT':
			return { ...state }
		default:
			return state
	}
}

export default studentReducer;