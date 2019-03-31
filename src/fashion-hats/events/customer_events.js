const updateAccount = function(e, cData){
	let selected = this.state.selected;
	for(let key in this.state.custList.data){
		if(this.state.custList.data[key].id == selected.id){
			this.state.custList.data[key] = Object.assign(selected, cData);
			break;
		}
	}
	this.showTable();
}

const addAccount = function(e, cData){
	this.state.custList.data.push(cData);
	
	this.showTable();
}

export default { updateAccount, addAccount }
