import jQ from 'jquery';
import objectMapper from 'object-mapper';
import SEED_DATA from '../../../seed-data/customer_info';
import { studentFormMap } from '../../../mappers/formMapper';
import isValid from '../../../validations/StudentValidator/studentValidator';

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
	
	let mappedObject = objectMapper(formData, studentFormMap);
	
	if(isValid(mappedObject)){
		return mappedObject;
	} else {
		return null;
	}
}



const studentReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_STUDENT':
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
				return { ...state, data: dataCloneNew };
			} else {
				return { ...state }
			}
		case 'DELETE_STUDENT':
			return { ...state }
		case 'EDIT_STUDENT':
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
		case 'SELECT_STUDENT':
			return { ...state }
		default:
			return state
	}
}

export default studentReducer;