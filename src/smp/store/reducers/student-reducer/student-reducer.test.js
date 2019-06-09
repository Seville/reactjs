import studentReducer from './index.js';
import SEED_DATA from '../../../seed-data/student_grid_info';
import * as types from '../../../constants/student-constants';
import * as actions from '../../actions/student-actions';
import * as testConstants from '../../../constants/test-constants';

let initialState;

beforeAll(() => {
	initialState = SEED_DATA;
});

test('should return the initial state when state is undefined', () => {
	expect(studentReducer(undefined, {})).toEqual(SEED_DATA);
});

test('should add new student to list of students', () => {	
	let nextState = { ...initialState };
	let dataCloneNew = initialState['data'];
	
	let largestId = 0;
	for(let item of dataCloneNew){
		if(item['id'] > largestId){
			largestId = item['id'];
		}
	}
	
	nextState['data'].push({id: largestId + 1, stndFname: 'John', stndLname: 'Denver', stndAge: '43', stndGender: 'male'})
	
	expect(studentReducer(undefined, actions.addStudent())).toEqual(nextState);
});

test('should add new student to list of students', () => {	
	let updateState = { ...initialState };
	let dataCloneEdit = initialState['data'];
	let randomId = 2;
	
	let updatedFormData = { stndFname: 'Ashley', stndAge: '25' };
	
	for(let item in dataCloneEdit){
		if(dataCloneEdit[item].id === randomId){
			dataCloneEdit[item] = { ...dataCloneEdit[item], ...updatedFormData };
		}
	}
	
	updateState['data'] = dataCloneEdit;
	
	expect(studentReducer(undefined, actions.editStudent(randomId))).toEqual(updateState);
});