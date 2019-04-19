export const showEditForm = (selected, rowType) => ({
	type: 'SHOW_EDIT_FORM',
	selectedRow: selected,
	rowType
});

export const showNewForm = () => ({
	type: 'SHOW_NEW_FORM',
	rowType: 'student'
});

export const hideForm = () => ({
	type: 'HIDE_FORM'
});
