import React from 'react';
import MyButton from '../../containers/MyButton/myButton';

const MyForm = ({formData, selectedData}) => {
	if(formData === null){
		return ('');
	}
	let controlsArray = [];	
	for(let control of formData['controls']){
		let label = React.createElement('label', {
			htmlFor: control['attrs']['id'], 
			key: control['attrs']['id'] + '-label'
		},control['label']);
		
		let newControl;
		if(selectedData == null){
			newControl = React.createElement(control['tag'], control['attrs']);
		} else if(selectedData[control['field']] && selectedData[control['field']] !== null){
			newControl = React.createElement(control['tag'], {...control['attrs'], placeholder: selectedData[control['field']] });
		}
		controlsArray.push(label);
		controlsArray.push(newControl);
	}
	
	let buttonGroup = [];
	if(formData['buttonGroup'] && formData['buttonGroup']['buttons'] && formData['buttonGroup']['buttons'].length > 0){
		for(let button of formData['buttonGroup']['buttons']){
			let newBtn;
			if(selectedData && selectedData['id'] && selectedData['id'] !== null && selectedData['id'] !== ''){
				newBtn = React.createElement(MyButton, {...button['attrs'], callBackProp: selectedData['id']}, button['text']);
			} else {
				newBtn = React.createElement(MyButton, button['attrs'], button['text']);
			}
			buttonGroup.push(newBtn);
		}
	}
	
	controlsArray.push(buttonGroup);
	
	return React.createElement('form', formData['attrs'], controlsArray );
}

export default MyForm;
