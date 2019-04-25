import React from 'react';
import StudentGrid from './containers/StudentGrid/studentGrid';
import Header from './components/Header/header';
import StudentEditForm from './containers/StudentForms/StudentEditForm/studentEditForm'

const App = () => (
	<div>
		<Header />
		<StudentGrid />
		<StudentEditForm />
	</div>
)

export default App
