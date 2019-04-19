import React from 'react';
import StudentGrid from './containers/StudentGrid/studentGrid';
import StudentForm from './containers/StudentForm/studentForm';
import Header from './components/Header/header';

const App = () => (
	<div>
		<Header />
		<StudentGrid />
		<StudentForm />
	</div>
)

export default App
