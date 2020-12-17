// import types from './actionTypes';

// const filterReducer = (state = '', {type, payload} ) => {
//     switch(type) {
//         case types.FILTER_CHANGE:
//             return payload.value;

//         default: 
//             return state;        
//     }
// }

// export default filterReducer; 

//с тулзами
import { createReducer } from '@reduxjs/toolkit';
import filterActions from './filterActions';

const filterReducer = createReducer('', {
    [filterActions.filterChange]: (state, action) => action.payload,
})

export default filterReducer; 