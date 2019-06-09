import isValid from './student-validator'

test('student name to be valid', () => {
	let studentObj = {};
	studentObj['stndFname'] = 'Jason';
	expect(isValid(studentObj)).toBe(true);
});

test('student name to be invalid', () => {
	const jsdomAlert = window.alert;  // remember the jsdom alert
	window.alert = () => {};
	let studentObj = {};
	studentObj['stndFname'] = 'Jasonasdfasdfasdddasdxcvxsfasdfasdfasf';
	expect(isValid(studentObj)).toBe(false);
	window.alert = jsdomAlert;
})