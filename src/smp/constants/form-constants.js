// Student constants

// Form redux actions
export const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM';
export const SHOW_NEW_FORM = 'SHOW_NEW_FORM';
export const HIDE_FORM = 'HIDE_FORM';

// Form names
export const STUDENT_EDIT_FORM = 'student-edit-form';
export const STUDENT_NEW_FORM = 'student-new-form';

// Form field regex and error messages
export const NAME_REGEX = /^([a-zA-Z]){1,20}$/;
export const NAME_FIELD_ERROR = 'The name should be a string of characters (max: 20)';

export const AGE_REGEX = /^([0-9]){1,3}$/;
export const AGE_FIELD_ERROR = 'The name should be a string of numbers (max: 3)';

export const GENDER_REGEX = /^(male|female)$/;
export const GENDER_FIELD_ERROR = 'The gender should be a male or female';