import objectMapper from 'object-mapper';
import SEED_DATA from '../../../seed-data/customer_info';
import { studentFormMap } from '../../../mappers/formMapper';
import isValid from '../../../validations/StudentValidator/studentValidator';
import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT, SELECT_STUDENT } from '../../../constants/studentConstants';
import { addStudent, deleteStudent, editStudent, selectStudent, showAllStudents } from '../../actions/student-management';
import studentReducer from './index.js';

let initialState;

beforeAll(() => {
	initialState = SEED_DATA;
});

test('add student to list', () => {
	
	let EditFormState = { formConfig: editStudentFormConfig, selectedData: editFormAction.selectedRow };
	
	expect(studentReducer(initialState, addStudent())).toEqual(EditFormState);
})