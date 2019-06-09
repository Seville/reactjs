import SEED_DATA from '../../../seed-data/student_grid_info';
import { formDataToObject } from '../../../helpers/student-helper';
import * as studentConstants from '../../../constants/student-constants';

const initialState = SEED_DATA;
/*
const initialState = {
	gridData: null,
	loading: false,
	error: null
}
*/

const studentReducer = (state = initialState, action) => {
	switch(action.type) {
		case studentConstants.CONNECT_TO_API:
			return { ...state }
		case studentConstants.GET_STUDENT_DATA_SUCCESS:
			return { ...state }
		case studentConstants.GET_STUDENT_DATA_FAILURE:
			return { ...state }
		case studentConstants.ADD_STUDENT:
			let dataCloneNew = [ ...state['data'] ];
			let newFormData = formDataToObject(action.formName);
			let largestIndex = 0;
			for(let item of dataCloneNew){
				if(item['id'] > largestIndex){
					largestIndex = item['id'];
				}
			}
			if(newFormData !== null){
				newFormData['id'] = largestIndex + 1;
				dataCloneNew.push(newFormData);
				debugger;
				return { ...state, data: dataCloneNew };
			} else {
				return { ...state }
			}
		case studentConstants.EDIT_STUDENT:
			let dataCloneEdit = [ ...state['data'] ];
			let updatedFormData = formDataToObject(action.formName);
			if(updatedFormData !== null){
				for(let item in dataCloneEdit){
					if(dataCloneEdit[item].id === action.id){
						dataCloneEdit[item] = { ...dataCloneEdit[item], ...updatedFormData };
					}
				}
				return { ...state, data: dataCloneEdit };
			} else {
				return { ...state }
			}
		case studentConstants.DELETE_STUDENT:
			return { ...state }
		case studentConstants.SELECT_STUDENT:
			return { ...state }
		default:
			return state
	}
}

export default studentReducer;