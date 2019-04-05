import SEED_DATA from '../seed-data/customer_info';

const loadCustomerList = function(){
	this.setState({
		custTableData: SEED_DATA
	});
}

const updateAccount = function(e, cData){
	let selected = this.state.selected;
	for(let key in this.state.custTableData.data){
		if(this.state.custTableData.data[key].id === selected.id){
			this.state.custTableData.data[key] = Object.assign(selected, cData);
			break;
		}
	}
	this.showTable();
}

const addAccount = function(e, cData){
	if(Object.entries(cData).length === 0 && cData.constructor === Object){
		let maxIndex = 0;
		for(let key in this.state.custTableData.data){
			if(this.state.custTableData.data[key].id > maxIndex ){
				maxIndex = this.state.custTableData.data[key].id;
			}
		}
		cData["id"] = maxIndex + 1;
		this.state.custTableData.data.push(cData);
	}
	
	this.showTable();
}

const searchList = function(e, search){
	if(search['srch_val']){
		let filterdList = [];
		let filterdData = { ...this.state.tableData };
		for(let key in this.state.custTableData.data){
			let custRecord = this.state.custTableData.data[key];
			if(custRecord[search['srch_prop']] === search['srch_val']){
				filterdList.push(custRecord);
			}
		}
		filterdData['data'] = filterdList;
		this.setState({
			tableData: filterdData
		});
	}
	
	this.showTable();
}

export default { updateAccount, addAccount, searchList, loadCustomerList }

