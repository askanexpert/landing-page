import { combineReducers } from 'redux';
import LeadReducer from './reducer_lead';

const rootReducer = combineReducers({
  lead: LeadReducer
});

export default rootReducer;
