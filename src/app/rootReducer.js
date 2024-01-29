// rootReducer.js
import { combineReducers } from 'redux';
import todoReducer from '../feature/todo/todoSlice';
import percentageReducer from '../feature/Percentage/percentageSlice';

const rootReducer = combineReducers({
    todos: todoReducer,
    percentage: percentageReducer,
    // Add other reducers if you have more slices
});

export default rootReducer;
