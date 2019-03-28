import CONSTANTS from '../constants';

const showAllAccountsHandler = () => {
	let reqOpts = {
		method: 'GET'
	};
	
	return fetch(CONSTANTS.showAllRecordsUrl, reqOpts);
}

const searchForAccountHandler = () => {
	const searchForm = document.forms["search_form"];
	let formData = new FormData();
	formData.append('firstname', searchForm.search.value);
	
	let reqOpts = {
		method: 'POST',
		body: formData
	};
	
	return fetch(CONSTANTS.searchByNameUrl, reqOpts);
}

const addAccountHandler = () => {
	const newAccountForm = document.forms["add_form"];
	let formObj = {};
	formObj["id"] = '';				
	formObj["first_name"] = newAccountForm.firstname.value;
	formObj["last_name"] = newAccountForm.lastname.value;
	formObj["mobile"] = newAccountForm.mobile.value;
	formObj["home"] = newAccountForm.home.value;
	formObj["email"] = newAccountForm.email.value;
	formObj["address"] = newAccountForm.address.value;
	formObj["city"] = newAccountForm.city.value;
	formObj["state"] = newAccountForm.state.value;
	formObj["zip"] = newAccountForm.zip.value;
	
	let reqOpts = {
		method: 'POST',
		body: JSON.stringify(formObj),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	};
	
	return fetch(CONSTANTS.addRecordUrl, reqOpts);
}

const removeAccountHandler = (id) => {
	let formData = new FormData();
	formData.append('id', id);
	
	let reqOpts = {
		method: 'POST',
		body: formData
	};
	
	return fetch(CONSTANTS.removeRecordUrl, reqOpts);
}

const updateAccountHandler = (account) => {
	const updateAccountForm = document.forms["update_form"];
	let formObj = {};
	formObj["id"] = updateAccountForm.accntId.value;				
	formObj["first_name"] = updateAccountForm.firstname.value;
	formObj["last_name"] = updateAccountForm.lastname.value;
	formObj["mobile"] = updateAccountForm.mobile.value;
	formObj["home"] = updateAccountForm.home.value;
	formObj["email"] = updateAccountForm.email.value;
	formObj["address"] = updateAccountForm.address.value;
	formObj["city"] = updateAccountForm.city.value;
	formObj["state"] = updateAccountForm.state.value;
	formObj["zip"] = updateAccountForm.zip.value;
	
	let reqOpts = {
		method: 'POST',
		body: JSON.stringify(formObj),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	};
	
	return fetch(CONSTANTS.updateRecordUrl, reqOpts);
}
	
export default { searchForAccountHandler, showAllAccountsHandler, addAccountHandler, removeAccountHandler, updateAccountHandler }