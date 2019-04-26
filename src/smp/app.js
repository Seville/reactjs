import React from 'react';
import StudentGrid from './containers/StudentGrid/studentGrid';
import Header from './components/Header/header';
import StudentForm from './containers/StudentForm/studentForm'

const App = () => (
	<div>
		<Header />
		<StudentGrid />
		<StudentForm />
	</div>
)

export default App
