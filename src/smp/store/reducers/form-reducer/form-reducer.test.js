import formReducer from './index.js'
import { newStudentFormConfig } from '../../../configs/newStudentFormConfig';
import { editStudentFormConfig } from '../../../configs/editStudentFormConfig';

let initialState;

jest.mock('../index');

beforeAll(() => {
	initialState = {
		formConfig: null,
		selectedData: null
	};
});

test('should return the initial state', () => {
	expect(formReducer(undefined, {})).toEqual({
		formConfig: null,
		selectedData: null
	});
});
