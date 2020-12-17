import { combineReducers } from 'redux';
import contactsReducers from './contacts/recordReducer';
import filterReducer from './filter/filterReducer';

export default combineReducers({
        items: contactsReducers.recordReducer,
        filter: filterReducer,
        isLoading: contactsReducers.loadingReducer
    })