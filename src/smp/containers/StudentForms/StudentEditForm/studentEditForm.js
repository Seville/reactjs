import React from 'react'
import { connect } from 'react-redux'

const EditForm = ({dispatch}) => (
	<form id="stnd-edit">
		<fieldset>
			<legend>Update Student Info</legend>
		</fieldset>
	</form>
)

export default connect()(EditForm);
