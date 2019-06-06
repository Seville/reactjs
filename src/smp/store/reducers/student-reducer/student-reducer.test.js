import studentReducer from './index.js';
import SEED_DATA from '../../../seed-data/customer_info';
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
	document.body.innerHTML = testConstants.NEW_STUDENT_FORM_HTML;
	
	let nextState = { ...initialState };
	
	let dataCloneNew = initialState['data'];
	
	let largestIndex = 0;
	for(let item of dataCloneNew){
		if(item['id'] > largestIndex){
			largestIndex = item['id'];
		}
	}
	
	nextState['data'].push({id: largestIndex+1, stndFname: 'John', stndLname: 'Denver', stndAge: '43', stndGender: 'male'})
	
	expect(studentReducer(undefined, actions.addStudent())).toEqual(nextState);
})