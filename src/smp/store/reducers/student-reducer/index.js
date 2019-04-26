import jQ from 'jquery';
import objectMapper from 'object-mapper';
import SEED_DATA from '../../../seed-data/customer_info';
import { studentFormMap } from '../../../mappers/formMapper';

const initialState = SEED_DATA;

let formDataToObject = (formName) => {
	let formData = {};
	let formSerialize = jQ(`#${formName}`).serialize();
	let formList = formSerialize.split('&');
	for(let input of formList){
		let formEntity = input.split('=');
		if(formEntity[1] !== ''){
			formData[formEntity[0]] = formEntity[1];
		}
	}
	return formData;
}

const studentReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_STUDENT':
			return { ...state }
		case 'DELETE_STUDENT':
			return { ...state }
		case 'EDIT_STUDENT':
			let dataClone = [ ...state['data'] ];
			let updatedFormData = formDataToObject(action.formName);
			for(let item in dataClone){
				if(dataClone[item].id === action.id){
					let updatedStudentData = objectMapper(updatedFormData, studentFormMap);
					dataClone[item] = { ...dataClone[item], ...updatedStudentData };
				}
			}
			return {...state, data: dataClone };
		case 'SELECT_STUDENT':
			return { ...state }
		default:
			return state
	}
}

export default studentReducer;