import React from 'react';

let createAttrs = (el, attr, attrVal) => {
	var att = document.createAttribute(attr);
	att.value = attrVal;
	el.setAttributeNode(att);
}

const MyForm = ({formData}) => {
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
	
	return newForm;
}

export default MyForm;
