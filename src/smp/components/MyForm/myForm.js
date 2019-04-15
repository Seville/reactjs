import React from 'react';

const MyForm = ({formData}) => {
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
	
	let submitBtn = React.createElement('div', { key: formData['attrs']['id']+'-1'},
		React.createElement('button', {id: formData['submitId']}, 'Submit')
	);
	controlsArray.push(submitBtn);
	
	return React.createElement('form', formData['attrs'], controlsArray );
}


/*const MyForm = ({formData}) => {
	let newForm = document.createElement('form');
	for(let key in formData['attrs']){
		if(key !== 'controls'){
			createAttrs(newForm, key, formData['attrs'][key]);
		}
	}
	
	for(let control of formData['controls']){
		let newControl = document.createElement(control['tag']);
		for(let key in control['attrs']){
			createAttrs(newControl, key, control['attrs'][key]);
		}
		newForm.appendChild(newControl);
	}
	debugger;
	
	return newForm;
};*/

export default MyForm;
