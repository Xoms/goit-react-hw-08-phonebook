import { createAction } from '@reduxjs/toolkit';

const addContactRequest= createAction('record/addRequest');
const addContactSuccess= createAction('record/addSuccess');
const addContactError= createAction('record/addError');

const delContactRequest= createAction('record/delRequest');
const delContactSuccess= createAction('record/delSuccess');
const delContactError= createAction('record/delError');

const getContactsRequest= createAction('record/getRequest');
const getContactsSuccess= createAction('record/getSuccess');
const getContactsError= createAction('record/getError');

const actions = { 
    addContactRequest,
    addContactSuccess,
    addContactError,

    getContactsRequest,
    getContactsSuccess,
    getContactsError,

    delContactRequest,
    delContactSuccess,
    delContactError,
}
export default actions