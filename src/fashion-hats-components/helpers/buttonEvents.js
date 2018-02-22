	const showAddForm = function() {
		this.resetProps();
		this.setState({
			isAdd: true
		})
	};
	
	const showSearchForm = function() {
		this.resetProps();
		this.setState({
			isSearch: true,
		});
	};
	
	const showEditForm = function(item) {
		this.resetProps();
		this.setState({
			isEdit: true,
			selected: item
		});
	};
	
	const showGrid = function() {
		this.resetProps();
		this.setState({
			isGrid: true
		});
	};

	const resetProps = function() {
		this.setState({
			isEdit: false,
			isRemove: false,
			isSearch: false,
			isAdd: false,
			isGrid: false,
			isLoaded: false,
			items: [],
			result: {error: null, success: null, noresult: null},
			selected: null
		});
	};
	
export default { showAddForm, showSearchForm, showEditForm, showGrid, resetProps }