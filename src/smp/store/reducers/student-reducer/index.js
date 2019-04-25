import jQ from 'jquery';
import SEED_DATA from '../../../seed-data/customer_info';

const initialState = SEED_DATA;

let getFormData = (formName) => {
	let formData = {};
	let formElem = jQ(`#${formName}-student`)[0];
	for(let element of formElem){
		if(element.tagName == 'INPUT'){
			debugger;
		}
	}
}

const studentReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_STUDENT':
			return { ...state }
		case 'DELETE_STUDENT':
			return { ...state }
		case 'EDIT_STUDENT':
			let updatedStudentInfo = getFormData(action.formName);
			return { ...state }
		case 'SELECT_STUDENT':
			return { ...state }
		default:
			return state
	}
}

export default studentReducer;