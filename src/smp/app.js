import React from 'react';
import StudentGrid from './containers/StudentGrid/studentGrid';
import Header from './components/Header/header';
import StudentForm from './containers/StudentForm/studentForm'

const App = () => (
	<div className='smp-main'>
		<Header />
		<div className='smp-form-and-grid'>
			<StudentGrid />
			<StudentForm />
		</div>
	</div>
)

export default App
