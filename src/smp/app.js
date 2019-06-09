import React from 'react';
import StudentGrid from './containers/StudentGrid/student-grid';
import Header from './components/Header/header';
import StudentForm from './containers/StudentForm/student-form'

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
