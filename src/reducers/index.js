import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const counterApp = combineReducers({
  counterReducer
})

export default counterApp
