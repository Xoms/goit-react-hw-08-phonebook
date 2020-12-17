import { createReducer } from '@reduxjs/toolkit';
import recordActions from './recordActions';

// const initialState = JSON.parse(localStorage.getItem('contacts')) || [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
//   ];

const getContacts = (state, action) => {
    return action.payload;
}

const onAddContact = (state, action) => {
    return [...state, action.payload]
}


const  onDelContact = (state, action) =>{
    return state.filter( ({id}) => id !== action.payload )
};

//для спиннера
const loadingReducer = createReducer (false , {
    [recordActions.getContactsRequest]: () => true,
    [recordActions.getContactsSuccess]: () => false,
    [recordActions.getContactsError]: () => false,

    [recordActions.addContactRequest]: () => true,
    [recordActions.addContactSuccess]: () => false,
    [recordActions.addContactError]: () => false,

    [recordActions.delContactRequest]: () => true,
    [recordActions.delContactSuccess]: () => false,
    [recordActions.delContactError]: () => false,
})

const recordReducer = createReducer([], {
    
    [recordActions.getContactsSuccess]: getContacts,
    [recordActions.addContactSuccess]: onAddContact,
    [recordActions.delContactSuccess]: onDelContact,
})  


 const contactsRedusers = {recordReducer, loadingReducer}

export default contactsRedusers;