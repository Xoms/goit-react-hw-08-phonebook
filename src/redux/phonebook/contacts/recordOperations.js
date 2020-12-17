import recordAtions from './recordActions';

import api from '../../../services/phonebook.service';

const addContact = newContact => dispatch => {
    dispatch(recordAtions.addContactRequest());

    api.addContact(newContact)
        .then(({data}) => {
            dispatch(recordAtions.addContactSuccess(data))
        })
        .catch( err => dispatch(recordAtions.addContactError(err)));
}

const delContact = id => dispatch => {
    dispatch(recordAtions.delContactRequest());

    api.delContact(id)
        .then(() => {
            dispatch(recordAtions.delContactSuccess(id))
        })
        .catch( err => dispatch(recordAtions.delContactError(err)));
}

const getContacts = () => dispatch => {
    dispatch(recordAtions.getContactsRequest());

    api.getContacts()
        .then(({data}) =>  {
            dispatch(recordAtions.getContactsSuccess(data))
    })
    .catch( err => dispatch(recordAtions.getContactsError(err)));
}

const contactsOperations = { addContact, getContacts, delContact }

export default contactsOperations;