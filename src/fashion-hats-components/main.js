import React from 'react';
import Grid from './grid';
import EditRecordForm from './edit-record-form';
import AddRecordForm from './add-record-form';
import SearchRecordForm from './search-record-form';
import RestCall from './service/restCalls';
import RestStatus from './service/restStatus';
import ButtonEvents from './helpers/buttonEvents';
import CONSTANTS from './constants';


export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEdit: false,
			isSearch: false,
			isAdd: false,
			isGrid: false,
			isLoaded: false,
			items: [],
			result: {error: null, success: null, noresult: null},
			selected: null
		};
	}
	
	// Define button events in MAIN component
	showAddForm = ButtonEvents.showAddForm;
	showSearchForm = ButtonEvents.showSearchForm;
	showEditForm = ButtonEvents.showEditForm;
	showGrid = ButtonEvents.showGrid;
	resetProps = ButtonEvents.resetProps;
	
	searchByName(e) {
		if(e.type === 'click' || e.which === 13){
			e.preventDefault();
			// Reset state props to initial values
			this.resetProps();
			
			RestCall.searchForAccountHandler()
			.then(res => res.json())
			.then(
				(result) => {
					if(result && result.length > 0) {
					  let resultClone = result.slice();
					  this.setState({
						isLoaded: true,
						items: resultClone,
						isGrid: true
					  });
					} else {
					  this.setState({
						isLoaded: true,
						result: {error: null, success: null, noresult: true}
					  });
					}
				},
				(error) => {
					this.setState({
						isLoaded: true,
						result: {error: error, success: null, noresult: null}
					});
				}
			)
		}
	};
	
	showAll() {
		// Reset state props to initial values
		this.resetProps();
		
		RestCall.showAllAccountsHandler()
		.then(res => res.json())
		.then(
			(result) => {
				if(result && result.length > 0) {
					let resultClone = result.slice();
					this.setState({
					  isLoaded: true,
					  items: resultClone,
					  isGrid: true
					});
				} else {
					this.setState({
						isLoaded: true,
						result: {error: null, success: null, noresult: true}
					});
				}
			},
			(error) => {
				this.setState({
					isLoaded: true,
					result: {error: error, success: null, noresult: null}
				});
			}
		)
	};
	
	addAccount() {
		// Reset state props to initial values
		this.resetProps();
		
		RestCall.addAccountHandler()
		.then(res => res.json())
		.then(
			(result) => {
				// result = "Ok"
				this.setState({
				  isLoaded: true,
				  result: {error: null, success: CONSTANTS.AccountCreatedSuccessMsg, noresult: null}
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					result: {error: error, success: null, noresult: null}
				});
			}
		)
	};
	
	removeAccount(e, id) {
		// Reset state props to initial values
		e.preventDefault();
		this.resetProps();
		
		RestCall.removeAccountHandler(id)
		.then(res => res.json())
		.then(
			(result) => {
				// result = "Ok"
				this.setState({
				  isLoaded: true,
				  result: {error: null, success: CONSTANTS.AccountRemovedSuccessMsg, noresult: null}
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					result: {error: error, success: null, noresult: null}
				});
			}
		)
	}
	
	updateAccount(e) {
		// Reset state props to initial values
		e.preventDefault();
		this.resetProps();
		
		RestCall.updateAccountHandler()
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					result: {error: null, success: CONSTANTS.AccountUpdatedSuccessMsg, noresult: null}
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					result: {error: error, success: null, noresult: null}
				});
			}
		)
	}
	
	render() {
		const mainComponentState = {
			result: this.state.result,
			isLoaded: this.state.isLoaded,
			items: this.state.items
		};
		
		return (
			<div>
				<section>
					<button onClick={() => this.showAll()}>Show all</button>&nbsp;
					<button onClick={() => this.showAddForm()}>Add record</button>&nbsp;
					<button onClick={() => this.showSearchForm()}>Search for record</button>
				</section>
				
				<RestStatus 
					result={this.state.result}
				/>
				
				<Grid 
					mainState={mainComponentState}
					show={this.state.isGrid} 
					showEdit={(item) => this.showEditForm(item)}
					removeRecord={(e, id) =>  this.removeAccount(e, id)}
				/>
				
				<SearchRecordForm 
					show={this.state.isSearch}
					onClick={(e) => this.searchByName(e)}
				/>
				
				<AddRecordForm 
					show={this.state.isAdd}
					addRecord={() => this.addAccount()}
				/>
				
				<EditRecordForm 
					show={this.state.isEdit}
					selected={this.state.selected}
					updateRecord={(e) => this.updateAccount(e)}
				/>
			</div>
		);
	}
};