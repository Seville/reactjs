const updateAccount = function(e, cData){
	let selected = this.state.selected;
	for(let key in this.state.custList.data){
		if(this.state.custList.data[key].id === selected.id){
			this.state.custList.data[key] = Object.assign(selected, cData);
			break;
		}
	}
	this.showTable();
}

const addAccount = function(e, cData){
	let maxIndex = 0;
	for(let key in this.state.custList.data){
		if(this.state.custList.data[key].id > maxIndex ){
			maxIndex = this.state.custList.data[key].id;
		}
	}
	cData["id"] = maxIndex + 1;
	this.state.custList.data.push(cData);
	
	this.showTable();
}

const searchList = function(e, search){
	for(let key in this.state.custList.data){
		let custRecord = this.state.custList.data[key];
		if(custRecord[search['srch_prop']] === custRecord[search['srch_val']]){
			debugger;
		}
	}
}

export default { updateAccount, addAccount, searchList }
