// URL constants
const searchByNameUrl = "http://localhost:8080/sample/account/getAccount";
const showAllRecordsUrl = "http://localhost:8080/sample/all";
const updateRecordUrl = "http://localhost:8080/sample/account/updateAccount";
const removeRecordUrl = "http://localhost:8080/sample/account/removeAccount";
const addRecordUrl = "http://localhost:8080/sample/account/createAccount";

// Message constants
const noResultsMsg = "No results were found.";
const AccountCreatedSuccessMsg= "Account successfully created";
const AccountRemovedSuccessMsg= "Account successfully removed";
const AccountUpdatedSuccessMsg= "Account successfully updated";

export default { 
	searchByNameUrl, 
	showAllRecordsUrl, 
	updateRecordUrl, 
	removeRecordUrl, 
	addRecordUrl,
	noResultsMsg,
	AccountCreatedSuccessMsg,
	AccountRemovedSuccessMsg,
	AccountUpdatedSuccessMsg
};