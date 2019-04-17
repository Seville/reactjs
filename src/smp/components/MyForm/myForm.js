import React from 'react';

const MyForm = ({formData, onCancel}) => {
	if(formData === null){
		return ('');
	}
	let controlsArray = [];	
	for(let control of formData['controls']){
		let label = React.createElement('label', {
			htmlFor: control['attrs']['id'], 
			key: control['attrs']['id'] + '-label'
		},control['label']);
		
		let newControl =  React.createElement(control['tag'], control['attrs']);
		controlsArray.push(label);
		controlsArray.push(newControl);
	}
	
	let submitBtn = React.createElement('div', { key: formData['attrs']['id']+'-1'}, [
		React.createElement('button', {id: formData['submitId'], key: formData['submitId']+'-submit'}, 'Submit'),
		React.createElement('button', {className: 'cancel-btn', key: formData['submitId']+'-cancel', onClick:() => onCancel() }, 'Cancel')
	]);
	controlsArray.push(submitBtn);
	
	return React.createElement('form', formData['attrs'], controlsArray );
}

export default MyForm;
