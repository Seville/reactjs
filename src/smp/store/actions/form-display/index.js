export const showEditForm = (selected) => ({
	type: 'SHOW_EDIT_FORM',
	selectedRow: selected
});

export const showNewForm = () => ({
	type: 'SHOW_NEW_FORM'
});

export const hideForm = () => ({
	type: 'HIDE_FORM'
});
