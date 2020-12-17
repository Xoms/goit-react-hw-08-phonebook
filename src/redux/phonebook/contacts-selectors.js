import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;


const getIsLoading = state => state.contacts.isLoading;

const getVisibleContacts = createSelector([getItems, getFilter], (items, filter) => {
  const lowerCaseFilter = filter.toLowerCase();
  return items.filter( ({name}) => name.toLowerCase().includes(lowerCaseFilter) );   
})

//без реселекта
// const getVisibleContacts = state => {
//   const items = getItems(state);
//   const lowerCaseFilter = getFilter(state).toLowerCase();
//   return items.filter( ({name}) => name.toLowerCase().includes(lowerCaseFilter) );   
// } 


const getContactById = createSelector( [(state, id) => id, getItems], (id, items) => {
    return items.find( el => el.id === id)
} )
// без реселекта
// const getContactById = (state, id) => {
//     return getItems(state).find( el => el.id === id)
// }
const selectors = {getItems, getFilter, getIsLoading, getVisibleContacts, getContactById }
export default selectors;