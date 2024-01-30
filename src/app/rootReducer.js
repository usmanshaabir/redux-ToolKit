// rootReducer.js
import { combineReducers } from 'redux';
import todoReducer from '../feature/todo/todoSlice';
import percentageReducer from '../feature/Percentage/percentageSlice';
import cardSlice from '../feature/Cards/cardSlice';
import userSlice from '../feature/Users/userSlice';

const rootReducer = combineReducers({
    todos: todoReducer,
    percentage: percentageReducer,
    cart: cardSlice,
    users: userSlice
    // Add other reducers if you have more slices
});

export default rootReducer;
