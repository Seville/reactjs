export const showEditForm = (selectedRow) => ({
	type: 'SHOW_EDIT_FORM',
	selectedRow
});

export const showNewForm = () => ({
	type: 'SHOW_NEW_FORM'
});

export const hideForm = () => ({
	type: 'HIDE_FORM'
});
