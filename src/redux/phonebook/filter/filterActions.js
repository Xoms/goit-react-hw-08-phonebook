// import types from './actionTypes';

// const filterChange = (value='') => ({    //когда с функцией - action creator, просто объект - action
//     type: types.FILTER_CHANGE,
//     payload: {     // как хочу - так и называю, внутри тоже что угодно
//         value
//     }
// })

// const filterActions = {filterChange, };
// export default filterActions


//with tools
import types from './actionTypes';
import { createAction } from '@reduxjs/toolkit';

const filterChange = createAction(types.FILTER_CHANGE);

const actions = { filterChange }
export default actions