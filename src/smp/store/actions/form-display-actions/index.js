import * as types from '../../../constants/form-constants';

export const showEditForm = (selectedRow) => ({
	type: types.SHOW_EDIT_FORM,
	selectedRow
});

export const showNewForm = () => ({
	type: types.SHOW_NEW_FORM
});

export const hideForm = () => ({
	type: types.HIDE_FORM
});
