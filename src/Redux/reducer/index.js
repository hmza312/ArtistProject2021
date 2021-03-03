import { combineReducers } from 'redux';
// Import custom components
import artistReducer from './artist';


const rootReducer = combineReducers({
    data: artistReducer,
  
});

export default rootReducer;